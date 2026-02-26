export function CheckeredFlag() {
  return (
    <section
      className="h-32"
      aria-hidden="true"
      style={{
        backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 20px, #fff 20px, #fff 40px), repeating-linear-gradient(90deg, #000 0px, #000 20px, #fff 20px, #fff 40px)`,
        backgroundSize: "40px 40px",
        backgroundBlendMode: "difference",
      }}
    />
  )
}
