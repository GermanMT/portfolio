"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  ChevronDown,
  Sun,
  Moon,
  Mail,
  GraduationCap,
  University,
  Trophy,
  Rocket,
  Star,
  Calendar,
  FileText,
  ExternalLink,
  Menu,
  X,
} from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGooglescholar } from "react-icons/si"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts"

const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      roadmap: "Trayectoria",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Antonio Germán Márquez Trujillo",
      subtitle: "Doctor en Ingeniería Informática",
      description:
        "Soy doctor en ingeniería informática especializado en el desarrollo software, la ciberseguridad, y con un enfoque particular en la seguridad de la cadena de suministro de software.",
      downloadCV: "Descargar CV",
      scrollDown: "Desplázate para conocer más",
    },
    roadmap: {
      title: "Mi Trayectoria",
      subtitle: "El camino recorrido y hacia dónde voy",
      education: {
        bachillerato: {
          title: "Bachillerato",
          institution: "IES San José",
          description: "Bachillerato Tecnológico",
        },
        bachelor: {
          title: "Grado Universitario",
          institution: "Universidad de Sevilla",
          description: "Ingeniería Informática - Ingeniería del software",
        },
        master: {
          title: "Máster",
          institution: "Universidad de Sevilla",
          description: "Máster en Ingeniería del Software - Cloud, Datos y Gestión TI",
        },
      },
      current: {
        title: "Presente - Doctor",
        description:
          'Acabo de defender mi tesis doctoral con honores Cum Laude: "Una propuesta para un enfoque integral que mejore la seguridad de la cadena de suministro de software mediante automatización, trazabilidad e inteligencia artificial para fortalecer la resiliencia del ecosistema de desarrollo de software"',
        thesisLink: "Ver tesis doctoral",
      },
      future: {
        title: "Futuro - Nuevos Horizontes",
        description:
          "Busco una oportunidad laboral en la industria que me permita crecer en nuevas tecnologías y retos, de forma que mi curiosidad pueda seguir desarrollándose. Estoy abierto a cualquier posible oferta.",
      },
    },
    skills: {
      title: "Habilidades y Experiencia",
      technical: {
        title: "Habilidades Técnicas",
        description:
          "Durante mi doctorado me centré en fortalecer la seguridad de la cadena de suministro de software mediante el desarrollo de diversas herramientas orientadas al análisis de vulnerabilidades y a la trazabilidad de dependencias. Todo ese trabajo desembocó en SecureChain, una plataforma integral que he diseñado y construido desde cero para ofrecer una solución completa de análisis y gestión de riesgos en proyectos de software.",
        radarTitle: "Áreas de Especialización",
        barTitle: "Experiencia en Tecnologías",
        yearsLabel: "Años de experiencia",
      },
      publications: {
        title: "Publicaciones Científicas",
        description:
          "Artículos publicados durante mi doctorado que avalan mi tesis doctoral y que demuestran mi capacidad de escritura formal en inglés:",
        papers: [
          {
            title: "Feature models to boost the vulnerability management process",
            journal: "Journal of Systems and Software - Elsevier",
            date: "1 ene 2023",
            link: "https://doi.org/10.1016/j.jss.2022.111541",
          },
          {
            title:
              "Vulnerability impact analysis in software project dependencies based on Satisfiability Modulo Theories (SMT)",
            journal: "Computers & Security - Elsevier",
            date: "1 abr 2024",
            link: "https://doi.org/10.1016/j.cose.2023.103669",
          },
          {
            title:
              "Depex: A software for analysing and reasoning about vulnerabilities in software projects dependencies",
            journal: "SoftwareX - Elsevier",
            date: "1 may 2025",
            link: "https://doi.org/10.1016/j.softx.2025.102152",
          },
          {
            title: "A dataset on vulnerabilities affecting dependencies in software package managers",
            journal: "Data in Brief - Elsevier",
            date: "1 jul 2025",
            link: "https://doi.org/10.1016/j.dib.2025.111903",
          },
        ],
        viewPublication: "Ver publicación",
      },
      soft: {
        title: "Habilidades Blandas",
        items: [
          "Comunicación efectiva - Capacidad para presentar conceptos técnicos complejos de manera clara y comprensible",
          "Ponente en conferencias nacionales e internacionales - Jornadas Nacionales de Investigación en Ciberseguridad (JNIC), Jornadas de Ingeniería del Software y Bases de Datos (JISBD), y Software Product Line Conference (SPLC)",
          "Trabajo en equipo - Experiencia colaborando en proyectos de investigación multidisciplinarios",
          "Gestión del tiempo y organización - Coordinación efectiva de múltiples proyectos durante el doctorado",
          "Pensamiento crítico - Análisis y resolución de problemas complejos en ciberseguridad",
          "Aprendizaje continuo - Adaptación rápida a nuevas tecnologías y metodologías",
          "Escritura técnica - Redacción de artículos científicos en inglés publicados en revistas de alto impacto",
          "Nivel B2 de inglés certificado - Capacidad para comunicar en entornos profesionales internacionales",
          "Mentoría y enseñanza - Experiencia guiando a estudiantes en proyectos de fin de grado",
        ],
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "Conectemos y exploremos oportunidades juntos",
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Soluciones innovadoras en seguridad de software",
      securechain: {
        title: "SecureChain",
        tagline: "Plataforma integral de seguridad para la cadena de suministro de software",
        description: "SecureChain es una plataforma comprehensiva que desarrollé desde cero durante mi doctorado para automatizar el análisis de vulnerabilidades y gestionar riesgos en proyectos de software. Combina análisis estático, trazabilidad de dependencias e inteligencia artificial.",
        features: [
          "Análisis automatizado de vulnerabilidades",
          "Trazabilidad completa de dependencias",
          "Gestión de riesgos con IA",
          "Integración con gestores de paquetes",
        ],
        tech: "Python, FastAPI, MongoDB, Neo4j, Docker, React",
        visit: "Visitar SecureChain",
      },
    },
  },
  en: {
    nav: {
      about: "About",
      roadmap: "Journey",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Antonio Germán Márquez Trujillo",
      subtitle: "PhD in Computer Engineering",
      description:
        "I am a PhD in computer engineering specialized in software development, cybersecurity, and with a particular focus on software supply chain security.",
      downloadCV: "Download CV",
      scrollDown: "Scroll down to learn more",
    },
    roadmap: {
      title: "My Journey",
      subtitle: "The path traveled and where I'm heading",
      education: {
        bachillerato: {
          title: "Baccalaureate",
          institution: "IES San José",
          description: "Technology Baccalaureate",
        },
        bachelor: {
          title: "Bachelor's Degree",
          institution: "University of Seville",
          description: "Computer Engineering - Software Engineering",
        },
        master: {
          title: "Master's Degree",
          institution: "University of Seville",
          description: "Master in Software Engineering - Cloud, Data and IT Management",
        },
      },
      current: {
        title: "Present - PhD",
        description:
          'I have just defended my doctoral thesis with Cum Laude honours: "A proposal for a comprehensive approach that improves software supply chain security through automation, traceability and artificial intelligence to strengthen the resilience of the software development ecosystem"',
        thesisLink: "View doctoral thesis",
      },
      future: {
        title: "Future - New Horizons",
        description:
          "I am looking for a job opportunity in the industry that allows me to grow in new technologies and challenges, so that my curiosity can continue to develop. I am open to any possible offer.",
      },
    },
    skills: {
      title: "Skills and Experience",
      technical: {
        title: "Technical Skills",
        description:
          "During my PhD, I focused on strengthening software supply chain security by developing various tools for vulnerability analysis and dependency traceability. All of this work culminated in SecureChain, a comprehensive platform that I designed and built from scratch to offer a complete solution for risk analysis and management in software projects.",
        radarTitle: "Areas of Expertise",
        barTitle: "Technology Experience",
        yearsLabel: "Years of experience",
      },
      publications: {
        title: "Scientific Publications",
        description:
          "Articles published during my PhD that support my doctoral thesis and demonstrate my formal English writing ability:",
        papers: [
          {
            title: "Feature models to boost the vulnerability management process",
            journal: "Journal of Systems and Software - Elsevier",
            date: "Jan 1, 2023",
            link: "https://doi.org/10.1016/j.jss.2022.111541",
          },
          {
            title:
              "Vulnerability impact analysis in software project dependencies based on Satisfiability Modulo Theories (SMT)",
            journal: "Computers & Security - Elsevier",
            date: "Apr 1, 2024",
            link: "https://doi.org/10.1016/j.cose.2023.103669",
          },
          {
            title:
              "Depex: A software for analysing and reasoning about vulnerabilities in software projects dependencies",
            journal: "SoftwareX - Elsevier",
            date: "May 1, 2025",
            link: "https://doi.org/10.1016/j.softx.2025.102152",
          },
          {
            title: "A dataset on vulnerabilities affecting dependencies in software package managers",
            journal: "Data in Brief - Elsevier",
            date: "Jul 1, 2025",
            link: "https://doi.org/10.1016/j.dib.2025.111903",
          },
        ],
        viewPublication: "View publication",
      },
      soft: {
        title: "Soft Skills",
        items: [
          "Effective communication - Ability to present complex technical concepts in a clear and understandable way",
          "Speaker at national and international conferences - National Cybersecurity Research Conference (JNIC), Software Engineering and Database Conference (JISBD), and Software Product Line Conference (SPLC)",
          "Teamwork - Experience collaborating on multidisciplinary research projects",
          "Time management and organization - Effective coordination of multiple projects during PhD",
          "Critical thinking - Analysis and resolution of complex cybersecurity problems",
          "Continuous learning - Quick adaptation to new technologies and methodologies",
          "Technical writing - Writing scientific articles in English published in high-impact journals",
          "Certified B2 level English - Ability to communicate in international professional environments",
          "Mentoring and teaching - Experience guiding undergraduate students in final degree projects",
        ],
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Let's connect and explore opportunities together",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Innovative software security solutions",
      securechain: {
        title: "SecureChain",
        tagline: "Comprehensive security platform for software supply chain",
        description: "SecureChain is a comprehensive platform I developed from scratch during my PhD to automate vulnerability analysis and manage risks in software projects. It combines static analysis, dependency traceability, and artificial intelligence.",
        features: [
          "Automated vulnerability analysis",
          "Complete dependency traceability",
          "AI-powered risk management",
          "Integration with package managers",
        ],
        tech: "Python, FastAPI, MongoDB, Neo4j, Docker, React",
        visit: "Visit SecureChain",
      },
    },
  },
}

// Skill radar data
const skillRadarData = [
  { skill: "Cybersecurity", es: "Ciberseguridad", value: 95 },
  { skill: "Software Development", es: "Desarrollo Software", value: 90 },
  { skill: "AI & ML", es: "IA y ML", value: 80 },
  { skill: "Cloud & DevOps", es: "Cloud y DevOps", value: 75 },
  { skill: "Research", es: "Investigación", value: 95 },
  { skill: "Technical Writing", es: "Escritura Técnica", value: 90 },
]

// Technology experience data (in years)
const technologyExperienceData = [
  { name: "Python", years: 5, color: "#3776AB" },
  { name: "FastAPI", years: 3, color: "#009688" },
  { name: "React", years: 3, color: "#61DAFB" },
  { name: "Docker", years: 4, color: "#2496ED" },
  { name: "MongoDB", years: 3, color: "#47A248" },
  { name: "Neo4j", years: 3, color: "#008CC1" },
  { name: "Git", years: 6, color: "#F05032" },
  { name: "Linux", years: 6, color: "#FCC624" },
]

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([])

  const t = translations[language]

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language") as "es" | "en" | null
    const savedTheme = localStorage.getItem("preferred-theme")
    
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase()
      const detectedLang = browserLang.startsWith("es") ? "es" : "en"
      setLanguage(detectedLang)
      localStorage.setItem("preferred-language", detectedLang)
    }

    if (savedTheme === "dark") {
      setIsDark(true)
    }
  }, [])

  // Save theme preference
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("preferred-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("preferred-theme", "light")
    }
  }, [isDark])

  // Save language preference
  useEffect(() => {
    localStorage.setItem("preferred-language", language)
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleItems: number[] = []
      timelineRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0
          if (isVisible) {
            newVisibleItems.push(index)
          }
        }
      })
      setVisibleItems(newVisibleItems)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDownloadCV = () => {
    const cvUrls = {
      es: "/CVs/CV_ES_Antonio_German_Marquez_Trujillo.pdf",
      en: "/CVs/CV_EN_Antonio_German_Marquez_Trujillo.pdf",
    }

    const cvUrl = cvUrls[language]

    // Create a link element to trigger the download
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = cvUrl.split('/').pop() || 'CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const technologies = [
    "Python",
    "FastAPI",
    "MongoDB",
    "Neo4j",
    "Docker",
    "React",
    "NextJS",
    "Ubuntu",
    "Bash",
    "Git",
    "Java",
    "Springboot",
    "Kubernetes",
    "Cybersecurity",
    "AI",
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">AGM</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key === "about" ? "hero" : key)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {value}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "es" ? "en" : "es")}>
              {language === "es" ? "EN" : "ES"}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-3 bg-white/95 dark:bg-gray-900/95">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => {
                  scrollToSection(key === "about" ? "hero" : key)
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">{t.hero.subtitle}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">{t.hero.description}</p>
              <Button size="lg" className="mb-8" onClick={handleDownloadCV}>
                <Download className="mr-2 h-4 w-4" />
                {t.hero.downloadCV}
              </Button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl">
                  <Image
                    src="/profile.jpeg"
                    alt="Antonio Germán Márquez Trujillo"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PhD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-4">{t.hero.scrollDown}</p>
            <ChevronDown
              className="mx-auto h-6 w-6 animate-bounce cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => scrollToSection("roadmap")}
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.roadmap.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.roadmap.subtitle}</p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative max-w-5xl mx-auto">
            {/* Enhanced Timeline line with gradient and glow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg shadow-blue-500/20" />

            {/* Timeline items */}
            <div className="space-y-20">
              {/* Bachillerato */}
              <div
                ref={el => { timelineRefs.current[0] = el }}
                className={`flex items-center transition-all duration-700 ${
                  visibleItems.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  <Card className="ml-auto max-w-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-purple-400 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end mb-3">
                        <div className="mr-3">
                          <h3 className="text-xl font-bold mb-1">{t.roadmap.education.bachillerato.title}</h3>
                          <div className="flex items-center justify-end text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>2014-2016</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                        {t.roadmap.education.bachillerato.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">{t.roadmap.education.bachillerato.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 relative shadow-lg hover:scale-125 transition-transform duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <div className="w-1/2" />
              </div>

              {/* Bachelor's Degree */}
              <div
                ref={el => { timelineRefs.current[1] = el }}
                className={`flex items-center transition-all duration-700 ${
                  visibleItems.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-1/2" />
                <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-4 border-white dark:border-gray-900 z-10 relative shadow-lg hover:scale-125 transition-transform duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <Card className="max-w-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-pink-400 group">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <University className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{t.roadmap.education.bachelor.title}</h3>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>2016-2020</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-pink-600 dark:text-pink-400 font-semibold mb-2">
                        {t.roadmap.education.bachelor.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">{t.roadmap.education.bachelor.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Master's Degree */}
              <div
                ref={el => { timelineRefs.current[2] = el }}
                className={`flex items-center transition-all duration-700 ${
                  visibleItems.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  <Card className="ml-auto max-w-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-orange-400 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end mb-3">
                        <div className="mr-3">
                          <h3 className="text-xl font-bold mb-1">{t.roadmap.education.master.title}</h3>
                          <div className="flex items-center justify-end text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>2020-2021</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-orange-600 dark:text-orange-400 font-semibold mb-2">
                        {t.roadmap.education.master.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">{t.roadmap.education.master.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-4 border-white dark:border-gray-900 z-10 relative shadow-lg hover:scale-125 transition-transform duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <div className="w-1/2" />
              </div>

              {/* Current - PhD */}
              <div
                ref={el => { timelineRefs.current[3] = el }}
                className={`flex items-center transition-all duration-700 ${
                  visibleItems.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-1/2" />
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-4 border-white dark:border-gray-900 z-10 relative shadow-xl hover:scale-125 transition-transform duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-30"></div>
                  <div className="absolute -inset-2 bg-green-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <Card className="max-w-md border-2 border-green-500 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 group">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1 text-green-600 dark:text-green-400">
                            {t.roadmap.current.title}
                          </h3>
                          <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>2021-2025</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t.roadmap.current.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-700">
                        <a
                          href="https://idus.us.es/items/b9a2da42-7468-4c6d-a6f6-f242c23274e5"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-300 font-semibold group"
                        >
                          <FileText className="w-5 h-5" />
                          {t.roadmap.current.thesisLink}
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Future */}
              <div
                ref={el => { timelineRefs.current[4] = el }}
                className={`flex items-center transition-all duration-700 ${
                  visibleItems.includes(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  <Card className="ml-auto max-w-md border-2 border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end mb-3">
                        <div className="mr-3">
                          <h3 className="text-xl font-bold mb-1 text-purple-600 dark:text-purple-400">
                            {t.roadmap.future.title}
                          </h3>
                          <div className="flex items-center justify-end text-sm text-purple-600 dark:text-purple-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>2025+</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Rocket className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t.roadmap.future.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 relative shadow-lg hover:scale-125 transition-transform duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <div className="w-1/2" />
              </div>
            </div>
          </div>

          {/* Enhanced Mobile Timeline */}
          <div className="lg:hidden relative max-w-2xl mx-auto">
            {/* Enhanced Timeline line for mobile */}
            <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg" />

            {/* Timeline items for mobile */}
            <div className="space-y-8">
              {/* Bachillerato - Mobile */}
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 relative mr-6 mt-6 shadow-lg">
                  <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-400 group">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{t.roadmap.education.bachillerato.title}</h3>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>2014-2016</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2 text-sm">
                      {t.roadmap.education.bachillerato.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {t.roadmap.education.bachillerato.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Bachelor's Degree - Mobile */}
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-4 border-white dark:border-gray-900 z-10 relative mr-6 mt-6 shadow-lg">
                  <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-all duration-300 border-l-4 border-l-pink-400 group">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                        <University className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{t.roadmap.education.bachelor.title}</h3>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>2016-2020</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-pink-600 dark:text-pink-400 font-semibold mb-2 text-sm">
                      {t.roadmap.education.bachelor.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {t.roadmap.education.bachelor.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Master's Degree - Mobile */}
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-4 border-white dark:border-gray-900 z-10 relative mr-6 mt-6 shadow-lg">
                  <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-400 group">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{t.roadmap.education.master.title}</h3>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>2020-2021</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold mb-2 text-sm">
                      {t.roadmap.education.master.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{t.roadmap.education.master.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Current - PhD - Mobile */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-4 border-white dark:border-gray-900 z-10 relative mr-6 mt-6 shadow-xl">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-30"></div>
                  <div className="absolute -inset-2 bg-green-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <Card className="flex-1 border-2 border-green-500 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 group">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-green-600 dark:text-green-400">
                          {t.roadmap.current.title}
                        </h3>
                        <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>2021-2025</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {t.roadmap.current.description}
                    </p>
                    <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
                      <a
                        href="https://idus.us.es/items/b9a2da42-7468-4c6d-a6f6-f242c23274e5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-300 font-semibold text-sm group"
                      >
                        <FileText className="w-4 h-4" />
                        {t.roadmap.current.thesisLink}
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Future - Mobile */}
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 relative mr-6 mt-6 shadow-lg">
                  <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <Card className="flex-1 border-2 border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 group">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400">
                          {t.roadmap.future.title}
                        </h3>
                        <div className="flex items-center text-xs text-purple-600 dark:text-purple-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>2025+</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {t.roadmap.future.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.skills.title}</h2>
          </div>

          {/* Technical Skills with Interactive Charts */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t.skills.technical.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t.skills.technical.description}
              </p>

              {/* Interactive Radar Chart - Areas of Expertise */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold mb-6 text-center text-gray-900 dark:text-white">
                  {t.skills.technical.radarTitle}
                </h4>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={skillRadarData}>
                    <PolarGrid stroke={isDark ? "#4b5563" : "#d1d5db"} strokeWidth={1.5} />
                    <PolarAngleAxis 
                      dataKey={language === "es" ? "es" : "skill"} 
                      tick={{ fill: isDark ? "#e5e7eb" : "#374151", fontSize: 14, fontWeight: 500 }}
                    />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: isDark ? "#d1d5db" : "#4b5563" }} />
                    <Radar
                      name="Nivel"
                      dataKey="value"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                      strokeWidth={2}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: isDark ? "#1f2937" : "#ffffff",
                        border: `2px solid ${isDark ? "#3b82f6" : "#3b82f6"}`,
                        borderRadius: "12px",
                        padding: "12px",
                      }}
                      labelStyle={{ color: isDark ? "#f9fafb" : "#111827", fontWeight: "bold", marginBottom: "4px" }}
                      formatter={(value: number) => [`${value}%`, language === "es" ? "Nivel" : "Level"]}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Technology Skills with Progress Bars */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                  {t.skills.technical.barTitle}
                </h4>
                <div className="space-y-4">
                  {technologyExperienceData.map((tech, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: tech.color }}></span>
                          {tech.name}
                        </span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {tech.years} {language === "es" ? "años" : "years"}
                        </span>
                      </div>
                      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out group-hover:opacity-90"
                          style={{ 
                            backgroundColor: tech.color,
                            width: `${(tech.years / 7) * 100}%`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Badges */}
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                  {language === "es" ? "Todas las tecnologías:" : "All technologies:"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Soft Skills */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t.skills.soft.title}</h3>
                <ul className="space-y-3">
                  {t.skills.soft.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Publications */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t.skills.publications.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{t.skills.publications.description}</p>
                <div className="space-y-6">
                  {t.skills.publications.papers.map((paper, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-semibold text-lg mb-2">{paper.title}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{paper.journal}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{paper.date}</p>
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {t.skills.publications.viewPublication} →
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.projects.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.projects.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Image 
                    src="/securechain-logo.ico" 
                    alt="SecureChain" 
                    width={48} 
                    height={48} 
                    className="rounded-lg bg-white p-2"
                  />
                  <h3 className="text-3xl font-bold">{t.projects.securechain.title}</h3>
                </div>
                <p className="text-blue-100 text-lg">{t.projects.securechain.tagline}</p>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {t.projects.securechain.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                    {language === "es" ? "Características principales:" : "Key Features:"}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {t.projects.securechain.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2 text-gray-700 dark:text-gray-400">
                    {language === "es" ? "Tecnologías:" : "Technologies:"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {t.projects.securechain.tech.split(", ").map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <a href="https://securechain.dev/" target="_blank" rel="noopener noreferrer">
                      <Rocket className="mr-2 h-5 w-5" />
                      {t.projects.securechain.visit}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.contact.subtitle}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:germanoctako@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/GermanMT" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/antonio-germ%C3%A1n-m%C3%A1rquez-trujillo-0aaa63215/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a
                href="https://scholar.google.es/citations?hl=es&user=Lv7HBqMAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGooglescholar className="mr-2 h-5 w-5" />
                Google Scholar
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Antonio Germán Márquez Trujillo.{" "}
            {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  )
}
