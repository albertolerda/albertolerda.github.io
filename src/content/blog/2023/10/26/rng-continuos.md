---
title: "Probability distribution: non discrete random variables"
tags:
- random
- clojure
abstract: |
    The issue with non discrete random variables
---

In the previous post, we have seen that working with discrete random variable is quite simple, because they are completely characterized once we have assigned a probability to each possible event.

Let's assume that we want to generate a random number in the interval `[0,1)` where all the number are equally probable. We are considering _all_ (real) numbers in that interval, what is the probability that the number 0.5 is extracted? If we follow the reasoning we have done previously it is `right cases / total cases = 1 / "infinity"`, every element can appear with probability 0...

To overcome this difficulty mathematicians have introduced a really complex theory, the short solution is to not to check for individual values but for intervals. It doesn't make sense to ask what is the probability that exactly one number (since there are infinitely many number all with probability zero), but we can ask: what is the probability that a specific number lies in the range from `a` to `b`? In the case of a uniform random variable `0 <= a < b < 1`, the total length of the segment is 1, so the probability that a random number is extracted in `[a,b)` is exactly `b - a`, or better `(- b a)`

We have started to discuss random variable with real numbers, but we are in a computer, do we really need all of this complexity? Can we represent this kind of events? Obviously not, we can only work with finite precision, but it is interesting to be able to simuate an approximation of this kind of random variables.

## Uniform random variable
The random variable that can assume all the values in an interval with equal probability is known as uniform random variable.
This is the building block of all the other random variables: the idea is that first we try to generate good uniform random values, then we transform it the distribution we are interested in.

In clojure, we can generate a uniform random value in the range `[0,1)` using `(rand)`. The discrete uniform random variable, we have already meet in the previous post, is defined using the uniform random variable:
```clj
(defn rand-int
  "Returns a random integer between 0 (inclusive) and n (exclusive)."
  [n] (int (rand n)))
```