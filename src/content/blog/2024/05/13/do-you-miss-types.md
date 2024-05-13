---
title: "You miss types in a dynamic language, don't you?"
tags:
- design
abstract: |
    I really like doing functional programming using algebraic data types, I truly belive that static typing can catch a lot of errors during compile time (instead of execeptions at runtime) and make your program run faster (again we are moving work from runtime to compile time). Nevertheless, in designing a big software, I prefer freedom. Freedom of choosing what is best for each piece of my application.
---


A dynamic language, let you write more expressive code much easily. This is great, because one should always write code in a way that it will be easy to maintain and read.

Not all languages are the same, when I write Javascript, it always looks like the application will stop working soon, then it doesn't happen because you can do all the checks required at runtime, but I have always that slight fear. With Python (without typing) the situation is slighly better, but the compiler (when building the bytecode) is not really able to help you in any way. For example, when I write clojure I feel much more confortable, because there are less assumptions what can happen (for example related to nil).

Nevertheless, yes, it is possible to sleep well at night even when using a dynamic language, without the fear that it could break from a moment to another.

The first apporach is to use type annotation when necessary, we are not saying that types are bad and we absolutely don't want them, the goal is to be able to choose. Most dynamic languages offer some form of "typing", that you can use in the most critical parts of your software. This way you can look for a compromise between coding speed and static checks.

As discussed in a previous post, there should always be a suite of tests, even in a static typed language. In a dynamic language it gains even more value, because it is a way to test your program under some "unexpected" scenarios.

Finally, it is important to have runtime assertion and, the most important thing, verify the kind of data you are working with before starting to process it. The input must be validated or, even better, parsed. If it is not recognized you must halt the execution immediately. This kind of checks all work at runtime.


