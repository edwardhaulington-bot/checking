import { Link } from 'react-router-dom'
import { 
  CalendarIcon,
  UserIcon,
  ArrowRightIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import Logo from '../components/Logo'
import ScrollReveal from '../components/ScrollReveal'

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Rise of Cryptocurrency Scams in 2024: What You Need to Know",
      excerpt: "An in-depth analysis of the latest cryptocurrency scam trends and how to protect yourself from emerging threats.",
      date: "2024-11-01",
      author: "AMLBot Research Team",
      category: "Security",
      readTime: "8 min read"
    },
    {
      title: "How Blockchain Analysis Helps Law Enforcement Combat Crypto Crime",
      excerpt: "Exploring the technical methods and tools that law enforcement agencies use to trace cryptocurrency transactions.",
      date: "2024-10-28",
      author: "Dr. Sarah Chen",
      category: "Investigation",
      readTime: "12 min read"
    },
    {
      title: "Case Study: Recovery of $2.1M from Sophisticated Phishing Attack",
      excerpt: "A detailed look at how our team successfully traced and recovered funds from a complex multi-stage phishing operation.",
      date: "2024-10-25",
      author: "Michael Rodriguez",
      category: "Case Study",
      readTime: "10 min read"
    },
    {
      title: "Understanding Cross-Chain Laundering Techniques",
      excerpt: "How criminals move cryptocurrency across multiple blockchain networks to obscure the trail and evade detection.",
      date: "2024-10-22",
      author: "Alex Thompson",
      category: "Analysis",
      readTime: "15 min read"
    },
    {
      title: "Regulatory Compliance for Cryptocurrency Exchanges",
      excerpt: "Key compliance requirements and best practices for cryptocurrency exchanges operating in regulated markets.",
      date: "2024-10-18",
      author: "Legal Team",
      category: "Compliance",
      readTime: "7 min read"
    },
    {
      title: "The Future of Blockchain Forensics Technology",
      excerpt: "Emerging technologies and methodologies that will shape the future of cryptocurrency investigation and recovery.",
      date: "2024-10-15",
      author: "Tech Innovation Lab",
      category: "Technology",
      readTime: "9 min read"
    }
  ]

  const categories = ["All", "Security", "Investigation", "Case Study", "Analysis", "Compliance", "Technology"]

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
                <Link to="/blog" className="text-blue-400 px-3 py-2 text-sm font-medium">Blog</Link>
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
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Latest news, analysis, and insights from the world of cryptocurrency security and recovery
            </p>
            
            <ScrollReveal delay={600}>
              <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
                Need Expert Help?
                <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
              </Link>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={index} delay={300 + index * 100} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <TagIcon className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                      Read More
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights and security updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Need Professional Help?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Don't let cryptocurrency theft go unpunished. Our experts are here to help.
            </p>
            <Link to="/contact-form" className="btn-premium text-lg font-semibold inline-block">
              Start Your Recovery
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