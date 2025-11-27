import { Link } from 'react-router-dom'
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import Logo from '../components/Logo'
import ScrollReveal from '../components/ScrollReveal'

export default function AboutPage() {
  const companyStats = [
    { number: "5000+", label: "Successful Investigations" },
    { number: "$65M+", label: "Total Recovered" },
    { number: "97%", label: "Success Rate" },
    { number: "24/7", label: "Operation Hours" }
  ]

  const teamValues = [
    {
      title: "Excellence",
      description: "We maintain the highest standards in blockchain forensics and investigation services, delivering accurate and actionable results.",
      icon: StarIcon
    },
    {
      title: "Integrity", 
      description: "Our ethical approach to investigations ensures transparency and accountability in every case we handle.",
      icon: ShieldCheckIcon
    },
    {
      title: "Innovation",
      description: "We continuously develop cutting-edge tools and methodologies to stay ahead of evolving cyber threats.",
      icon: ChartBarIcon
    },
    {
      title: "Collaboration",
      description: "We work closely with law enforcement, exchanges, and other stakeholders to maximize recovery success.",
      icon: UserGroupIcon
    }
  ]

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 27001:2022 Information Security", 
    "SOC 2 Type II Compliance",
    "Chainalysis Certified Investigators",
    "Elliptic Analytics Partners"
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
                <Link to="/analysis" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Analysis</Link>
                <Link to="/faq" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">FAQ</Link>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Blog</Link>
                <Link to="/about" className="text-blue-400 px-3 py-2 text-sm font-medium">About Us</Link>
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
              About AMLBot
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Leading cryptocurrency recovery and blockchain forensics platform trusted by law enforcement worldwide
            </p>
            
            <ScrollReveal delay={600}>
              <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
                  Start Your Case
                  <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link to="/analysis" className="bg-white bg-opacity-10 text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm inline-block">
                  Our Analysis
                </Link>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                AMLBot is dedicated to providing professional blockchain forensics and cryptocurrency recovery services. 
                We combine cutting-edge technology with expert investigation techniques to help victims of cryptocurrency 
                crimes recover their stolen assets and support law enforcement in combating digital financial crimes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified blockchain analysts and former law enforcement professionals work around the clock 
                to trace stolen cryptocurrency, gather forensic evidence, and facilitate successful recovery operations 
                across the globe.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and drive our commitment to excellence
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <ScrollReveal key={index} delay={200 + index * 100} className="bg-white rounded-lg p-8 text-center">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Company Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Safelement Limited (Hong Kong)</h3>
                  <p className="text-gray-600">Our primary operating entity registered in Hong Kong, providing comprehensive cryptocurrency recovery services across Asia-Pacific region.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe3 UAB (Lithuania)</h3>
                  <p className="text-gray-600">European subsidiary ensuring compliance with EU regulations and serving clients throughout the European Union.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Certifications & Compliance</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#0B1426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 text-shadow">Expert Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team combines decades of law enforcement experience with cutting-edge blockchain technology expertise
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={300} className="bg-white bg-opacity-10 rounded-lg p-8 text-center backdrop-blur">
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <ShieldCheckIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Former Law Enforcement</h3>
              <p className="text-gray-300">Experienced detectives and investigators from major law enforcement agencies worldwide.</p>
            </ScrollReveal>

            <ScrollReveal delay={500} className="bg-white bg-opacity-10 rounded-lg p-8 text-center backdrop-blur">
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <ChartBarIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Blockchain Experts</h3>
              <p className="text-gray-300">Certified blockchain analysts with deep technical knowledge of cryptocurrency networks.</p>
            </ScrollReveal>

            <ScrollReveal delay={700} className="bg-white bg-opacity-10 rounded-lg p-8 text-center backdrop-blur">
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <UserGroupIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Legal Professionals</h3>
              <p className="text-gray-300">Legal experts specializing in cryptocurrency law and regulatory compliance.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Work with Experts?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied clients who have recovered their cryptocurrency with our help
            </p>
            <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
              Get Started Today
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