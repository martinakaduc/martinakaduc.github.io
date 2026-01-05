---
layout: page
title: Automatically Evolving Multi-agent Deep Research System
description: Developing AutoEDP, an autonomous framework that continuously refines LLMs for deep research through closed-loop self-improvement
# img: assets/img/deepresearch.jpg
importance: 2
category: course
related_publications: false
---

## Overview

AutoEDP (Automatic Evolution of Deep Research Pipelines) is an autonomous, closed-loop framework designed to continuously refine the capabilities of Large Language Models (LLMs) in conducting deep research. Unlike static research agents that rely on fixed prompts or pre-trained weights, AutoEDP establishes a self-reinforcing cycle of improvement.

The system automates the entire scientific discovery process: generating initial research questions, vetting them for novelty against real-world academic literature (Semantic Scholar/OpenAlex), executing structured deep research, and synthesizing final reports. Crucially, AutoEDP captures the interaction data from these processes to perform Group Relative Policy Optimization (GRPO) fine-tuning. By leveraging a modern high-performance stack—including vLLM for inference, LangGraph for orchestration, and OpenRLHF + Ray for training—AutoEDP allows a research agent to "learn from doing," steadily improving its ability to ask novel questions and produce high-quality evidence-based reports over successive iterations.

## Key Contributions
- **Autonomous End-to-End Research Loop:** Establishes a fully automated pipeline that transitions seamlessly from ideation and novelty checking to deep investigation and model updating, removing the need for human intervention between research stages.
- **Continuous Self-Improvement via GRPO:** Implements an iterative fine-tuning mechanism using Group Relative Policy Optimization (GRPO). The system automatically converts interaction logs into training datasets, allowing the model to evolve and optimize its behavior based on its own research outputs.
- **Integrated Novelty Verification:** Incorporates a "Novelty Check" module that interfaces with external academic databases (Semantic Scholar, OpenAlex). This ensures that generated research questions are not only coherent but also factually unique compared to existing literature.
- **Scalable & Modular Infrastructure:** Built on a production-ready stack utilizing vLLM for low-latency inference, Ray for distributed training, and OpenRLHF. The architecture features a pluggable "Deep Research" engine (via LangGraph) and an OpenAI-compatible middleware wrapper, ensuring compatibility with various LLMs and pipelines.
- **Self-Reflective Ideation:** Features an enhanced idea generation module that employs self-reflection techniques to critique and refine research questions before they are executed, resulting in higher-quality downstream investigation.

## Resources
- [Project Repository](https://github.com/martinakaduc/AutoEDP)