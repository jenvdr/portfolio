export default function Prose({ children, className }) {
    return (
      <div className={`prose prose-base lg:prose-lg ${className}`}>
            {children}
      </div>
    )
}
