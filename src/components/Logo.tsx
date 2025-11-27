import { Link } from 'react-router-dom'

interface LogoProps {
  variant?: 'default' | 'footer'
}

export default function Logo({ variant = 'default' }: LogoProps) {
  const isFooter = variant === 'footer'
  
  return (
    <Link 
      to="/" 
      className={`
        group flex items-center transition-all duration-300 hover:scale-105
        ${isFooter ? 'justify-center' : ''}
      `}
    >
      {/* Logo Container with Modern Styling */}
      <div 
        className={`
          relative flex items-center p-2 rounded-2xl transition-all duration-300
          ${isFooter 
            ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
            : 'bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200/50 shadow-lg shadow-blue-500/10'
          }
          group-hover:shadow-xl group-hover:shadow-blue-500/20
          group-hover:${isFooter ? 'bg-white/15' : 'from-blue-100/80 to-indigo-200/80'}
        `}
      >
        {/* Logo Image */}
        <img 
          src="/logo.png" 
          alt="AMLBot Logo" 
          className="h-6 w-6 object-contain transition-all duration-300 group-hover:scale-110" 
        />
        
        {/* Subtle glow effect */}
        <div 
          className={`
            absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300
            ${isFooter 
              ? 'bg-gradient-to-br from-blue-400 to-purple-500' 
              : 'bg-gradient-to-br from-blue-400/80 to-indigo-500/80'
            }
          `}
        />
      </div>
      
      {/* Logo Text */}
      <span 
        className={`
          ml-3 text-2xl font-bold transition-all duration-300
          ${isFooter 
            ? 'text-white group-hover:text-blue-300' 
            : 'text-blue-600 group-hover:text-blue-700'
          }
        `}
      >
        AMLBot
      </span>
      
      {/* Modern accent dot */}
      <div 
        className={`
          ml-2 w-2 h-2 rounded-full transition-all duration-300
          ${isFooter
            ? 'bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300'
            : 'bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:from-blue-600 group-hover:to-indigo-600'
          }
          group-hover:scale-125
        `}
      />
    </Link>
  )
}
