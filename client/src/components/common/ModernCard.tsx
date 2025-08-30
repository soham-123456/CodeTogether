import { ReactNode } from 'react'

interface ModernCardProps {
    children: ReactNode
    className?: string
    variant?: 'default' | 'glass' | 'gradient'
    hover?: boolean
    padding?: 'sm' | 'md' | 'lg'
}

const ModernCard = ({
    children,
    className = '',
    variant = 'default',
    hover = false,
    padding = 'md'
}: ModernCardProps) => {
    const baseClasses = 'rounded-2xl transition-all duration-300'
    
    const paddingClasses = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    }

    const variantClasses = {
        default: 'bg-darkLighter/60 border border-primary/20',
        glass: 'bg-gradient-to-br from-darkLighter/40 via-darkHover/30 to-dark/40 backdrop-blur-xl border border-primary/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
        gradient: 'bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/30'
    }

    const hoverClasses = hover ? 'hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(168,85,247,0.2)] hover:border-primary/40' : ''

    return (
        <div className={`
            ${baseClasses}
            ${paddingClasses[padding]}
            ${variantClasses[variant]}
            ${hoverClasses}
            ${className}
        `}>
            {children}
        </div>
    )
}

export default ModernCard