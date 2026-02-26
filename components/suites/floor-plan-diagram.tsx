export function FloorPlanDiagram() {
  return (
    <div className="w-full max-w-md">
      <div className="grid grid-cols-4 gap-1 mb-1">
        <div className="h-16 bg-amber-800" />
        <div className="h-16 bg-amber-700" />
        <div className="h-16 bg-muted" />
        <div className="h-16 bg-muted" />
      </div>
      <div className="grid grid-cols-4 gap-1 mb-1">
        <div className="h-16 bg-amber-700" />
        <div className="h-16 bg-muted" />
        <div className="h-16 bg-muted" />
        <div className="h-16 bg-muted" />
      </div>
      <div className="grid grid-cols-4 gap-1">
        <div className="h-16 bg-amber-800" />
        <div className="h-16 bg-amber-700" />
        <div className="h-16 bg-amber-800" />
        <div className="h-16 bg-muted" />
      </div>
    </div>
  )
}
