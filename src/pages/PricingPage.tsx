import { Link } from 'react-router-dom'
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import Logo from '../components/Logo'
import ScrollReveal from '../components/ScrollReveal'

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Emergency Response",
      price: "$2,500",
      period: "Initial Assessment",
      description: "Rapid response for urgent cases requiring immediate action",
      features: [
        "24/7 emergency response",
        "Initial blockchain analysis",
        "Case assessment report",
        "Law enforcement coordination",
        "Basic fund tracing",
        "1-2 business day turnaround"
      ],
      popular: false,
      buttonText: "Start Emergency Case",
      buttonLink: "/contact-form"
    },
    {
      name: "Standard Recovery",
      price: "15%",
      period: "of recovered funds",
      description: "Comprehensive investigation and recovery service",
      features: [
        "Full blockchain forensics investigation",
        "Advanced fund tracing across multiple chains",
        "Wallet flagging and monitoring",
        "Exchange coordination",
        "Legal report preparation",
        "Law enforcement liaison",
        "Ongoing case management",
        "Weekly progress updates"
      ],
      popular: true,
      buttonText: "Start Standard Recovery",
      buttonLink: "/contact-form"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Quote",
      description: "Dedicated service for high-value cases and businesses",
      features: [
        "Dedicated investigation team",
        "Priority case handling",
        "Advanced analytics and tools",
        "Custom reporting dashboards",
        "Direct law enforcement partnerships",
        "Legal consultation services",
        "24/7 dedicated support",
        "Quarterly security assessments"
      ],
      popular: false,
      buttonText: "Contact Enterprise Team",
      buttonLink: "/contact-form"
    }
  ]

  const additionalServices = [
    {
      name: "Consultation Call",
      price: "$500",
      description: "1-hour expert consultation to assess your case",
      features: [
        "Expert case evaluation",
        "Recovery probability assessment", 
        "Strategy recommendations",
        "Next steps guidance"
      ]
    },
    {
      name: "Blockchain Analysis Report",
      price: "$1,500",
      description: "Detailed forensic analysis of blockchain transactions",
      features: [
        "Comprehensive transaction mapping",
        "Fund flow analysis",
        "Risk assessment",
        "Legal-grade documentation"
      ]
    },
    {
      name: "Legal Package",
      price: "$3,000",
      description: "Complete legal support and documentation",
      features: [
        "Court-ready forensic reports",
        "Legal consultation",
        "Expert witness testimony",
        "Law enforcement liaison"
      ]
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
                <Link to="/pricing" className="text-blue-400 px-3 py-2 text-sm font-medium">Pricing</Link>
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
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Fair, transparent pricing for professional cryptocurrency recovery services
            </p>
            
            <ScrollReveal delay={600}>
              <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
                Get Free Case Assessment
                <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
              </Link>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recovery Service Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the service level that matches your needs and case complexity
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <ScrollReveal key={index} delay={300 + index * 100} className={`relative bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={plan.buttonLink}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center inline-block transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your recovery case
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ScrollReveal key={index} delay={400 + index * 100} className="bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact-form"
                  className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-semibold text-center inline-block hover:bg-gray-200 transition-colors"
                >
                  Request Service
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Our Pricing Works</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={300} className="text-center">
              <ClockIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Recovery, No Fee</h3>
              <p className="text-gray-600">
                For most cases, we only charge if we successfully recover your funds. This aligns our interests with yours.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500} className="text-center">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent Process</h3>
              <p className="text-gray-600">
                You know exactly what you're paying for with detailed breakdowns and no hidden fees.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={700} className="text-center">
              <UserGroupIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our pricing reflects the expertise and advanced tools required for successful crypto recovery.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Questions</h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={300} className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When do I need to pay?</h3>
              <p className="text-gray-600">For most recovery cases, payment is only required upon successful recovery. Emergency services require upfront payment due to the immediate nature of the work.</p>
            </ScrollReveal>

            <ScrollReveal delay={500} className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if no funds are recovered?</h3>
              <p className="text-gray-600">If we cannot recover any funds in standard recovery cases, you owe nothing. We only succeed when you succeed.</p>
            </ScrollReveal>

            <ScrollReveal delay={700} className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are there any hidden fees?</h3>
              <p className="text-gray-600">No hidden fees. All costs are clearly outlined before we begin work. Any additional services require your approval.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Start Your Recovery?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a free case assessment and transparent pricing for your situation
            </p>
            <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
              Get Free Assessment
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