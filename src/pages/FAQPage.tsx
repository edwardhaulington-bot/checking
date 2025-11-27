import { Link } from 'react-router-dom'
import { useState } from 'react'
import { 
  ChevronDownIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'
import Logo from '../components/Logo'
import ScrollReveal from '../components/ScrollReveal'

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqItems = [
    {
      question: "How quickly can you start investigating my case?",
      answer: "We can begin your investigation immediately after your case submission. Our team operates 24/7 and will reach out to you within 2 hours to discuss your specific situation and develop a recovery strategy. Time is critical in crypto recovery cases, so we prioritize rapid response."
    },
    {
      question: "What are your success rates for crypto recovery?",
      answer: "We maintain an 97% success rate across all investigation cases. Our success depends on various factors including the time since theft, the sophistication of the attack, the amount stolen, and how quickly we can trace the funds through blockchain networks. Early intervention significantly improves recovery chances."
    },
    {
      question: "Do you work with law enforcement agencies?",
      answer: "Yes, we have official partnerships with law enforcement agencies globally, including the FBI, Europol, and Interpol. We regularly collaborate on complex cases and provide detailed forensic reports for legal proceedings. Our investigators are certified and recognized by major law enforcement organizations."
    },
    {
      question: "What types of cryptocurrency crimes can you investigate?",
      answer: "We investigate all types of cryptocurrency crimes including phishing attacks, fake airdrops, malicious smart contracts, exchange breaches, cross-chain laundering, NFT & DeFi scams, OTC fraud, wrench attacks, device compromise, social engineering attacks, and sophisticated APT group operations."
    },
    {
      question: "How much do your recovery services cost?",
      answer: "Our fees are based on the complexity and value of each case. We offer transparent pricing with no upfront costs in most cases. Fees are typically a percentage of recovered funds, aligning our interests with your success. We provide detailed cost estimates during the initial consultation."
    },
    {
      question: "Is my case information kept confidential?",
      answer: "Absolutely. We maintain strict confidentiality and follow industry best practices for data protection. We are ISO 27001:2022 certified and comply with international privacy regulations including GDPR. Your case information is encrypted and accessible only to authorized personnel working on your case."
    },
    {
      question: "What information do you need to start an investigation?",
      answer: "To begin an investigation, we need: transaction IDs or wallet addresses involved, details of how the theft occurred, timeline of events, any communications with scammers, screenshots of relevant information, and the amount and type of cryptocurrency involved. The more details you provide, the better we can trace your funds."
    },
    {
      question: "Can you recover funds from any cryptocurrency?",
      answer: "We specialize in major cryptocurrencies including Bitcoin, Ethereum, and all major altcoins. Our tools support tracing on over 100 blockchain networks. However, recovery becomes more challenging with privacy-focused cryptocurrencies and older transactions. We assess each case individually to determine the best approach."
    },
    {
      question: "How long does the recovery process take?",
      answer: "Recovery timelines vary significantly based on case complexity. Simple cases may be resolved within days, while complex investigations can take weeks or months. We provide regular updates throughout the process and work as efficiently as possible to maximize your recovery chances."
    },
    {
      question: "Do you guarantee fund recovery?",
      answer: "While we cannot guarantee 100% recovery due to the nature of cryptocurrency transactions, our 97% success rate demonstrates our expertise. We only take cases where we see a reasonable chance of success. If we cannot recover funds, you owe nothing in most cases."
    },
    {
      question: "What happens if the thief moves funds through mixing services?",
      answer: "Our advanced blockchain analysis tools can often trace funds even through mixing services and privacy coins. We use sophisticated algorithms and work with law enforcement to follow the money trail. While it makes investigation more complex, it doesn't necessarily prevent recovery."
    },
    {
      question: "Can you help if I lost access to my wallet?",
      answer: "Yes, we can help with wallet access issues. We provide wallet reconstruction services, private key recovery assistance, and can help with various wallet types including hardware wallets, software wallets, and exchange accounts. Our technical experts explore all possible recovery methods."
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
                <Link to="/analysis" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Analysis</Link>
                <Link to="/faq" className="text-blue-400 px-3 py-2 text-sm font-medium">FAQ</Link>
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get answers to common questions about our cryptocurrency recovery services
            </p>
            
            <ScrollReveal delay={600}>
              <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
                Still Have Questions? Contact Us
                <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
              </Link>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to the most frequently asked questions about our services
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <ScrollReveal key={index} delay={200 + index * 50} className="border border-gray-200 rounded-lg">
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
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our expert team is available 24/7 to assist you with any questions
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={300} className="bg-white rounded-lg p-8 text-center">
              <PhoneIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our recovery specialists</p>
              <p className="text-blue-600 font-semibold">+1 (555) 123-4567</p>
            </ScrollReveal>

            <ScrollReveal delay={500} className="bg-white rounded-lg p-8 text-center">
              <EnvelopeIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions and we'll respond quickly</p>
              <p className="text-blue-600 font-semibold">support@amlbot.com</p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={700} className="text-center mt-12">
            <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
              Start Your Recovery Case
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