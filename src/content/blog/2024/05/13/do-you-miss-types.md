---
title: "You miss types in a dynamic language, don't you?"
tags:
- design
abstract: |
    I like doing functional programming using algebraic data types. Static typing can catch many errors during compile time (instead of exceptions at runtime) and make your program run faster (since we are moving work from runtime to compile time). Nevertheless, in designing complex software, I prefer freedom. I want to be able to choose what is best for each piece of my application.
---


A dynamic language lets you write more expressive code much more smoothly, which is cool because one should always write code in a way that will be easy to maintain and read.

Not all languages are the same. For example, when I write Javascript, it always looks like the application will stop working soon, which will not happen because you can do all the checks required at runtime, but that is the feeling the language gives me. With Python (without typing) the situation is slightly better, but the compiler (when building the bytecode) cannot help you in any way. For example, when I write Clojure code, I feel much more comfortable because there are fewer assumptions about what can happen (for example, related to nil).

Nevertheless, it is possible to sleep well at night, even when using a dynamic language, without the fear that it could break from one moment to another.

The first approach is to use type annotation when necessary. We are not saying that types are evil, that we don't want them. The goal is to be able to choose. Most dynamic languages offer some form of typing that you can use in the most critical parts of your software. This way, one can look for a compromise between coding speed and static checks.

As discussed in a previous post, there should always be a suite of tests, even in a static-typed language. In a dynamicly typed language, it gains even more value, because it is a way to test your program under some "unexpected" scenarios.

Finally, it is a major design point to have runtime assertion and, the most important thing, verify the kind of data you are working with before starting to process it. The input must be validated or, even better, parsed. If it is not recognized you must halt the execution immediately. This kind of checks all work at runtime.

Now, let's return to the initial question "You miss types in a dynamic language, don't you?". The answer is often "No, I don't". It is magic what the compiler can do when it knows the structure of your data, but it is even more magic the compiler can deduct from the little information you provide. Moreover, we have shown the most common best practices that one can use to make his program safe. Those practices are a must for a program written in a dynamic language, but they are also a good practice for a program written with statically typed language.