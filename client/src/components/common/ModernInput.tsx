import { forwardRef, InputHTMLAttributes } from 'react'

interface ModernInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: string
    variant?: 'default' | 'glass'
}

const ModernInput = forwardRef<HTMLInputElement, ModernInputProps>(({
    label,
    error,
    icon,
    variant = 'default',
    className = '',
    ...props
}, ref) => {
    const baseClasses = 'w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none backdrop-blur-sm text-white'
    
    const variantClasses = {
        default: 'bg-darkLighter/80 border-primary/30 hover:border-primary/50 focus:border-primary/80 focus:bg-darkLighter/90',
        glass: 'bg-darkLighter/60 border-primary/30 hover:border-primary/60 focus:border-primary/80 focus:bg-darkLighter/80 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)]'
    }

    const placeholderClasses = 'placeholder:text-gray-300/80'

    return (
        <div className="relative group w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    {label}
                </label>
            )}
            
            <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <input
                    ref={ref}
                    className={`
                        ${baseClasses}
                        ${variantClasses[variant]}
                        ${placeholderClasses}
                        ${className}
                        relative z-10
                    `}
                    {...props}
                    placeholder={icon ? `${icon} ${props.placeholder}` : props.placeholder}
                />
            </div>
            
            {error && (
                <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
        </div>
    )
})

ModernInput.displayName = 'ModernInput'

export default ModernInput