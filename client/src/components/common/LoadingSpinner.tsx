interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary' | 'accent'
    className?: string
}

const LoadingSpinner = ({ 
    size = 'md', 
    color = 'primary', 
    className = '' 
}: LoadingSpinnerProps) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    }

    const colorClasses = {
        primary: 'border-primary/30 border-t-primary',
        secondary: 'border-secondary/30 border-t-secondary',
        accent: 'border-accent/30 border-t-accent'
    }

    return (
        <div className={`inline-block ${sizeClasses[size]} ${className}`}>
            <div 
                className={`
                    ${sizeClasses[size]} 
                    ${colorClasses[color]} 
                    border-2 border-solid rounded-full animate-spin
                `}
            />
        </div>
    )
}

export default LoadingSpinner