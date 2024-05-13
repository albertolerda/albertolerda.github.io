---
title: "5 Reasons Why You Should Write Tests"
tags:
- TDD
abstract: |
  Tests play an essential role in producing high-quality and reliable software
---

Tests and documentation, it is not always simple to find the time and the wish to write them. Nowadays, I usually don't apply the real TDD approach of seeing a test failing and then write the code to fix it. Nevertheless, if there is a test suite I add some test cases related to the code that I have changed.

It just a matter of getting used to it. There are some projects for which it is easier to write tests, while other times, for example, CI/CD pipelines are code and are often difficult to test, in which it simply is weird. It is fine, I don't want to get 100% coverage. But, I would like to have all the main features tested. Why?

## You write tests for tomorrow

Today I have added a simple feature, also the test look silly, but a software project usually is updated for months or years. When you add some code how can you be sure that you haven't broken some old features? Yes, you can try to by hand all the main functionality in verify that they work as expected. We are programmer, the "try by hand" is usually an automation we are missing. In this case, the automation are tests.

After a big refactory, one can change all the code necessary to improve performance, user experience or cleaness of code, but the expected behaviors must remain the same. Tests are a prerequisite for a big refactor, even in strongly typed languages.

## Fear of deploy

Every programmer has had at least one time that slight fear when deploying something in production. It works on your machine and it works in the test environment, but what about the production environment? When I have a good test suite, I am more confident about the code I have written.

On the one hand, it may be because I am sure that all the feature I have written are tested in all the environment. But, also because usually the tests are run in a clean environment, while on the dev machine and the test environemt, there could be some customization. It could still break in production, but it is just less likely.

## Tests are a form of documentation

Documentation is important and _should_ be always written as part of writing some code. Nevertheless, it is more likely that a programmer has written some tests, then some documentation. If there are tests, you have an example on how thing work. Yes, they are usually extreme cases, but you may be able to adapt it to a real world usage.

The goal is to give to the user the confidence that your code works and let him have something up and running quickly. Once one has some code that works, it is only a matter of moving from code that works to code that works.

## Often one is not the only user of the code

You have written some code, you know how it works and you are able to move between the code fastly. When you are asked a new feature, you know exactly what to change and what impact it will have.

Being a open source project or some work in a company, other people will have to interact with the code you have written. Test give more confidence to the user because he can see what impact has the code he is changing, but also for you. If the user add some code and new test, at least you know that the main feature still work and the code review will be much easier.

## Catch errors before the user

It is really bad to receive a call from a client telling you that the application doesn't work. Maybe it is not your fault, maybe it is due to some library update. The fact is that the code used to work and now it doesn't. The sooner you are aware of it, the sooner you can fix the problem.

Even in the case in which the problem is actually a bug, or something the programmer simply hasn't though that could happen, test gives you can confidence that in the future this will not be a problem any more. The problem of one user has just become a test cases.# 5 Reasons Why You Should Write Tests

Tests and documentation, it is not always simple to find the time and the wish to write them. Nowadays, I usually don't apply the real TDD approach of seeing a test failing and then writing the code to fix it. Nevertheless, if there is a test suite I add some test cases related to the code that I have changed.

It is just a matter of getting used to it. There are some projects for which it is easier to write tests, while other times, for example, CI/CD pipelines are code and are often difficult to test, which simply is weird. It is fine, I don't want to get 100% coverage. But, I would like to have all the main features tested. Why?

## You write tests for tomorrow

Today I have added a simple feature, also the test looks silly, but a software project usually is updated for months or years. When you add some code how can you be sure that you haven't broken some old features? Yes, you can try to by hand all the main functionalities to verify that they work as expected. We are programmers, the "try by hand" is usually an automation we are missing. In this case, the automation are new test cases.

After a big refactory, one can change all the code necessary to improve performance, user experience or cleanness of code, but the expected behaviours must remain the same. Tests are a prerequisite for a big refactor, even in strongly typed languages.

## Fear of deploy

Every programmer has had at least one time that slight fear when deploying something in production. It works on your machine and it works in the test environment, but what about the production environment? When I have a good test suite, I am more confident about the code I have written.

On the one hand, it may be because I am sure that all the features I have written are tested in all the environments. But, also because usually the tests are run in a clean environment, while on the dev machine and the test environment, there could be some customization. It could still break in production, but it is just less likely.

## Tests are a form of documentation

Documentation is important and *should* be always written as part of writing some code. Nevertheless, it is more likely that a programmer has written some tests, than some documentation. If there are tests, you have an example of how things work. Yes, they are usually extreme cases, but you may be able to adapt them to real-world usage.

The goal is to give to the user the confidence that your code works and let him have something up and running quickly. Once one has some code that works, it is only a matter of moving from code that works to code that works.

## Often one is not the only user of the code

You have written some code, you know how it works and you can move between the code fastly. When you are asked about a new feature, you know exactly what to change and what impact it will have.

Being an open-source project or some work in a company, other people will have to interact with the code you have written. Tests give more confidence to the user because he can see what impact has the code he is changing, but also for you. If the user adds some code and new tests, at least you know that the main features still work and the code review will be much easier.

## Catch error before the user

It is really bad to receive a call from a client telling you that the application doesn't work. Maybe it is not your fault, maybe it is due to some library update. The fact is that the code used to work and now it doesn't. The sooner you are aware of it, the sooner you can fix the problem.

Even in the case in which the problem is actually a bug or something the programmer simply hasn't thought that could happen, the new test gives you can confidence that in the future this will not be a problem any more. The problem of one user has just become a test case.
