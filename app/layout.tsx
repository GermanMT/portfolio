import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Antonio Germán Márquez Trujillo - PhD in Computer Engineering",
  description: "PhD in Computer Engineering specialized in software development, cybersecurity, and software supply chain security. Researcher with 4 publications in Elsevier journals and creator of SecureChain platform.",
  keywords: [
    "Antonio Germán Márquez Trujillo",
    "PhD Computer Engineering",
    "Software Security",
    "Cybersecurity",
    "Software Supply Chain Security",
    "SecureChain",
    "Vulnerability Analysis",
    "Universidad de Sevilla",
    "Software Development",
    "Research",
  ],
  authors: [{ name: "Antonio Germán Márquez Trujillo" }],
  creator: "Antonio Germán Márquez Trujillo",
  publisher: "Antonio Germán Márquez Trujillo",
  metadataBase: new URL("https://portfolio-germanmt.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/es",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://portfolio-germanmt.vercel.app",
    title: "Antonio Germán Márquez Trujillo - PhD in Computer Engineering",
    description: "PhD in Computer Engineering specialized in software security and supply chain security. Creator of SecureChain platform.",
    siteName: "Antonio Germán Márquez Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Antonio Germán Márquez Trujillo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Germán Márquez Trujillo - PhD in Computer Engineering",
    description: "PhD specialized in software security and supply chain security",
    images: ["/profile.jpeg"],
    creator: "@germanmt", // Si tienes Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    // google: 'tu-código-de-verificación', // Agregar cuando verifiques en Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Antonio Germán Márquez Trujillo",
    givenName: "Antonio Germán",
    familyName: "Márquez Trujillo",
    jobTitle: "PhD in Computer Engineering",
    description: "PhD in Computer Engineering specialized in software development, cybersecurity, and software supply chain security",
    url: "https://portfolio-germanmt.vercel.app",
    image: "https://portfolio-germanmt.vercel.app/profile.jpeg",
    email: "germanoctako@gmail.com",
    sameAs: [
      "https://github.com/GermanMT",
      "https://www.linkedin.com/in/antonio-germ%C3%A1n-m%C3%A1rquez-trujillo-0aaa63215/",
      "https://scholar.google.es/citations?hl=es&user=Lv7HBqMAAAAJ",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Universidad de Sevilla",
      url: "https://www.us.es/",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Doctorate",
        name: "PhD in Computer Engineering",
        educationalLevel: "Doctorate",
        about: "Software supply chain security, vulnerability analysis, and traceability",
        dateCreated: "2025",
        recognizedBy: {
          "@type": "Organization",
          name: "Universidad de Sevilla",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Master's Degree",
        name: "Master in Software Engineering - Cloud, Data and IT Management",
        educationalLevel: "Master",
        dateCreated: "2021",
        recognizedBy: {
          "@type": "Organization",
          name: "Universidad de Sevilla",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Bachelor's Degree",
        name: "Computer Engineering - Software Engineering",
        educationalLevel: "Bachelor",
        dateCreated: "2020",
        recognizedBy: {
          "@type": "Organization",
          name: "Universidad de Sevilla",
        },
      },
    ],
    knowsAbout: [
      "Software Security",
      "Cybersecurity",
      "Software Supply Chain Security",
      "Vulnerability Analysis",
      "Python",
      "FastAPI",
      "React",
      "Docker",
      "MongoDB",
      "Neo4j",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "DevOps",
    ],
    author: [
      {
        "@type": "ScholarlyArticle",
        name: "Feature models to boost the vulnerability management process",
        headline: "Feature models to boost the vulnerability management process",
        datePublished: "2023-01-01",
        publisher: {
          "@type": "Organization",
          name: "Elsevier",
        },
        isPartOf: {
          "@type": "Periodical",
          name: "Journal of Systems and Software",
        },
        url: "https://doi.org/10.1016/j.jss.2022.111541",
      },
      {
        "@type": "ScholarlyArticle",
        name: "Vulnerability impact analysis in software project dependencies based on Satisfiability Modulo Theories (SMT)",
        headline: "Vulnerability impact analysis in software project dependencies based on Satisfiability Modulo Theories (SMT)",
        datePublished: "2024-04-01",
        publisher: {
          "@type": "Organization",
          name: "Elsevier",
        },
        isPartOf: {
          "@type": "Periodical",
          name: "Computers & Security",
        },
        url: "https://doi.org/10.1016/j.cose.2023.103669",
      },
      {
        "@type": "ScholarlyArticle",
        name: "Depex: A software for analysing and reasoning about vulnerabilities in software projects dependencies",
        headline: "Depex: A software for analysing and reasoning about vulnerabilities in software projects dependencies",
        datePublished: "2025-05-01",
        publisher: {
          "@type": "Organization",
          name: "Elsevier",
        },
        isPartOf: {
          "@type": "Periodical",
          name: "SoftwareX",
        },
        url: "https://doi.org/10.1016/j.softx.2025.102152",
      },
      {
        "@type": "ScholarlyArticle",
        name: "A dataset on vulnerabilities affecting dependencies in software package managers",
        headline: "A dataset on vulnerabilities affecting dependencies in software package managers",
        datePublished: "2025-07-01",
        publisher: {
          "@type": "Organization",
          name: "Elsevier",
        },
        isPartOf: {
          "@type": "Periodical",
          name: "Data in Brief",
        },
        url: "https://doi.org/10.1016/j.dib.2025.111903",
      },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Antonio Germán Márquez Portfolio",
    description: "Professional portfolio of Antonio Germán Márquez Trujillo, PhD in Computer Engineering",
    url: "https://portfolio-germanmt.vercel.app",
    author: {
      "@type": "Person",
      name: "Antonio Germán Márquez Trujillo",
    },
    inLanguage: ["es", "en"],
  }

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@id": "https://portfolio-germanmt.vercel.app/#person",
    },
    name: "Antonio Germán Márquez Trujillo - Professional Portfolio",
    description: "Professional portfolio and CV of Antonio Germán Márquez Trujillo",
  }

  return (
    <html lang="es">
      <head>
        {/* Schema.org JSON-LD for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* Schema.org JSON-LD for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Schema.org JSON-LD for ProfilePage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
