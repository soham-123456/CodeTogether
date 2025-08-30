import { ReactNode } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface ModernButtonProps {
    children: ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    loading?: boolean
    className?: string
    icon?: ReactNode
}

const ModernButton = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    className = '',
    icon
}: ModernButtonProps) => {
    const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 overflow-hidden group'
    
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm gap-2',
        md: 'px-6 py-3 text-base gap-3',
        lg: 'px-8 py-4 text-lg gap-4'
    }

    const variantClasses = {
        primary: 'bg-gradient-to-r from-primary via-primaryHover to-accent text-white shadow-[0_8px_32px_rgba(168,85,247,0.3)] hover:shadow-[0_12px_40px_rgba(168,85,247,0.4)] hover:from-primaryHover hover:via-primary hover:to-accent',
        secondary: 'bg-gradient-to-r from-secondary to-pink-600 text-white shadow-[0_8px_32px_rgba(236,72,153,0.3)] hover:shadow-[0_12px_40px_rgba(236,72,153,0.4)]',
        outline: 'border-2 border-primary/50 text-primary bg-transparent hover:bg-primary/10 hover:border-primary',
        ghost: 'text-gray-300 hover:text-white hover:bg-primary/10'
    }

    const disabledClasses = 'opacity-50 cursor-not-allowed hover:scale-100'

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
                ${baseClasses}
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                ${disabled || loading ? disabledClasses : ''}
                ${className}
            `}
        >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 group-hover:animate-shimmer"></div>
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {loading ? (
                    <LoadingSpinner size="sm" color="primary" />
                ) : icon ? (
                    <span className="flex items-center">{icon}</span>
                ) : null}
                {children}
            </span>
        </button>
    )
}

export default ModernButton