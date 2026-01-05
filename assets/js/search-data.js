// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A showcase of my projects categorized by work and fun.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Recent and upcoming talks, seminars, and presentations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "My publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae of Nguyen Quang Duc",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-the-prolonged-uncertainty-of-the-phd-application-period",
        
          title: "The Prolonged Uncertainty of the PhD Application Period",
        
        description: "The process of applying for a PhD program is such a Schrödinger&#39;s cat experiment.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/phd-application/";
          
        },
      },{id: "post-the-valentine-39-s-day-story",
        
          title: "The Valentine&#39;s Day Story",
        
        description: "A story about a young researcher preparing to propose to his girlfriend.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/valentine-day/";
          
        },
      },{id: "post-self-learning",
        
          title: "Self-learning",
        
        description: "Do you know what &quot;Self-learning&quot; means?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/self-learning/";
          
        },
      },{id: "post-for-growing-us",
        
          title: "For growing us",
        
        description: "The way to grow up is not easy, but it is the only way to find the right answer for your own life.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/for-growing-us/";
          
        },
      },{id: "post-be-yourself",
        
          title: "Be yourself",
        
        description: "Do you understand yourself?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/be-yourself/";
          
        },
      },{id: "post-childhood",
        
          title: "Childhood",
        
        description: "Do you remember your childhood?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/childhood/";
          
        },
      },{id: "post-time-to-be-happy",
        
          title: "Time to be happy",
        
        description: "What is happiness?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/time-to-be-happy/";
          
        },
      },{id: "post-is-white-the-color-of-purity-and-innocence",
        
          title: "Is white the color of purity and innocence?",
        
        description: "A song about children written for adults",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/the-white/";
          
        },
      },{id: "post-try-talking-to-everyone-in-your-family-that-you-have-won-a-lottery-ticket-but-burned-it",
        
          title: "Try talking to everyone in your family that you have won a lottery...",
        
        description: "A lottery ticket is a ticket that can be used to win a prize, especially in a lottery, a form of gambling. But what if you won a lottery ticket but you burned it?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/burning-lottery-ticket/";
          
        },
      },{id: "post-why-did-shizuka-choose-nobita-instead-of-dekisugi-suneo-or-jaian",
        
          title: "Why did Shizuka choose Nobita instead of Dekisugi, Suneo or Jaian?",
        
        description: "An inside of Shizuka&#39;s choices",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/nobita-xuka/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-began-undergraduate-studies-in-computer-science-at-ho-chi-minh-city-university-of-technology-hcmut-vietnam-national-university",
          title: '🎓 Began undergraduate studies in Computer Science at Ho Chi Minh City University...',
          description: "",
          section: "News",},{id: "news-trophy-received-certificate-of-merit-from-hcmc-department-of-information-and-communication-for-excellent-achievements-in-artificial-intelligence-research-certificate",
          title: ':trophy: Received Certificate of Merit from HCMC Department of Information and Communication for...',
          description: "",
          section: "News",},{id: "news-awarded-first-prize-in-biomedical-category-at-euréka-student-scientific-research-award-2020",
          title: '🥇 Awarded First Prize in Biomedical Category at Euréka Student Scientific Research Award...',
          description: "",
          section: "News",},{id: "news-trophy-recognized-as-typical-student-at-bk-youth-award-2020-certificate",
          title: ':trophy: Recognized as Typical Student at BK Youth Award 2020 [Certificate].',
          description: "",
          section: "News",},{id: "news-medal-sports-received-merit-award-from-the-ministry-of-information-and-communications-for-first-prize-in-biomedical-category-at-euréka-student-scientific-research-award-certificate",
          title: ':medal_sports: Received Merit Award from the Ministry of Information and Communications for First...',
          description: "",
          section: "News",},{id: "news-trophy-received-certificate-of-merit-from-hcmc-department-of-information-and-communication-for-outstanding-achievements-in-information-technology-and-artificial-intelligence-research-certificate",
          title: ':trophy: Received Certificate of Merit from HCMC Department of Information and Communication for...',
          description: "",
          section: "News",},{id: "news-published-paper-on-becaked-in-scientific-reports-nature-portfolio-paper",
          title: '📝 Published paper on BeCaked in Scientific Reports (Nature Portfolio) [Paper].',
          description: "",
          section: "News",},{id: "news-successfully-defended-bachelor-s-thesis-ai-powered-decision-support-system-for-antiviral-pharmaceutical-formulation",
          title: '✅ Successfully defended Bachelor’s thesis: “AI-Powered Decision Support System for Antiviral Pharmaceutical Formulation”....',
          description: "",
          section: "News",},{id: "news-received-best-paper-award-at-nics-2022-for-research-on-drug-target-interaction-prediction-paper-certificate",
          title: '🏆 Received Best Paper Award at NICS 2022 for research on Drug-Target Interaction...',
          description: "",
          section: "News",},{id: "news-graduated-with-bachelor-of-engineering-from-hcmut-vnu-hcm",
          title: '🎓 Graduated with Bachelor of Engineering from HCMUT - VNU-HCM!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_010/";
            },},{id: "news-awarded-master-s-scholarship-by-vingroup-innovation-foundation-vinif",
          title: '🎓 Awarded Master’s Scholarship by Vingroup Innovation Foundation (VinIF).',
          description: "",
          section: "News",},{id: "news-began-master-s-studies-in-computer-science-at-ho-chi-minh-city-university-of-technology-hcmut-vietnam-national-university",
          title: '🎓 Began Master’s studies in Computer Science at Ho Chi Minh City University...',
          description: "",
          section: "News",},{id: "news-received-research-funding-from-microsoft-accelerate-foundation-models-research-amfr-program",
          title: '🎯 Received research funding from Microsoft Accelerate Foundation Models Research (AMFR) program.',
          description: "",
          section: "News",},{id: "news-released-ura-llama-vietnamese-large-language-models-7b-13b-70b-parameters",
          title: '🚀 Released URA-LLaMa: Vietnamese Large Language Models (7B, 13B, 70B parameters)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_014/";
            },},{id: "news-released-mixsura-and-gemsura-vietnamese-large-language-models",
          title: '🚀 Released MixSUra and GemSUra: Vietnamese Large Language Models',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_015/";
            },},{id: "news-joined-stair-lab-at-stanford-university-as-visiting-student-researcher",
          title: '🎓 Joined STAIR Lab at Stanford University as Visiting Student Researcher.',
          description: "",
          section: "News",},{id: "news-published-paper-on-xneusm-in-ieee-access-paper",
          title: '📝 Published paper on xNeuSM in IEEE Access [Paper].',
          description: "",
          section: "News",},{id: "news-successfully-defended-master-s-thesis-optimizing-subgraph-isomorphism-prediction-models-with-application-orientation-to-the-drug-design-process",
          title: '✅ Successfully defended Master’s thesis: “Optimizing Subgraph Isomorphism Prediction Models with Application Orientation...',
          description: "",
          section: "News",},{id: "news-graduated-with-master-of-engineering-in-computer-science-from-ho-chi-minh-city-university-of-technology-hcmut-vietnam-national-university",
          title: '🎓 Graduated with Master of Engineering in Computer Science from Ho Chi Minh...',
          description: "",
          section: "News",},{id: "news-began-doctoral-studies-at-national-university-of-singapore-nus",
          title: '🎓 Began doctoral studies at National University of Singapore (NUS).',
          description: "",
          section: "News",},{id: "news-granted-patent-vn-1-0053619-for-system-for-real-time-translation-of-sign-language-to-text-and-speech-patent",
          title: '📜 Granted patent VN.1-0053619 for “System for Real-Time Translation of Sign Language to...',
          description: "",
          section: "News",},{id: "projects-automatically-evolving-multi-agent-deep-research-system",
          title: 'Automatically Evolving Multi-agent Deep Research System',
          description: "Developing AutoEDP, an autonomous framework that continuously refines LLMs for deep research through closed-loop self-improvement",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deep_research/";
            },},{id: "projects-drug-discovery",
          title: 'Drug Discovery',
          description: "AI-powered drug discovery for COVID-19 and beyond",
          section: "Projects",handler: () => {
              window.location.href = "/projects/drug_discovery/";
            },},{id: "projects-graph-theory-problems",
          title: 'Graph Theory Problems',
          description: "Using Deep Learning for graph theory and subgraph matching",
          section: "Projects",handler: () => {
              window.location.href = "/projects/graph_theory/";
            },},{id: "projects-probabilistic-pedagogy-for-accelerated-learning",
          title: 'Probabilistic Pedagogy for Accelerated Learning',
          description: "Exploring how probabilistic models of teacher can accelerate learning through strategic example selection",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_simulation/";
            },},{id: "projects-large-language-models",
          title: 'Large Language Models',
          description: "Developing Vietnamese LLMs and applications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vietnamese_llm/";
            },},{id: "talks-diffusion-models-from-theory-to-experiments",
          title: 'Diffusion models: From Theory to Experiments',
          description: "A talk on diffusion models and their applications in computer vision.",
          section: "Talks",handler: () => {
              window.location.href = "/talks/diffusion_models/";
            },},{id: "talks-absolutezero-reinforced-self-play-reasoning-with-zero-data",
          title: 'AbsoluteZero: Reinforced Self-play Reasoning with Zero Data',
          description: "A seminar for discussing the recent AbsoluteZero paper.",
          section: "Talks",handler: () => {
              window.location.href = "/talks/absolutezero/";
            },},{id: "talks-bayesian-theory-of-mind",
          title: 'Bayesian Theory of Mind',
          description: "A seminar for discussing the recent Bayesian Theory of Mind paper.",
          section: "Talks",handler: () => {
              window.location.href = "/talks/bayesian_tom/";
            },},{id: "talks-llms-get-lost-in-multi-turn-conversation",
          title: 'LLMs Get Lost In Multi-Turn Conversation',
          description: "A seminar about evaluating how large language models degrade in performance during multi-turn conversations due to premature assumptions and context loss.",
          section: "Talks",handler: () => {
              window.location.href = "/talks/multiturn_llms/";
            },},{id: "talks-a-practical-introduction-to-the-rational-speech-act-modeling-framework",
          title: 'A Practical Introduction to The Rational Speech Act Modeling Framework',
          description: "A seminar introducing the Rational Speech Act framework, which models language understanding as recursive Bayesian inference.",
          section: "Talks",handler: () => {
              window.location.href = "/talks/rsa_framework/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv-nqduc.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%71%64%75%63@%75.%6E%75%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/martinakaduc", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/martinakaduc", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9638-8289", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Quang-Duc-Nguyen/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=w1o63XAAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/martinakaduc", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
