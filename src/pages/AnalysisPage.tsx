import { Link } from 'react-router-dom'
import { 
  MagnifyingGlassIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  GlobeAltIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import Logo from '../components/Logo'
import ScrollReveal from '../components/ScrollReveal'

export default function AnalysisPage() {
  const analysisFeatures = [
    {
      title: "Real-time Blockchain Monitoring",
      description: "24/7 surveillance of blockchain networks to detect suspicious activities and track fund movements in real-time.",
      icon: ClockIcon
    },
    {
      title: "Advanced Transaction Analysis",
      description: "Deep dive into transaction patterns, wallet connections, and fund flows using sophisticated algorithms.",
      icon: ChartBarIcon
    },
    {
      title: "Cross-Chain Investigation",
      description: "Track cryptocurrency movements across multiple blockchain networks including Bitcoin, Ethereum, and altcoins.",
      icon: GlobeAltIcon
    },
    {
      title: "Risk Assessment & Scoring",
      description: "Comprehensive risk evaluation of wallets and addresses based on known criminal activity and suspicious patterns.",
      icon: ShieldCheckIcon
    }
  ]

  const investigationSteps = [
    {
      step: 1,
      title: "Initial Analysis",
      description: "Comprehensive review of the incident and initial blockchain analysis"
    },
    {
      step: 2,
      title: "Fund Tracking",
      description: "Advanced tracing of stolen assets through multiple transactions and exchanges"
    },
    {
      step: 3,
      title: "Evidence Compilation",
      description: "Gathering and organizing all forensic evidence for legal proceedings"
    },
    {
      step: 4,
      title: "Legal Support",
      description: "Providing expert testimony and detailed reports for law enforcement"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="premium-nav shadow-sm border-b border-white border-opacity-10 sticky top-0 z-50 backdrop-blur">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/products" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Products</Link>
                <Link to="/pricing" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Pricing</Link>
                <Link to="/analysis" className="text-blue-400 px-3 py-2 text-sm font-medium">Analysis</Link>
                <Link to="/faq" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">FAQ</Link>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Blog</Link>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">About Us</Link>
              </div>
            </div>
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
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-shadow leading-tight">
              Blockchain Analysis & Investigation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Advanced forensic analysis tools and expert investigation services for cryptocurrency crimes
            </p>
            
            <ScrollReveal delay={600}>
              <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
                  Start Analysis
                  <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link to="/about" className="bg-white bg-opacity-10 text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm inline-block">
                  Learn More
                </Link>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Analysis Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art blockchain analysis tools and methodologies for comprehensive cryptocurrency investigation
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analysisFeatures.map((feature, index) => (
              <ScrollReveal key={index} delay={300 + index * 100} className="text-center">
                <div className="bg-gray-50 rounded-lg p-8 h-full">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investigation Process */}
      <section className="py-20 bg-[#0B1426] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 text-shadow">Investigation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our systematic approach to blockchain analysis and evidence gathering
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investigationSteps.map((step, index) => (
              <ScrollReveal key={index} delay={400 + index * 100} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Start Your Investigation?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get expert blockchain analysis and forensic investigation services for your case
            </p>
            <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
              Contact Our Experts
              <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">For Business</h3>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-gray-300 hover:text-white">Enterprise Solutions</Link></li>
                <li><Link to="/analysis" className="text-gray-300 hover:text-white">Exchange Partnerships</Link></li>
                <li><Link to="/pricing" className="text-gray-300 hover:text-white">API Integration</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">For Personal Use</h3>
              <ul className="space-y-2">
                <li><Link to="/contact-form" className="text-gray-300 hover:text-white">Individual Recovery</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white">Personal Security</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white">Educational Resources</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white">News</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">User Agreement</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}