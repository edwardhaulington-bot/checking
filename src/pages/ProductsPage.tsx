import { Link } from 'react-router-dom'
import { 
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ClockIcon,
  CpuChipIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import Logo from '../components/Logo'
import ScrollReveal from '../components/ScrollReveal'

export default function ProductsPage() {
  const products = [
    {
      name: "CryptoScout Pro",
      category: "Investigation Platform",
      description: "Advanced blockchain analysis tool for real-time monitoring and investigation of cryptocurrency transactions.",
      features: [
        "Real-time blockchain monitoring",
        "Advanced transaction analytics",
        "Cross-chain investigation capabilities",
        "Risk scoring and assessment",
        "Custom alerting system",
        "API integration"
      ],
      icon: MagnifyingGlassIcon,
      price: "Contact for pricing",
      popular: true
    },
    {
      name: "WalletWatch Enterprise",
      category: "Enterprise Security",
      description: "Comprehensive wallet monitoring and protection service for businesses and exchanges.",
      features: [
        "24/7 wallet monitoring",
        "Suspicious activity detection",
        "Automated threat response",
        "Compliance reporting",
        "Risk management dashboard",
        "Multi-wallet support"
      ],
      icon: ShieldCheckIcon,
      price: "Custom enterprise pricing",
      popular: false
    },
    {
      name: "ChainAnalytics Suite",
      category: "Forensic Analysis",
      description: "Professional-grade forensic analysis tools for law enforcement and legal professionals.",
      features: [
        "Court-ready reporting",
        "Advanced fund tracing",
        "Evidence compilation",
        "Legal documentation",
        "Expert witness support",
        "Chain of custody tracking"
      ],
      icon: ChartBarIcon,
      price: "Professional licensing",
      popular: false
    },
    {
      name: "GlobalTrace Network",
      category: "Investigation Network",
      description: "Global network connecting investigators, law enforcement, and exchanges for coordinated recovery efforts.",
      features: [
        "Global investigator network",
        "Cross-border coordination",
        "Exchange partnerships",
        "Real-time intelligence sharing",
        "Joint investigation capabilities",
        "International law enforcement support"
      ],
      icon: GlobeAltIcon,
      price: "Partnership program",
      popular: false
    }
  ]

  const features = [
    {
      title: "Real-time Monitoring",
      description: "24/7 surveillance of blockchain networks to detect suspicious activities and track fund movements.",
      icon: ClockIcon
    },
    {
      title: "Advanced Analytics",
      description: "Sophisticated algorithms and machine learning models for deep transaction analysis and pattern recognition.",
      icon: CpuChipIcon
    },
    {
      title: "Cross-Chain Support",
      description: "Multi-blockchain analysis supporting Bitcoin, Ethereum, and 100+ other cryptocurrency networks.",
      icon: GlobeAltIcon
    },
    {
      title: "Legal Compliance",
      description: "Built-in compliance features and reporting tools for regulatory requirements and legal proceedings.",
      icon: ShieldCheckIcon
    }
  ]

  const useCases = [
    {
      title: "Law Enforcement",
      description: "Investigate cryptocurrency crimes, trace stolen funds, and build legal cases with our forensic tools.",
      icon: ShieldCheckIcon
    },
    {
      title: "Cryptocurrency Exchanges",
      description: "Monitor transactions, detect suspicious activity, and ensure compliance with regulatory requirements.",
      icon: GlobeAltIcon
    },
    {
      title: "Legal Firms",
      description: "Access professional-grade blockchain analysis and expert testimony services for legal cases.",
      icon: ChartBarIcon
    },
    {
      title: "Individual Recovery",
      description: "Professional cryptocurrency recovery services for victims of theft, fraud, and scams.",
      icon: MagnifyingGlassIcon
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
                <Link to="/products" className="text-blue-400 px-3 py-2 text-sm font-medium">Products</Link>
                <Link to="/pricing" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Pricing</Link>
                <Link to="/analysis" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Analysis</Link>
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
              Professional Products & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade blockchain forensics and cryptocurrency recovery tools for professionals
            </p>
            
            <ScrollReveal delay={600}>
              <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
                  Request Demo
                  <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link to="/pricing" className="bg-white bg-opacity-10 text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm inline-block">
                  View Pricing
                </Link>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of tools and services for cryptocurrency investigation and recovery
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={index} delay={300 + index * 100} className={`bg-white rounded-lg shadow-lg p-8 ${product.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {product.popular && (
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <product.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-blue-600 font-medium">{product.category}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{product.description}</p>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                  <Link 
                    to="/contact-form"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities that set our products apart
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={400 + index * 100} className="bg-white rounded-lg p-8 text-center">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products serve a wide range of professional use cases
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <ScrollReveal key={index} delay={500 + index * 100} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-[#0B1426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 text-shadow">API Integration</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrate our tools into your existing workflows
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={300} className="bg-white bg-opacity-10 rounded-lg p-8 text-center backdrop-blur">
              <h3 className="text-xl font-semibold text-white mb-4">RESTful API</h3>
              <p className="text-gray-300">
                Comprehensive REST API for easy integration with your systems and workflows.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500} className="bg-white bg-opacity-10 rounded-lg p-8 text-center backdrop-blur">
              <h3 className="text-xl font-semibold text-white mb-4">Webhooks</h3>
              <p className="text-gray-300">
                Real-time notifications and alerts delivered directly to your systems.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={700} className="bg-white bg-opacity-10 rounded-lg p-8 text-center backdrop-blur">
              <h3 className="text-xl font-semibold text-white mb-4">SDK Support</h3>
              <p className="text-gray-300">
                Official SDKs for popular programming languages and frameworks.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our team to discuss your specific needs and get a custom solution
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
                Request Demo
                <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link to="/pricing" className="bg-gray-100 text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors inline-block">
                View Pricing
              </Link>
            </div>
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