import { Link } from 'react-router-dom'
import {
  ShieldCheckIcon,
  UserGroupIcon,
  CogIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  PhoneIcon,
  LockClosedIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import Logo from '../components/Logo'

export default function ServicesPage() {
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
                <Link to="/services" className="text-blue-600 px-3 py-2 text-sm font-medium">Services</Link>
                <Link to="/contact-form" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Report Case</Link>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</a>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Log In</a>
              <Link to="/contact-form" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Begin Recovery
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
              Why We're the Most Trusted{' '}
              <span className="text-blue-600">AML Recovery Service</span>{' '}
              Worldwide
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Leading the industry in cryptocurrency recovery with unmatched expertise, cutting-edge technology, 
              and proven results that law enforcement agencies worldwide depend on.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">5000+</div>
                <div className="text-gray-600">Successful Recoveries</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Exchange Partnerships</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Monitoring by Certified Analysts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unmatched Industry Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Certified, trusted, and relied upon by institutions worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <LockClosedIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ISO 27001 Certified Security</h3>
              <p className="text-gray-600">
                Our security protocols meet international standards for information security management, 
                ensuring your data is protected with enterprise-grade security.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <UserGroupIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified AML Analysts</h3>
              <p className="text-gray-600">
                Our team consists of certified Anti-Money Laundering specialists with advanced blockchain 
                forensics training and international compliance expertise.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Compliance</h3>
              <p className="text-gray-600">
                Full compliance with international AML/KYC regulations, working closely with law enforcement 
                and regulatory authorities across multiple jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AMLBot Tracer: Proprietary Technology
            </h2>
            <p className="text-xl text-gray-600">
              Our cutting-edge blockchain analysis technology provides unmatched precision in asset recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <CogIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Analysis</h3>
              <p className="text-gray-600 text-sm">
                Instant blockchain transaction monitoring and suspicious activity detection across all major networks.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <GlobeAltIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Chain Support</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive tracking across Bitcoin, Ethereum, Litecoin, and 5000+ other blockchain networks.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <DocumentTextIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Forensic Reports</h3>
              <p className="text-gray-600 text-sm">
                Detailed forensic analysis reports suitable for legal proceedings and regulatory compliance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <ShieldCheckIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exchange Integration</h3>
              <p className="text-gray-600 text-sm">
                Direct API connections with major exchanges for rapid asset freezing and recovery coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Law Enforcement Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by police departments and regulatory agencies worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { country: "India", flag: "🇮🇳", partners: ["Whitefield Cyber Cell", "Gujarat Police"] },
              { country: "Thailand", flag: "🇹🇭", partners: ["Pathum Thani Police Station"] },
              { country: "Georgia", flag: "🇬🇪", partners: ["Georgian Ministry of Finance"] },
              { country: "Czech Republic", flag: "🇨🇿", partners: ["Police of the Czech Republic"] },
              { country: "Kazakhstan", flag: "🇰🇿", partners: ["Cyber Police Republic Kazakhstan"] },
              { country: "Global", flag: "🌍", partners: ["50+ Exchange Partnerships"] }
            ].map((region, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{region.flag}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{region.country}</h3>
                {region.partners.map((partner, i) => (
                  <div key={i} className="text-sm text-gray-600 mb-1">{partner}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Track Record
            </h2>
            <p className="text-xl text-blue-100">
              Our success metrics speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">97%</div>
              <div className="text-blue-100">Success Rate</div>
              <div className="text-sm text-blue-200 mt-2">Cases initiated within 30 days</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">72hrs</div>
              <div className="text-blue-100">Average Response Time</div>
              <div className="text-sm text-blue-200 mt-2">Initial investigation begins</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">$65M+</div>
              <div className="text-blue-100">Total Recovered</div>
              <div className="text-sm text-blue-200 mt-2">Across all cases</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Monitoring</div>
              <div className="text-sm text-blue-200 mt-2">Continuous asset tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Recovery Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to maximizing recovery chances
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Initial Assessment",
                description: "Comprehensive case evaluation and blockchain analysis planning",
                icon: DocumentTextIcon
              },
              {
                title: "Asset Tracing",
                description: "Advanced transaction tracking across multiple blockchain networks",
                icon: CogIcon
              },
              {
                title: "Exchange Coordination",
                description: "Working with exchanges to freeze and recover stolen assets",
                icon: PhoneIcon
              },
              {
                title: "Legal Support",
                description: "Providing detailed reports and evidence for legal proceedings",
                icon: ShieldCheckIcon
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Recover Your Assets?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful cases. Our world-class team is ready to help you recover your cryptocurrency.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/contact-form"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Submit Your Case
            </Link>
            <Link
              to="/contact-form"
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors inline-block"
            >
              Contact Experts
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Free initial consultation • No upfront fees • 24/7 support
          </p>
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
