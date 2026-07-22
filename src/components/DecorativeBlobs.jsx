export function DecorativeBlobs({ compact = false }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className={`absolute -left-16 ${compact ? '-top-20' : 'top-16'} h-48 w-48 rounded-full bg-[#ffd9d2] blur-2xl opacity-70 animate-drift`} />
      <span className="absolute -right-16 top-1/4 h-56 w-56 rounded-full bg-[#e9dcff] blur-2xl opacity-80 animate-[drift_15s_ease-in-out_1s_infinite]" />
      <span className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[#fff0b5] blur-2xl opacity-75 animate-[drift_13s_ease-in-out_2s_infinite]" />
    </div>
  )
}
