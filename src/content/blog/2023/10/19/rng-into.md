---
title: "Probability distribution: introduction"
tags:
- random
- clojure
abstract: |
    What are probability distributions?
---

Random numbers are not all the same, let's compare two random events:
- throw a dice
- measure a physical quantity

They are both stochastic (i.e random) events, since, in general, we cannot forsee the result in a deterministic manner.
Nevertheless, they are quite different:
- the dice has, usually, six faces and they are all equally probable to come out,
- the measure can be any real number, but it should be quite similar to the real value of the quantity we are mesuring.

When we talk about a random experiment, we have to list all its possible outcomes and assign a probability to each of them.
For example, in the case of throwing a dice this is quite simple: we have six possible outcomes and they all can happen with the same probability 1/6. This is an example of a discrete distribution, when the number of outcomes is finite or it is infinite but "not too big" (that is we can list all its elements, it is numerable).
We can assign the probability as we wish, but they must be positive and their sum must always be exactly 1.

The example of the measure is a more difficult, so we will get to it a little bit at a time. An important detail is that it cannot be described by a discrete distribution, the possible outcomes are _all_ the positive real numbers, which cannot be _listed_ (they are _not numerable_).

Probability theory is a branch of mathematics, but there are some quite intersting topics that can be described from a computational point of view, for example:
- simulate a random experiment, this can be useful to have a practical idea of what a distribution really means;
- statistical tests, given a real world dataset undestand if it is extracted from some known distribution;
- Montecarlo methods, which uses probabilistic methods to get result which would be really expensive using a deterministic methods.

In this series of posts we won't give a formal definition of probability (for example using Kolmogorov axioms), we just need the statical interpretation: the probability of the event is the ratio of the number of outcomes in which a specified event occurs to the total number of trials (the number of trials has to be sufficiently big).

For the code examples we will use the Clojure programming language, but they can be adapted to every other programming language.

## Simulation in the discrete and finite case
The building block to simulate a discrete distribution with a finite amount of outcomes is the function `rand-int`, which takes a integer number `n` and returns a random number from 0 to `n-1`.
For the moment we assume that all the outcomes have the same probability 1/n, that is a _uniform distribution_. If the range is not `[0,n)` but a generic `[mi, ma]`, we just have to create a random in `[0, ma-mi]` and translate if of `mi`. We can easily define the function
```clj
(defn uniform
  ([n]
   (rand-int n))
  ([mi ma]
   (+ mi (uniform (- ma mi)))))
```

More in general, we can estract from a set of elements. To do so, we convert the set to a vector (we assign an index to each element) and then we extract at a random index. The previous function, now becomes:
```clj
(defn uniform
  ([x]
   (cond
     (integer? x) (rand-int x)
     (vector? x) (x (uniform (count x)))
     (set? x) (uniform (vec x))))
  ([mi ma]
   (+ mi (uniform (- ma mi)))))
```

We end with a more general distribution, in which the element do not have all the same probability (it is not uniform). For example we could assign a weight to each element in the sample space. A loaded dice is one in which not all faces appear with the same probability. For example, in which the number 1 has double probability with respect to the other elements to appear could be represented as
```clj
[
    { :item 1 :weight 2}
    { :item 2 :weight 1}
    { :item 3 :weight 1}
    { :item 4 :weight 1}
    { :item 5 :weight 1}
    { :item 6 :weight 1}
]
```

One possible solution is to build a vector with the cumulative sums of the first `i` weights, then we generate a uniform random from 0 to the sum of weights and with a search (if the set is big, we should use a binary search) we identify the correct element.

We start by implementing the code that builds the cumulative sums
```clj
(defn- build-cumulative-weights [weighted-items]
  (loop [rems weighted-items news [] cum 0]
    (if (empty? rems) news
        (let [{:keys [item weight]} (first rems)
              newcum (+ cum weight)]
          (recur (rest rems)
                 (conj news {:item item :weight newcum})
                 newcum)))))
```

Then we need a function that returns the last index that satisfy a specific condition (for simplicity we use a linear search, but if the set is big, a binary search would be better)
```clj
(defn- first-satisfying
  [pred coll]
  (loop [idx 0]
    (if (>= idx (count coll))
      nil
      (if (pred (nth coll idx))
        idx
        (recur (inc idx))))))
```

Finally, we can implement the function to pick the random value
```clj
(defn pick-item [weighted-items]
  (let [cumulative-items (build-cumulative-weights weighted-items)
        total ((last cumulative-items) :weight)
        random-weight (uniform total)]
    ((cumulative-items
      (first-satisfying #(< random-weight (% :weight))
                        cumulative-items))
     :item)))
```

We can verify that it works running the previous code a large number of times, if we run it 1000 times we expect that 1 will appear about `(* 2 (/ 1000 7))` times
```clj
(count (filter #(= % 1)(repeatedly 1000 #(pick-item loaded-dice))))
```


## Conclusions
For today this is all, we have briefly introduced the concept of probability distribution and then we have seen how to implement some basic one using finite sets.