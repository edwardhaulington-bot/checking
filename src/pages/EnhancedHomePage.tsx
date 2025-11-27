import { Link } from 'react-router-dom'
import {
  ShieldCheckIcon,
  UserGroupIcon,
  CogIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  ChartBarIcon,
  StarIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import Logo from '../components/Logo'
import ScrollReveal from '../components/ScrollReveal'

export default function EnhancedHomePage() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const [typedText, setTypedText] = useState('')
  const [isChatOpen, setIsChatOpen] = useState(true)
  const fullText = 'Crypto Scam Recovery with AMLBot Investigation Team'

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  // FAQ Items
  const faqItems = [
    {
      question: "How quickly can you start investigating my case?",
      answer: "We can begin your investigation immediately after your case submission. Our team operates 24/7 and will reach out to you within 2 hours to discuss your specific situation and develop a recovery strategy."
    },
    {
      question: "What are your success rates for crypto recovery?",
      answer: "We maintain an 97% success rate across all investigation cases. Success depends on various factors including the time since theft, the sophistication of the attack, and how quickly we can trace the funds through blockchain networks."
    },
    {
      question: "Do you work with law enforcement agencies?",
      answer: "Yes, we have official partnerships with law enforcement agencies globally, including the FBI, Europol, and Interpol. We regularly collaborate on complex cases and provide detailed forensic reports for legal proceedings."
    },
    {
      question: "What types of cryptocurrency crimes can you investigate?",
      answer: "We investigate all types of cryptocurrency crimes including phishing attacks, fake airdrops, malicious smart contracts, exchange breaches, cross-chain laundering, NFT & DeFi scams, OTC fraud, wrench attacks, and device compromise."
    },
    {
      question: "How much do your recovery services cost?",
      answer: "Our fees are based on the complexity and value of each case. We offer transparent pricing with no upfront costs in most cases. Fees are typically a percentage of recovered funds, aligning our interests with your success."
    },
    {
      question: "Is my case information kept confidential?",
      answer: "Absolutely. We maintain strict confidentiality and follow industry best practices for data protection. We are ISO 27001:2022 certified and comply with international privacy regulations."
    }
  ]

  // Recovery Process Guide Steps
  const recoverySteps = [
    {
      number: 1,
      title: "Crypto Assets Stolen",
      description: "Your cryptocurrency has been compromised or stolen",
      type: "standard"
    },
    {
      number: 2,
      title: "Seek Professional Help",
      description: "Contact AMLBot's expert investigation team",
      type: "emphasized"
    },
    {
      number: 3,
      title: "Contact Your Platform Support",
      description: "Notify exchanges and platforms involved",
      type: "standard"
    },
    {
      number: 4,
      title: "Notify the Authorities",
      description: "File reports with law enforcement agencies",
      type: "standard"
    },
    {
      number: 5,
      title: "Engage a Blockchain Forensics Firm",
      description: "Our certified investigators use advanced tools",
      type: "standard"
    },
    {
      number: 6,
      title: "Successful Recovery",
      description: "Funds traced and recovered through expert analysis",
      type: "success"
    }
  ]

  // Process Flow Steps
  const investigationSteps = [
    {
      number: 1,
      title: "Case Intake",
      type: "primary"
    },
    {
      number: 2,
      title: "Initial Assessment",
      type: "primary"
    },
    {
      number: 3,
      title: "Fund Tracing",
      type: "secondary"
    },
    {
      number: 4,
      title: "Wallet Flagging",
      type: "secondary"
    },
    {
      number: 5,
      title: "Evidence Collection",
      type: "secondary"
    },
    {
      number: 6,
      title: "Successful Recovery",
      type: "success"
    }
  ]

  // Case Studies
  const caseStudies = [
    {
      title: "Lazarus Group Bounty Recovery",
      description: "Successfully traced and recovered $4.7M from a sophisticated APT group attack targeting DeFi protocols.",
      outcome: "$4.7M Recovered",
      timeframe: "14 Days",
      readMore: "#"
    },
    {
      title: "CEO Wi-Fi Network Breach",
      description: "Recovered $2.1M after corporate executive's device was compromised via malicious Wi-Fi access point.",
      outcome: "$2.1M Recovered",
      timeframe: "7 Days",
      readMore: "#"
    },
    {
      title: "Thai Police Partnership",
      description: "Collaborated with Thai authorities to recover $850K from cross-border cryptocurrency fraud scheme.",
      outcome: "$850K Recovered",
      timeframe: "21 Days",
      readMore: "#"
    }
  ]

  // Who We Help Data
  const whoWeHelp = [
    {
      title: "Victims of Crypto Fraud",
      description: "Recover stolen assets with expert tracing and LE support.",
      icon: "/crypto-fraud-icon.png"
    },
    {
      title: "Exchange Users",
      description: "Protect funds with 24/7 monitoring and suspicious activity detection.",
      icon: "/exchange-users-icon.png"
    },
    {
      title: "Law Enforcement",
      description: "Supply court-ready reports and forensic expertise.",
      icon: "/law-enforcement-icon.png"
    }
  ]

  // Crime Investigation Data
  const crimesInvestigate = [
    {
      name: "Phishing",
      description: "Stolen keys & malicious approvals."
    },
    {
      name: "Fake airdrops",
      description: "Defective tokens for profit."
    },
    {
      name: "Malicious contracts",
      description: "Smart contract exploited for personal gain."
    },
    {
      name: "Chat scams",
      description: "Impersonation for personal information theft."
    },
    {
      name: "CEX breaches",
      description: "Exchange hacks & unauthorized access."
    },
    {
      name: "Cross-chain laundering",
      description: "Multi-chain asset movement to conceal identity."
    },
    {
      name: "NFT & DeFi scams",
      description: "Rug pulls, exits, liquidity theft."
    },
    {
      name: "Smart contract bugs",
      description: "Ether to profit transfer vulnerabilities."
    },
    {
      name: "OTC scams",
      description: "Offline transaction losses."
    },
    {
      name: "Wrench attacks",
      description: "Physical robbery / stress/social engineering."
    },
    {
      name: "Device compromise",
      description: "Keylogging, remote access, backdoor compromises."
    },
    {
      name: "Social engineering",
      description: "Manipulation attacks."
    }
  ]

  // Features
  const features = [
    {
      title: "24/7 Monitoring",
      description: "Continuous real-time surveillance of blockchain networks",
      icon: ClockIcon,
      image: "/24-7-monitoring-icon.png"
    },
    {
      title: "Law Enforcement Recognition",
      description: "Official partnerships with global law enforcement agencies",
      icon: ShieldCheckIcon,
      image: "/law-enforcement-recognition-icon.png"
    },
    {
      title: "OSINT Investigation",
      description: "Advanced open-source intelligence gathering techniques",
      icon: MagnifyingGlassIcon,
      image: "/osint-investigation-icon.png"
    },
    {
      title: "End-to-End Investigation",
      description: "Complete investigation from theft to recovery",
      icon: CogIcon,
      image: "/end-to-end-investigation-icon.png"
    },
    {
      title: "In-House Analyst Tools",
      description: "Proprietary blockchain analysis technology",
      icon: ChartBarIcon,
      image: "/analyst-tools-feature.png"
    },
    {
      title: "Full Case Support",
      description: "Dedicated support throughout the entire recovery process",
      icon: UserGroupIcon,
      image: "/full-case-support-feature.png"
    }
  ]

  // Crime Types
  const crimeTypes = [
    "Phishing", "Fake airdrops", "Malicious contracts", "Chat scams",
    "CEX breaches", "Cross-chain laundering", "NFT & DeFi scams", "Smart contract bugs",
    "OTC scams", "Wrench attacks", "Device compromise", "Social engineering"
  ]

  // Who We Help
  const targetAudience = [
    {
      title: "Victims of Crypto Fraud",
      description: "Individual investors and traders who have lost cryptocurrency to scams, hacks, or fraudulent schemes",
      icon: UserGroupIcon
    },
    {
      title: "Cryptocurrency Exchanges",
      description: "Exchange platforms seeking to recover customer funds and improve security measures",
      icon: GlobeAltIcon
    },
    {
      title: "Law Enforcement Agencies",
      description: "Police departments and regulatory bodies investigating cryptocurrency-related crimes",
      icon: ShieldCheckIcon
    }
  ]



  // Partnership Logos - Industry Associations
  const industryAssociationsLogos = [
    { name: "FBI", logo: "/fbi-logo.png", description: "Federal Bureau of Investigation" },
    { name: "Europol", logo: "/europol-logo.png", description: "European Union Agency for Law Enforcement Cooperation" },
    { name: "Interpol", logo: "/interpol-logo.png", description: "International Criminal Police Organization" },
    { name: "Chainalysis", logo: "/chainalysis-logo.png", description: "Blockchain Analytics Platform" },
    { name: "Elliptic", logo: "/elliptic-logo.png", description: "Blockchain Intelligence Platform" },
    { name: "CipherTrace", logo: "/ciphertrace-logo.png", description: "Cryptocurrency Intelligence Solutions" }
  ]

  // Partnership Logos - Industry Leaders (for second section)
  const industryLeadersLogos = [
    { name: "FBI", logo: "/fbi-logo.png", description: "Federal Bureau of Investigation" },
    { name: "Europol", logo: "/europol-logo.png", description: "European Union Agency for Law Enforcement Cooperation" },
    { name: "Interpol", logo: "/interpol-logo.png", description: "International Criminal Police Organization" },
    { name: "Chainalysis", logo: "/chainalysis-logo.png", description: "Blockchain Analytics Platform" },
    { name: "Elliptic", logo: "/elliptic-logo.png", description: "Blockchain Intelligence Platform" },
    { name: "CipherTrace", logo: "/ciphertrace-logo.png", description: "Cryptocurrency Intelligence Solutions" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="premium-nav shadow-sm border-b border-white border-opacity-10 sticky top-0 z-50 backdrop-blur">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/products" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Products</Link>
                <Link to="/pricing" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Pricing</Link>
                <Link to="/analysis" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Analysis</Link>
                <Link to="/faq" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">FAQ</Link>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Blog</Link>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">About Us</Link>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Log In</Link>
              <Link to="/contact-form" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Create account
              </Link>
              <div className="text-gray-700 px-3 py-2 text-sm font-medium">EN</div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Floating Elements */}
        <div className="floating-element absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"></div>
        <div className="floating-element absolute top-1/4 right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20"></div>
        <div className="floating-element absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-shadow leading-tight">
              {typedText}
              <span className="inline-block w-2 h-16 bg-blue-400 ml-2 animate-pulse"></span>
            </h1>
            
            {/* Premium Badges */}
            <ScrollReveal delay={300} className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="trust-indicator">
                <span className="inline-flex items-center text-sm font-medium text-blue-300">
                  <img src="/law-enforcement-recognition.png" alt="Law Enforcement Recognition" className="h-5 w-5 mr-2 object-contain" />
                  Law Enforcement Recognition
                </span>
              </div>
              <div className="trust-indicator">
                <span className="inline-flex items-center text-sm font-medium text-green-300">
                  <img src="/end-to-end-investigation.png" alt="End-to-End Investigation" className="h-5 w-5 mr-2 object-contain" />
                  End-to-End Investigation
                </span>
              </div>
              <div className="trust-indicator">
                <span className="inline-flex items-center text-sm font-medium text-purple-300">
                  <img src="/certified-team-tools.png" alt="Certified Team & Tools" className="h-5 w-5 mr-2 object-contain" />
                  Certified Team & Tools
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Professional blockchain forensics and cryptocurrency recovery services trusted by law enforcement worldwide
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={900}>
              <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center mb-16">
                <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block animate-pulse">
                  Start Investigation
                  <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link to="/analysis" className="bg-white bg-opacity-10 text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm inline-block">
                  Learn More
                </Link>
              </div>
            </ScrollReveal>

            {/* Premium Stats */}
            <ScrollReveal delay={1200} className="premium-card p-8 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center feature-card">
                  <div className="stat-number mb-2">5000+</div>
                  <div className="text-gray-300 font-medium">Successful Investigations</div>
                </div>
                <div className="text-center feature-card">
                  <div className="stat-number mb-2">$65M+</div>
                  <div className="text-gray-300 font-medium">Total Recovered</div>
                </div>
                <div className="text-center feature-card">
                  <div className="stat-number mb-2">97%</div>
                  <div className="text-gray-300 font-medium">Success Rate</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Premium Partnership Section */}
            <ScrollReveal delay={1500} className="mt-20">
              <p className="text-gray-400 text-sm mb-8 uppercase tracking-wider font-medium">Trusted by Leading Industry Associations</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {industryAssociationsLogos.map((partner, index) => (
                  <div 
                    key={index} 
                    className="curved-logo-container premium-card p-4 text-center animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="curved-logo-placeholder">
                      {partner.logo && (index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5) ? (
                        <>
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`}
                            className="w-16 h-16 object-contain mx-auto mb-2"
                          />
                        </>
                      ) : (
                        <div className="text-gray-300 font-semibold text-sm mb-2">{partner.name}</div>
                      )}
                      <div className="text-gray-300 font-semibold text-sm mb-1">{partner.name}</div>
                      <p className="text-gray-400 text-xs opacity-75">{partner.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* Recovery Process Guide Section */}
      <section className="py-20 bg-[#0B1426] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <ScrollReveal className="text-center mb-16">
            <p className="text-sm font-medium text-blue-300 uppercase tracking-wide mb-4">
              Recovery Roadmap
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-shadow">
              What to Do if Your Crypto Was Scammed or Hacked?
            </h2>
          </ScrollReveal>

          {/* Premium Flowchart Container */}
          <ScrollReveal delay={300} className="premium-card p-8 lg:p-12 relative">
            {/* Flowchart Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Step 1 - Crypto Assets Stolen */}
              <ScrollReveal delay={400} className="process-step flex flex-col items-center">
                <div className="bg-[#F0F3F7] text-[#2D3A8F] px-6 py-4 rounded-xl text-center font-semibold mb-4 relative premium-card animate-fadeInUp">
                  <div className="process-step-number -top-2 -left-2">
                    1
                  </div>
                  Crypto Assets Stolen
                </div>
              </ScrollReveal>

              {/* Step 2 - Seek Professional Help */}
              <ScrollReveal delay={500} className="process-step flex flex-col items-center">
                <div className="bg-[#5A6FC7] text-white px-6 py-4 rounded-xl text-center font-semibold mb-4 relative premium-card animate-fadeInUp">
                  <div className="process-step-number -top-2 -left-2 bg-white text-[#2D3A8F]">
                    2
                  </div>
                  Seek Professional Help
                </div>
                {/* Animated Arrow */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white to-blue-300"></div>
                <div className="hidden lg:block absolute top-1/2 -right-4 w-0 h-0 border-l-4 border-t-2 border-b-2 border-transparent border-t-blue-300 border-b-blue-300 transform translate-x-1"></div>
              </ScrollReveal>

              {/* Steps 3, 4, 5 - Branching Flow */}
              <ScrollReveal delay={600} className="space-y-6">
                <div className="premium-card bg-[#F0F3F7] text-[#2D3A8F] px-4 py-3 rounded-xl text-center font-medium relative animate-fadeInUp">
                  <div className="process-step-number -top-2 -left-2">
                    3
                  </div>
                  Contact Your Platform Support
                </div>
                <div className="premium-card bg-[#F0F3F7] text-[#2D3A8F] px-4 py-3 rounded-xl text-center font-medium relative animate-fadeInUp">
                  <div className="process-step-number -top-2 -left-2">
                    4
                  </div>
                  Notify the Authorities
                </div>
                <div className="premium-card bg-[#F0F3F7] text-[#2D3A8F] px-4 py-3 rounded-xl text-center font-medium relative animate-fadeInUp">
                  <div className="process-step-number -top-2 -left-2">
                    5
                  </div>
                  Engage a Blockchain Forensics Firm
                </div>
              </ScrollReveal>
            </div>

            {/* Explanatory Text Box */}
            <ScrollReveal delay={700} className="premium-card bg-[#F0F3F7] bg-opacity-10 border border-blue-400 border-opacity-30 rounded-lg p-6 mb-8 backdrop-blur-sm">
              <p className="text-white text-sm leading-relaxed">
                <span className="gradient-text font-semibold">
                  Experts trace stolen assets, flag wallets, and work with law enforcement to increase your chances of successful recovery. Our certified investigators use advanced blockchain forensics tools and established protocols.
                </span>
              </p>
            </ScrollReveal>

            {/* Success Step */}
            <ScrollReveal delay={800} className="flex justify-center mb-8">
              <div className="success-milestone text-white px-10 py-8 rounded-full text-center font-bold text-xl relative animate-pulse">
                <div className="process-step-number bg-white text-[#10B981] -top-2 -left-2 w-8 h-8">
                  6
                </div>
                Successful Recovery
              </div>
            </ScrollReveal>

            {/* Concluding Statement */}
            <ScrollReveal delay={900} className="text-center">
              <p className="text-white text-base leading-relaxed mb-8 text-shadow">
                Coordinated action between the platform, authorities, and investigators maximises your chance of recovery.
              </p>
              
              {/* Premium CTA Button */}
              <Link 
                to="/contact-form" 
                className="btn-premium inline-flex items-center px-8 py-4 text-lg font-semibold animate-glow"
              >
                Report My Case
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Who We Help
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {whoWeHelp.map((item, index) => (
              <ScrollReveal key={index} delay={200 + index * 100} className="text-center">
                <div className="bg-gray-50 rounded-lg p-8 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                    {item.icon.startsWith('/') ? (
                      <img 
                        src={item.icon} 
                        alt={item.title}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <span className="text-2xl">{item.icon}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Crime We Investigate Section */}
          <ScrollReveal className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Crime We Investigate:</h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {crimesInvestigate.map((crime, index) => (
              <ScrollReveal key={index} delay={300 + index * 50} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">{crime.name}</span>
                  <span className="text-gray-600"> – </span>
                  <span className="text-gray-600">{crime.description}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#0F1419] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-24 h-24 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
              Case Studies & Success Stories
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              High-profile recovery cases that demonstrate our expertise and success rate
            </p>
            <ScrollReveal delay={300} className="text-center">
              <div className="trust-indicator inline-flex items-center px-6 py-3 rounded-full text-sm font-medium">
                <StarIcon className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Industry-Leading Success Rate</span>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <ScrollReveal key={index} delay={400 + index * 100} className="feature-card p-6 animate-slideInFromBottom">
                <h3 className="text-xl font-semibold text-white mb-3 gradient-text">{caseStudy.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{caseStudy.description}</p>
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="font-medium text-green-400">{caseStudy.outcome}</span>
                  <span className="text-gray-400">{caseStudy.timeframe}</span>
                </div>
                <a 
                  href={caseStudy.readMore} 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  Read on... 
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-[#1A1B3A] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
              Process Flow
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our systematic investigation process ensures thorough analysis and maximum recovery chances
            </p>
          </ScrollReveal>

          {/* Premium Process Flow Diagram */}
          <ScrollReveal delay={300} className="premium-card p-8 lg:p-12 shadow-xl">
            {/* Flow Layout */}
            <div className="relative">
              {/* Primary Steps (1, 2) */}
              <ScrollReveal delay={400} className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                {/* Step 1 - Case Intake */}
                <div className="process-step relative flex flex-col items-center">
                  <div className="process-step-number w-16 h-16 mb-4">
                    1
                  </div>
                  <div className="premium-card bg-white border-2 border-[#4A7BFF] rounded-xl px-6 py-3 text-center font-semibold text-gray-900 shadow-sm animate-fadeInUp">
                    Case Intake
                  </div>
                </div>

                {/* Animated Arrow from 1 to 2 */}
                <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-[#4A7BFF] to-blue-300 relative">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-t-2 border-b-2 border-transparent border-l-blue-300 border-t-blue-300 border-b-blue-300"></div>
                </div>
                
                {/* Step 2 - Initial Assessment */}
                <div className="process-step relative flex flex-col items-center">
                  <div className="process-step-number w-16 h-16 mb-4">
                    2
                  </div>
                  <div className="premium-card bg-white border-2 border-[#4A7BFF] rounded-xl px-6 py-3 text-center font-semibold text-gray-900 shadow-sm animate-fadeInUp">
                    Initial Assessment
                  </div>
                </div>
              </ScrollReveal>

              {/* Branching Point */}
              <ScrollReveal delay={500} className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
                {/* Animated Arrow down from Step 2 */}
                <div className="hidden lg:block w-0.5 h-8 bg-gradient-to-b from-[#4A7BFF] to-blue-300 relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-l-2 border-r-2 border-transparent border-t-blue-300 border-l-blue-300 border-r-blue-300"></div>
                </div>
                
                {/* Information Point */}
                <div className="process-step-number w-8 h-8 mb-4 text-sm animate-glow">
                  i
                </div>
              </ScrollReveal>

              {/* Secondary Steps (3, 4, 5) - Branching Flow */}
              <ScrollReveal delay={600} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Step 3 - Fund Tracing */}
                <div className="process-step relative flex flex-col items-center">
                  <div className="premium-card bg-[#2D3A8F] text-white px-6 py-4 rounded-xl text-center font-semibold mb-4 relative animate-fadeInLeft">
                    <div className="process-step-number bg-white text-[#2D3A8F] -top-2 -left-2">
                      3
                    </div>
                    Fund Tracing
                  </div>
                  {/* Animated Arrow down */}
                  <div className="hidden md:block w-0.5 h-6 bg-gradient-to-b from-[#2D3A8F] to-blue-400 relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-l-2 border-r-2 border-transparent border-t-blue-400 border-l-blue-400 border-r-blue-400"></div>
                  </div>
                </div>

                {/* Step 4 - Wallet Flagging */}
                <div className="process-step relative flex flex-col items-center">
                  <div className="premium-card bg-[#2D3A8F] text-white px-6 py-4 rounded-xl text-center font-semibold mb-4 relative animate-fadeInUp">
                    <div className="process-step-number bg-white text-[#2D3A8F] -top-2 -left-2">
                      4
                    </div>
                    Wallet Flagging
                  </div>
                  {/* Animated Arrow down */}
                  <div className="hidden md:block w-0.5 h-6 bg-gradient-to-b from-[#2D3A8F] to-blue-400 relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-l-2 border-r-2 border-transparent border-t-blue-400 border-l-blue-400 border-r-blue-400"></div>
                  </div>
                </div>

                {/* Step 5 - Evidence Collection */}
                <div className="process-step relative flex flex-col items-center">
                  <div className="premium-card bg-[#2D3A8F] text-white px-6 py-4 rounded-xl text-center font-semibold mb-4 relative animate-fadeInRight">
                    <div className="process-step-number bg-white text-[#2D3A8F] -top-2 -left-2">
                      5
                    </div>
                    Evidence Collection
                  </div>
                  {/* Animated Arrow down */}
                  <div className="hidden md:block w-0.5 h-6 bg-gradient-to-b from-[#2D3A8F] to-blue-400 relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-l-2 border-r-2 border-transparent border-t-blue-400 border-l-blue-400 border-r-blue-400"></div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Convergence Lines */}
              <ScrollReveal delay={700} className="hidden lg:block relative mb-8">
                {/* Dotted lines from steps 3, 4, 5 to step 6 */}
                <div className="absolute left-1/6 top-0 w-0.5 h-6 bg-[#2D3A8F] border-dashed opacity-60" style={{borderLeft: '2px dashed #2D3A8F'}}></div>
                <div className="absolute left-1/2 top-0 w-0.5 h-6 bg-[#2D3A8F] border-dashed opacity-60" style={{borderLeft: '2px dashed #2D3A8F'}}></div>
                <div className="absolute left-5/6 top-0 w-0.5 h-6 bg-[#2D3A8F] border-dashed opacity-60" style={{borderLeft: '2px dashed #2D3A8F'}}></div>
                
                {/* Horizontal convergence line */}
                <div className="absolute top-6 left-1/6 right-1/6 h-0.5 bg-[#2D3A8F] border-dashed opacity-60" style={{borderBottom: '2px dashed #2D3A8F'}}></div>
              </ScrollReveal>

              {/* Final Outcome - Step 6 */}
              <ScrollReveal delay={800} className="flex justify-center">
                <div className="process-step relative flex flex-col items-center">
                  <div className="success-milestone text-white px-10 py-8 rounded-full text-center font-bold text-xl relative animate-pulse">
                    <div className="process-step-number bg-white text-[#10B981] -top-2 -left-2 w-8 h-8">
                      6
                    </div>
                    Successful Recovery
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Bottom CTA */}
            <ScrollReveal delay={900} className="text-center mt-12">
              <p className="text-gray-300 mb-6 text-lg font-medium">
                Ready to start your recovery process?
              </p>
              <Link 
                to="/contact-form" 
                className="btn-premium inline-flex items-center px-8 py-4 text-lg font-semibold animate-glow"
              >
                Start Your Case
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-20 bg-[#1A1B3A] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
              Why Choose AMLBot?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading features and capabilities for comprehensive crypto recovery
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={300 + index * 100} className="feature-card p-8 animate-slideInFromBottom">
                <div className="mb-6">
                  {feature.image ? (
                    <img 
                      src={feature.image} 
                      alt={`${feature.title} icon`}
                      className="h-16 w-16 mx-auto mb-4 animate-float object-contain"
                    />
                  ) : (
                    <feature.icon className="h-12 w-12 text-blue-400 mb-4 animate-float" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Leaders Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600">
              Official partnerships with law enforcement agencies and industry organizations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industryLeadersLogos.map((partner, index) => (
              <div 
                key={index} 
                className="curved-logo-container premium-card p-4 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="curved-logo-placeholder">
                  {partner.logo && (index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5) ? (
                    <>
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-16 h-16 object-contain mx-auto mb-2"
                      />
                    </>
                  ) : (
                    <div className="text-gray-700 font-semibold text-sm mb-2">{partner.name}</div>
                  )}
                  <div className="text-gray-700 font-semibold text-sm mb-1">{partner.name}</div>
                  <p className="text-gray-500 text-xs opacity-75">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Help</h2>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive support for all types of cryptocurrency crime victims
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center">
                <audience.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crime We Investigate Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cryptocurrency Crimes We Investigate
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive investigation capabilities across all major types of crypto crimes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {crimeTypes.map((crime, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{crime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our crypto recovery services
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-gray-500 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link to="/contact-form" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* For Business */}
            <div>
              <h3 className="text-lg font-semibold mb-4">For Business</h3>
              <ul className="space-y-2">
                <li><a href="/products" className="text-gray-300 hover:text-white">Enterprise Solutions</a></li>
                <li><a href="/analysis" className="text-gray-300 hover:text-white">Exchange Partnerships</a></li>
                <li><a href="/pricing" className="text-gray-300 hover:text-white">API Integration</a></li>
              </ul>
            </div>

            {/* For Personal Use */}
            <div>
              <h3 className="text-lg font-semibold mb-4">For Personal Use</h3>
              <ul className="space-y-2">
                <li><Link to="/contact-form" className="text-gray-300 hover:text-white">Individual Recovery</Link></li>
                <li><a href="/blog" className="text-gray-300 hover:text-white">Personal Security</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-white">Educational Resources</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white">News</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">User Agreement</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <a href="https://t.me/amlbot_support_bot" className="text-gray-300 hover:text-white">
                  Telegram
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  X
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  YouTube
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Medium
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 mb-2">Safelement Limited (Hong Kong)</p>
                  <p className="text-gray-300">Safe3 UAB (Lithuania)</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-300">ISO 9001:2015 Certified</p>
                    <p className="text-gray-300">ISO 27001:2022 Certified</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-300">
                    <ClockIcon className="h-4 w-4 inline mr-2" />
                    24/7 Support Available
                  </p>
                  <p className="text-gray-300 mt-2 font-semibold">
                    <CheckCircleIcon className="h-4 w-4 inline mr-2" />
                    5000+ investigations completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 relative max-w-sm">
            <button 
              onClick={() => setIsChatOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <p className="text-gray-900 text-sm">
                Hello! Our <span className="font-semibold">crypto investigation</span> team is ready to help you!
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Trigger Icon */}
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={() => setIsChatOpen(true)}
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
