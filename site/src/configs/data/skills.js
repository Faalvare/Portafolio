// src/configs/data/skills.js
import {
  SiUnity,
  SiSharp,
  SiDotnet,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiDart,
  SiFlutter,
  SiDocker,
  SiLinux,
  SiNginx,
  SiGit,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from 'react-icons/si';
import { FaReact, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';
import { TbAugmentedReality, TbDeviceVisionPro } from 'react-icons/tb';

export const SKILLS_DATA = [
  {
    id: "gamedev",
    items: [
      { name: "unity", icon: SiUnity },
      { name: "csharp", icon: SiSharp },
      { name: "ar", icon: TbAugmentedReality },
      { name: "vr", icon: TbDeviceVisionPro },
    ]
  },
  {
    id: "backend",
    items: [
      { name: "dotnet", icon: SiDotnet },
      { name: "aspnet", icon: FaServer },
      { name: "nodejs", icon: SiNodedotjs },
      { name: "python", icon: SiPython },
      { name: "php", icon: SiPhp },
    ]
  },
  {
    id: "frontend",
    items: [
      { name: "react", icon: FaReact },
      { name: "typescript", icon: SiTypescript },
      { name: "javascript", icon: SiJavascript },
      { name: "tailwind", icon: SiTailwindcss },
    ]
  },
  {
    id: "mobile",
    items: [
      { name: "react-native", icon: SiReact },
      { name: "flutter", icon: SiFlutter },
      { name: "dart", icon: SiDart },
    ]
  },
  {
    id: "devops",
    items: [
      { name: "docker", icon: SiDocker },
      { name: "nginx", icon: SiNginx },
      { name: "linux", icon: SiLinux },
      { name: "vps", icon: FaCloud },
      { name: "git", icon: SiGit },
      { name: "server-admin", icon: FaServer },
    ]
  },
  {
    id: "databases",
    items: [
      { name: "sqlserver", icon: FaDatabase },
      { name: "postgresql", icon: SiPostgresql },
      { name: "mysql", icon: SiMysql },
      { name: "mongodb", icon: SiMongodb },
    ]
  },
];
