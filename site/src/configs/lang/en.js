// src/configs/lang/en.js
export default {
  site: {
    name: "Fabian Alvarez",
    title: "Full Stack Developer | Unity3D · .NET · React",
    description: "Software developer with 8+ years of experience across web, games and immersive experiences (AR/VR). Currently full-stack on .NET, React and production DevOps.",
    heroPhrases: [
      "Building apps & games since 2017",
      "Unity3D · AR · VR enthusiast",
      "C# / .NET full-stack",
      "React + Tailwind on the front",
      "If you have an idea, I'll find the right tools to make it happen"
    ]
  },
  nav: {
    hero: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact"
  },
  sections: {
    about: "About me",
    skills: "Technical Skills",
    projects: "Selected Projects",
    experience: "Experience",
    contact: "Contact"
  },
  about: {
    bio: [
      "I'm a software developer with 8+ years of experience shipping apps, games and immersive experiences.",
      "From 2018 to 2023 my main focus was Unity3D — building 2D, 3D, AR and VR applications — alongside web apps in ASP.NET. That chapter covered simulators, educational robotics, AR/geo experiences and indie games.",
      "Today I work full-stack on the web building enterprise platforms: systems with real-time collaboration, AI-assisted document processing, and multi-app architectures with centralized SSO. React + TypeScript + Tailwind on the front, .NET / C# and Node.js (NestJS) on the back, with end-to-end ownership of production infrastructure (VPS, Docker, Nginx). I own these projects end-to-end: I work directly with clients from gathering requirements through production and ongoing support. For cross-platform mobile I reach for React Native. If you have an idea, I'll find the right tools to make it happen.",
      "To be transparent: I use AI tools like Claude (Anthropic) as part of my daily workflow to move faster. The technical judgment, architecture and decisions are still mine — AI is another tool, not a replacement."
    ]
  },
  experience: {
    roles: {
      "pentacrom": "Full Stack Developer",
      "pignus": "VR Simulator Developer (Unity3D)",
      "sima": "C# Unity Developer",
      "ibm": "IBM Do!Lab Student"
    },
    descriptions: {
      "pentacrom": "Currently building two platforms in parallel: Comex, a foreign-trade digitalization platform (real-time control tower, AI-analyzed documents, automatic demurrage alerts), and the redesign of SIP, the order-entry system (NestJS + PostgreSQL, integrated with the company's WMS and with SSO shared across apps). Also designed and built the corporate site pentacrom.cl from designer-provided PDFs. End-to-end responsibility: I provision the production infrastructure (VPS, Docker, Nginx reverse proxy, server administration) for every project we ship, and I also configure, update and maintain hosted client sites such as elquintopoder.cl and fdd.cl (Fundación Democracia y Desarrollo).",
      "pignus": "Designed and developed virtual reality simulators in Unity3D for training and operational scenarios.",
      "sima": "Developed a socio-educational robot leveraging smartphone hardware, augmented reality and AI-powered cognitive features.",
      "ibm": "Built solutions for IBM retail clients on the Bluemix (IBM Cloud) platform: Python scripting, full-stack web apps, and IBM cognitive tooling."
    }
  },
  projects: {
    txtResults: "Highlights",
    buttons: {
      viewResults: "View highlights",
      hideResults: "Hide highlights",
      viewOnGithub: "View source",
      watchDemo: "Watch demo",
      viewGallery: "View screenshots",
    },
    privateLabel: "Private / internal project",
    titles: {
      "pentacrom-site": "Pentacrom — Corporate Site",
      "comex-platform": "Foreign Trade Platform",
      "sip-pedidos": "SIP — Order Management System",
      "pignus-liderando": "Pignus — Liderando en Terreno (VR)",
      "pignus-operadores": "Pignus — Operadores (VR)",
      "simarobot": "SimaRobot — Educational AR Robot",
      "sentinel": "SENTINEL: Echoes of the Fallen",
      "lectio": "Lectio — Backend Service",
      "auth-service": "AuthService — JWT Microservice",
      "vr-game-prototype": "VR Game Prototype — Roguelite Card Game",
      "shader-project": "Shader Project — Raymarching in Unity",
    },
    descriptions: {
      "pentacrom-site": "Corporate website for Pentacrom built end-to-end from designer-supplied PDFs and component images. Responsive, accessible and production-deployed at pentacrom.cl.",
      "comex-platform": "Platform that digitizes the full foreign-trade cycle: purchase order, shipment, customs, domestic logistics and invoicing, with a real-time control tower over the whole operation. Operators collaborate live on the same request (SignalR), customs documents get analyzed with AI, and a background worker fires automatic demurrage alerts before they turn into real costs. Backend in .NET 8 + EF Core + SQL Server, frontend in React 19 + TypeScript + Tailwind.",
      "sip-pedidos": "Full redesign of a legacy order-entry system onto a modern stack: NestJS + TypeORM + PostgreSQL on the backend, React + Vite + TypeScript on the front, with a typed API client generated from OpenAPI. Integrates in real time with the company's WMS and with an auth service shared across multiple apps (JWT RS256) that centralizes roles and permissions. Redis caching and a fully Dockerized dev environment.",
      "pignus-liderando": "VR leadership simulation set in a semi-construction environment. The user takes the role of a site lead, ensuring workers perform tasks and have the resources they need. All actions are turned into raw data and surfaced as analytics on the Pignus dashboard. I shipped scene design, light baking, most gameplay programming and the data handling layer.",
      "pignus-operadores": "VR warehouse simulation: deliver materials and protective equipment to workers across progressively harder levels. User performance is captured as data and visualized for clients on the Pignus platform. I worked across programming, design, lightmapping, project setup, data processing and interactions.",
      "simarobot": "Social educational robot powered by every smartphone, enhanced with AI and AR. Started as a generalist, grew into app development lead. Built SimaKnowledge (step-by-step content authoring with TTS, multimedia, robot movement), implemented BLE communication with the robot firmware, animated all robot expressions, refined the UI, and built the SimaCode coding platform. Showcased at CES 2020 in Las Vegas.",
      "sentinel": "Top-down arena shooter with Sentinel mechs — a collaborative project. The game itself is built in Construct 3 by my collaborator; I implement the multiplayer layer on top: Colyseus server bundled in-repo, client-side prediction, anti-desync logic, and the in-game UI for online systems.",
      "lectio": "Backend service in .NET / C# powering the Lectio platform. REST API, persistence with EF Core, and the data layer behind the product.",
      "auth-service": "Standalone authentication microservice in .NET / C# — JWT issuing, refresh tokens, and reusable across multiple projects.",
      "vr-game-prototype": "Prototype for a VR card game with roguelite elements (Slay-the-Spire-inspired). Became a sandbox for experimenting with a State Machine driving character AI in VR.",
      "shader-project": "Exploration of raymarching shaders in Unity: adapted shaders from shadertoy.com to Unity's ShaderLab (HLSL). The flagship shader is audio-reactive — translates audio frequencies into visuals that move in sync with the music. VR-compatible (Oculus Quest 2+).",
    },
    results: {
      "pentacrom-site": [
        "Live in production at pentacrom.cl",
        "Built from PDF designs + image assets",
        "Responsive across mobile, tablet, desktop"
      ],
      "comex-platform": [
        "Real-time control tower over the whole logistics operation",
        "Customs documents analyzed with AI + per-model cost tracking",
        "Automatic demurrage alerts + live collaboration (SignalR)"
      ],
      "sip-pedidos": [
        "Real-time integration with the company's WMS",
        "Centralized SSO: per-app roles and permissions via JWT RS256",
        "Typed API client auto-generated from OpenAPI + Docker end-to-end"
      ],
      "pignus-liderando": [
        "Programming · scene design · light baking",
        "Player actions → analytics pipeline",
        "Shipped on Oculus to client teams"
      ],
      "pignus-operadores": [
        "Progressive difficulty waves",
        "Performance data piped into Pignus dashboard",
        "End-to-end ownership of the build"
      ],
      "simarobot": [
        "Showcased at CES 2020 (Las Vegas)",
        "Led app development as the team grew",
        "Animated every robot expression"
      ],
      "sentinel": [
        "Authoritative Colyseus server bundled in-repo",
        "Client-side prediction + anti-desync logic",
        "In-game UI and online systems by me"
      ],
      "lectio": [
        ".NET / C# REST API",
        "EF Core data layer",
        "Production backend service"
      ],
      "auth-service": [
        "Drop-in JWT auth for .NET services",
        "Reused across multiple production projects",
        "Token refresh + role-based authorization"
      ],
      "vr-game-prototype": [
        "State-machine-driven character AI",
        "Card-based combat in VR",
        "Roguelite progression"
      ],
      "shader-project": [
        "HLSL raymarching in Unity ShaderLab",
        "Audio-reactive primary shader",
        "VR-compatible (Oculus Quest 2+)"
      ],
    }
  },
  skills: {
    txtHeader: "Technical Skills",
    intro: "Skills built over years of shipping apps, games and immersive experiences — from Unity simulators to .NET backends and React front-ends.",
    categories: {
      "gamedev": "Game Dev & XR",
      "backend": "Backend",
      "frontend": "Frontend",
      "mobile": "Mobile",
      "devops": "DevOps & Infra",
      "databases": "Databases",
    },
    items: {
      "unity": "Unity3D",
      "csharp": "C#",
      "ar": "Augmented Reality",
      "vr": "Virtual Reality",
      "dotnet": ".NET",
      "aspnet": "ASP.NET",
      "nodejs": "Node.js",
      "python": "Python",
      "php": "PHP",
      "react": "React",
      "typescript": "TypeScript",
      "javascript": "JavaScript",
      "tailwind": "Tailwind CSS",
      "react-native": "React Native",
      "flutter": "Flutter",
      "dart": "Dart",
      "docker": "Docker",
      "nginx": "Nginx (Reverse Proxy)",
      "linux": "Linux",
      "vps": "VPS Provisioning",
      "git": "Git & GitHub",
      "server-admin": "Server Administration",
      "sqlserver": "SQL Server",
      "postgresql": "PostgreSQL",
      "mysql": "MySQL",
      "mongodb": "MongoDB",
    }
  },
  hero: {
    btnDownload: 'Download CV',
    btnContact: 'Get in touch'
  },
  contact: {
    message: "Have a project in mind? Let's talk.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      buttonText: "Send",
      sending: "Sending...",
      error: "Something went wrong. Please try again later.",
      success: "Message sent! I'll get back to you soon.",
      invalidEmail: "Please enter a valid email address."
    }
  },
  footer: {
    developedBy: "Designed and developed by",
    rights: "All rights reserved"
  },
  ats: {
    summary: "{name} is a {roles} with experience in {skills}. Full-stack developer building web apps, games, and AR/VR experiences with a focus on quality and shipping.",
    keyProjects: "Key projects: {projects}.",
    experience: "Professional experience at {company} building full-stack solutions and immersive applications.",
    contact: "Contact: {email}. Available on {social}.",
    languages: "Languages: Spanish (native), English (professional).",
    keywords: "Keywords:"
  }
};
