import { Link } from 'react-router-dom'
import {
  Bars3Icon,
  XMarkIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CogIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import Logo from '../components/Logo'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Services</Link>
                <Link to="/contact-form" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Report Case</Link>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</a>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Log In</a>
              <Link to="/contact-form" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Crypto Scam Recovery with{' '}
              <span className="text-blue-600">AMLBot</span>{' '}
              Investigation Team
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Professional blockchain forensics and cryptocurrency recovery services trusted by law enforcement worldwide
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recognized by Law Enforcement Worldwide</h3>
                <p className="text-gray-600">Trusted partnerships with police departments and regulatory agencies globally</p>
              </div>
              <div className="text-center">
                <CogIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Investigation</h3>
                <p className="text-gray-600">Complete blockchain analysis from theft to recovery with real-time tracking</p>
              </div>
              <div className="text-center">
                <UserGroupIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">In-House Certified Team and Tools</h3>
                <p className="text-gray-600">Expert investigators and proprietary blockchain analysis technology</p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link to="/contact-form" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-block">
                Start Investigation
              </Link>
              <Link to="/services" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands Worldwide</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Successful Recoveries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Exchange Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What to Do if Your Crypto Was Scammed or Hacked?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our proven 6-step recovery roadmap to maximize your chances of successful asset recovery
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { title: "Crypto Assets Stolen", icon: ExclamationTriangleIcon, color: "text-red-600" },
              { title: "Seek Professional Help", icon: UserGroupIcon, color: "text-orange-600" },
              { title: "Contact Your Platform Support", icon: PhoneIcon, color: "text-yellow-600" },
              { title: "Notify the Authorities", icon: ShieldCheckIcon, color: "text-blue-600" },
              { title: "Engage a Blockchain Forensics Firm", icon: CogIcon, color: "text-purple-600" },
              { title: "Successful Recovery", icon: CheckCircleIcon, color: "text-green-600" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className={`h-10 w-10 ${step.color}`} />
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-2">
                  Step {index + 1}
                </div>
                <div className="text-sm text-gray-600">
                  {step.title}
                </div>
                {index < 5 && (
                  <ArrowRightIcon className="h-6 w-6 text-gray-400 mx-auto mt-4 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Case Studies & Success Stories
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              AMLBot has earned the trust of global law enforcement, offering exceptional case support
            </p>
            <div className="text-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <CheckCircleIcon className="h-4 w-4 mr-2" />
                5000+ Successful Investigations
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DeFi Protocol Exploit Recovery",
                description: "Recovered $2.3M from a sophisticated smart contract attack within 72 hours",
                metrics: "Recovery: $2.3M | Time: 72 hours"
              },
              {
                title: "Cross-Chain Bridge Hack",
                description: "Traced and recovered stolen funds across multiple blockchain networks",
                metrics: "Recovery: $1.8M | Chains: 5 different networks"
              },
              {
                title: "Exchange Security Breach",
                description: "Assisted in recovering customer funds from a major exchange security incident",
                metrics: "Recovery: $5.7M | Clients: 150+ affected users"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="text-sm font-medium text-blue-600">{caseStudy.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Started with Your Recovery
            </h2>
            <p className="text-xl text-gray-600">
              Provide your basic information and our team will contact you within 60 minutes.
            </p>
          </div>

          <form className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Brief Description of Your Case
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief description of what happened..."
              />
            </div>

            <div className="mt-8">
              <Link
                to="/contact-form"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Submit Basic Information
              </Link>
              <p className="text-sm text-gray-500 text-center mt-4">
                You'll be directed to our secure form for detailed case information.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful recovery cases. Our expert team is standing by.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/contact-form"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Report My Case
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Logo variant="footer" />
            <p className="text-gray-300 mb-6">
              The world's most trusted crypto recovery service
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
              <Link to="/contact-form" className="text-gray-300 hover:text-white">Report Case</Link>
              <a href="#" className="text-gray-300 hover:text-white">About</a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 mb-4 md:mb-0">
                <ClockIcon className="h-4 w-4 inline mr-2" />
                24/7 Support Available
              </div>
              <div className="text-gray-300 font-semibold">
                <CheckCircleIcon className="h-4 w-4 inline mr-2" />
                5000+ investigations completed
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
