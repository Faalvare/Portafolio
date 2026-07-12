// src/configs/lang/es.js
export default {
  site: {
    name: "Fabian Alvarez",
    title: "Desarrollador Full Stack | Unity3D · .NET · React",
    description: "Desarrollador de software con más de 8 años de experiencia en web, videojuegos y experiencias inmersivas (AR/VR). Actualmente full-stack con foco en .NET, React e infraestructura de producción.",
    heroPhrases: [
      "Construyendo apps y juegos desde 2017",
      "Unity3D · AR · VR",
      "Full-stack en C# / .NET",
      "React + Tailwind en el front",
      "Si tienes una idea, encuentro las herramientas para hacerla realidad"
    ]
  },
  nav: {
    hero: "Inicio",
    about: "Acerca",
    skills: "Habilidades",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto"
  },
  sections: {
    about: "Acerca de mí",
    skills: "Habilidades Técnicas",
    projects: "Proyectos Destacados",
    experience: "Experiencia",
    contact: "Contacto"
  },
  about: {
    bio: [
      "Soy desarrollador de software con más de 8 años de experiencia construyendo apps, juegos y experiencias inmersivas.",
      "Entre 2018 y 2023 mi foco principal fue Unity3D — desarrollando aplicaciones 2D, 3D, AR y VR — en paralelo con aplicaciones web en ASP.NET. Ese período cubrió desde simuladores y robótica educativa hasta experiencias AR/geo y juegos indie.",
      "Hoy trabajo full-stack en web construyendo plataformas empresariales: sistemas con colaboración en tiempo real, documentos analizados con IA y arquitecturas multi-app con SSO centralizado. React + TypeScript + Tailwind en el front, .NET/C# y Node.js (NestJS) en el back, con responsabilidad end-to-end de la infraestructura de producción (VPS, Docker, Nginx). Para móvil multiplataforma uso React Native. Si tienes una idea, encuentro las herramientas adecuadas para hacerla realidad.",
      "Para ser transparente: uso herramientas de IA como Claude (Anthropic) como parte de mi flujo de trabajo diario para acelerar el desarrollo. El criterio técnico, la arquitectura y las decisiones siguen siendo mías — la IA es una herramienta más, no un reemplazo."
    ]
  },
  experience: {
    roles: {
      "pentacrom": "Desarrollador Full Stack",
      "pignus": "Desarrollador de Simuladores VR (Unity3D)",
      "sima": "Desarrollador C# / Unity",
      "ibm": "Estudiante IBM Do!Lab"
    },
    descriptions: {
      "pentacrom": "Actualmente desarrollando Perrot — plataforma para la digitalización del comercio exterior (Dashboard + API) — con React + TypeScript en el front y .NET/C# en el back. También diseñé e implementé el sitio corporativo pentacrom.cl a partir de diseños en PDF entregados por la diseñadora. Responsabilidad end-to-end: monto la infraestructura de producción (VPS, Docker, Nginx como reverse proxy, administración de servidor) en cada proyecto que sale a producción, y además configuro, actualizo y mantengo sitios de clientes alojados como elquintopoder.cl y fdd.cl (Fundación Democracia y Desarrollo).",
      "pignus": "Diseño y desarrollo de simuladores en entornos de realidad virtual usando Unity3D, enfocados en capacitación y escenarios operacionales.",
      "sima": "Desarrollo de un robot socioeducativo aprovechando la potencia de cada smartphone, dotándolo de tecnologías de inteligencia y realidad aumentada.",
      "ibm": "Soluciones para clientes de IBM del área de retail sobre la plataforma Bluemix (IBM Cloud): scripts en Python, aplicaciones web front y back, y uso de herramientas cognitivas de IBM."
    }
  },
  projects: {
    txtResults: "Destacados",
    buttons: {
      viewResults: "Ver destacados",
      hideResults: "Ocultar destacados",
      viewOnGithub: "Ver código",
      watchDemo: "Ver demo",
      viewGallery: "Ver capturas",
    },
    privateLabel: "Proyecto privado / interno",
    titles: {
      "pentacrom-site": "Pentacrom — Sitio Corporativo",
      "comex-platform": "Plataforma de Comercio Exterior",
      "sip-pedidos": "SIP — Sistema de Ingreso de Pedidos",
      "pignus-liderando": "Pignus — Liderando en Terreno (VR)",
      "pignus-operadores": "Pignus — Operadores (VR)",
      "simarobot": "SimaRobot — Robot Educativo con AR",
      "sentinel": "SENTINEL: Echoes of the Fallen",
      "lectio": "Lectio — Servicio Backend",
      "auth-service": "AuthService — Microservicio JWT",
      "vr-game-prototype": "VR Game Prototype — Roguelite de Cartas",
      "shader-project": "Shader Project — Raymarching en Unity",
    },
    descriptions: {
      "pentacrom-site": "Sitio corporativo de Pentacrom desarrollado end-to-end a partir de diseños en PDF e imágenes de componentes entregados por la diseñadora. Responsive, accesible y en producción en pentacrom.cl.",
      "comex-platform": "Plataforma que digitaliza el ciclo completo de comercio exterior: orden de compra, embarque, aduana, logística nacional y facturación, con una torre de control en tiempo real sobre toda la operación. Los operadores colaboran en vivo sobre una misma solicitud (SignalR), los documentos de aduana se analizan con IA y un worker dispara alertas automáticas de sobrestadía antes de que se conviertan en gastos. Backend en .NET 8 + EF Core + SQL Server, frontend en React 19 + TypeScript + Tailwind.",
      "sip-pedidos": "Rediseño de un sistema legado de ingreso de pedidos en un stack moderno: NestJS + TypeORM + PostgreSQL en el backend, React + Vite + TypeScript en el front, con cliente API tipado generado desde OpenAPI. Se integra en tiempo real con el WMS de la empresa y con un servicio de autenticación compartido entre múltiples aplicaciones (JWT RS256) que centraliza roles y permisos. Cache Redis y entorno de desarrollo 100% Dockerizado.",
      "pignus-liderando": "Simulación VR de liderazgo en un entorno semi-construcción. El usuario asume el rol de líder de obra, asegurando que los trabajadores ejecuten sus tareas y cuenten con los recursos necesarios. Cada acción se convierte en datos crudos que se procesan y muestran como analytics en el dashboard de Pignus. A mi cargo: diseño de escenas, light baking, gran parte de la programación de gameplay y la capa de manejo de datos.",
      "pignus-operadores": "Simulación VR en un almacén: el usuario debe entregar materiales y elementos de protección a los trabajadores, con niveles de dificultad progresiva. El desempeño se captura como datos y se visualiza para los clientes en la plataforma Pignus. Trabajé en programación, diseño, lightmapping, setup del proyecto, procesamiento de datos e interacciones.",
      "simarobot": "Robot social educativo que aprovecha la potencia de cada smartphone, dotado con tecnologías de IA y realidad aumentada. Empecé como generalista y, al crecer el equipo, lideré el desarrollo de la app. Construí SimaKnowledge (autoría de contenido paso a paso con TTS, multimedia y movimiento del robot), implementé la comunicación BLE con el firmware, animé cada expresión del robot, refiné la UI y desarrollé la plataforma de coding SimaCode. Exhibido en CES 2020 en Las Vegas.",
      "sentinel": "Shooter de arena top-down con mechs Sentinel — proyecto colaborativo. El juego en sí está hecho en Construct 3 por mi colaborador; yo implemento la capa multijugador encima: servidor Colyseus incluido en el repo, prediction del cliente, lógica anti-desync y la UI in-game de los sistemas online.",
      "lectio": "Servicio backend en .NET/C# que da soporte a la plataforma Lectio. API REST, persistencia con EF Core y capa de datos del producto.",
      "auth-service": "Microservicio de autenticación independiente en .NET/C# — emisión de JWT, refresh tokens, reutilizable entre múltiples proyectos.",
      "vr-game-prototype": "Prototipo de juego de cartas en VR con elementos roguelite (inspirado en Slay the Spire). Se convirtió en sandbox para experimentar con una State Machine que controla la IA de los personajes en VR.",
      "shader-project": "Exploración de shaders raymarching en Unity: adapté shaders desde shadertoy.com a ShaderLab (HLSL). El shader principal es reactivo al audio — traduce frecuencias en visuales que se mueven al ritmo de la música. Compatible con VR (Oculus Quest 2+).",
    },
    results: {
      "pentacrom-site": [
        "En producción en pentacrom.cl",
        "Construido desde diseños en PDF + assets en imagen",
        "Responsive en móvil, tablet y desktop"
      ],
      "comex-platform": [
        "Torre de control en tiempo real sobre toda la operación logística",
        "Documentos de aduana analizados con IA + tracking de costo por modelo",
        "Alertas automáticas de sobrestadía + colaboración en vivo (SignalR)"
      ],
      "sip-pedidos": [
        "Integración en tiempo real con el WMS (bodega) de la empresa",
        "SSO centralizado: roles y permisos por app vía JWT RS256",
        "Cliente API tipado autogenerado desde OpenAPI + Docker end-to-end"
      ],
      "pignus-liderando": [
        "Programación · diseño de escenas · light baking",
        "Acciones del jugador → pipeline de analytics",
        "Entregado en Oculus a equipos cliente"
      ],
      "pignus-operadores": [
        "Oleadas con dificultad progresiva",
        "Datos de desempeño hacia el dashboard de Pignus",
        "Responsabilidad end-to-end del build"
      ],
      "simarobot": [
        "Exhibido en CES 2020 (Las Vegas)",
        "Lideré el desarrollo de la app al crecer el equipo",
        "Animé cada expresión del robot"
      ],
      "sentinel": [
        "Servidor autoritativo Colyseus incluido en el repo",
        "Prediction del cliente + lógica anti-desync",
        "UI in-game y sistemas online a mi cargo"
      ],
      "lectio": [
        "API REST en .NET / C#",
        "Capa de datos con EF Core",
        "Servicio backend en producción"
      ],
      "auth-service": [
        "JWT plug-and-play para servicios .NET",
        "Reutilizado en múltiples proyectos en producción",
        "Refresh tokens + autorización por roles"
      ],
      "vr-game-prototype": [
        "IA de personajes con State Machine",
        "Combate por cartas en VR",
        "Progresión roguelite"
      ],
      "shader-project": [
        "Raymarching HLSL en ShaderLab de Unity",
        "Shader principal reactivo al audio",
        "Compatible con VR (Oculus Quest 2+)"
      ],
    }
  },
  skills: {
    txtHeader: "Habilidades Técnicas",
    intro: "Habilidades construidas a lo largo de años publicando apps, juegos y experiencias inmersivas — desde simuladores en Unity hasta backends en .NET y front-ends en React.",
    categories: {
      "gamedev": "Game Dev & XR",
      "backend": "Backend",
      "frontend": "Frontend",
      "mobile": "Mobile",
      "devops": "DevOps & Infra",
      "databases": "Bases de Datos",
    },
    items: {
      "unity": "Unity3D",
      "csharp": "C#",
      "ar": "Realidad Aumentada",
      "vr": "Realidad Virtual",
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
      "vps": "Provisión de VPS",
      "git": "Git & GitHub",
      "server-admin": "Administración de Servidores",
      "sqlserver": "SQL Server",
      "postgresql": "PostgreSQL",
      "mysql": "MySQL",
      "mongodb": "MongoDB",
    }
  },
  hero: {
    btnDownload: 'Descargar CV',
    btnContact: 'Contáctame'
  },
  contact: {
    message: "¿Tienes un proyecto en mente? Hablemos.",
    form: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      buttonText: "Enviar",
      sending: "Enviando...",
      error: "Hubo un error. Inténtalo de nuevo más tarde.",
      success: "¡Mensaje enviado! Te responderé pronto.",
      invalidEmail: "Por favor ingresa un email válido."
    }
  },
  footer: {
    developedBy: "Diseñado y desarrollado por",
    rights: "Todos los derechos reservados"
  },
  ats: {
    summary: "{name} es {roles} con experiencia en {skills}. Desarrollador full-stack de aplicaciones web, juegos y experiencias AR/VR con foco en calidad y entregables reales.",
    keyProjects: "Proyectos destacados: {projects}.",
    experience: "Experiencia profesional en {company} construyendo soluciones full-stack y aplicaciones inmersivas.",
    contact: "Contacto: {email}. Disponible en {social}.",
    languages: "Idiomas: Español (nativo), Inglés (profesional).",
    keywords: "Palabras clave:"
  }
};
