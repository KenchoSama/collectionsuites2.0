interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 40, className = "" }: LogoProps) {
  const innerInset = Math.max(4, size * 0.2)
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div
        className="border-2 border-amber-700 rotate-45 relative"
        style={{ width: size, height: size }}
      >
        <div
          className="absolute border border-amber-700"
          style={{
            inset: innerInset,
          }}
        />
      </div>
    </div>
  )
}
