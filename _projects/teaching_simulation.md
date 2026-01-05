---
layout: page
title: Probabilistic Pedagogy for Accelerated Learning
description: Exploring how probabilistic models of teacher can accelerate learning through strategic example selection
# img: assets/img/teachsim.jpg
importance: 1
category: course
related_publications: false
---

## Overview

This project investigates how probabilistic pedagogy can accelerate learning by explicitly modeling iterative interactions between an active teacher and an active student. Most existing pedagogical models assume either a passive learner or a teacher who simply responds to student queries. In contrast, we introduce a framework that incorporates both student agency—allowing students to actively request examples—and teacher agency, whereby the teacher can strategically override suboptimal student requests to provide more informative examples.

We formalize this interaction as a probabilistic generative model in which the teacher maintains a belief over the student’s latent knowledge state, and a rational student reasons about the teacher’s pedagogical intent when selecting queries. To evaluate the framework, we conduct simulations in a synthetic clustering task where students must infer a true hypothesis from a finite set of candidates. We compare multiple student querying strategies (random, uncertainty-reduction, and hypothesis-driven) and teacher behaviors (lazy versus active/strategic).

Our results show that learning is most efficient when a rational student interacts with a strategic teacher capable of overriding less informative queries. In particular, an active teacher consistently outperforms a “lazy” teacher who merely fulfills student requests, independent of the student’s querying strategy. We also find that the framework remains effective under approximate representations of the teacher’s belief state. Together, these results highlight the importance of teacher agency and strategic intervention, and provide a principled foundation for designing adaptive educational systems that more effectively support learning.

## Key Contributions

- Developed a refined probabilistic pedagogy model that formalizes the teaching-learning process by incorporating both student agency to query examples and a teacher override mechanism to optimize instruction.
- Designed a synthetic clustering environment to simulate iterative interactions, allowing for a comparative evaluation of random, uncertainty-reduction, and hypothesis-driven student strategies against lazy versus active teachers.
- Our results demonstrated that an active teacher who strategically overrides student requests significantly accelerates learning, particularly when interacting with a rational student who effectively models the teacher's pedagogical intent.

## Resources

- [Project Repository](https://github.com/martinakaduc/teaching_simulation)
- [Final Report](/assets/projects/CS6101_Teaching_Simulation.pdf)
