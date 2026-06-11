export default function Marquee({ items }: { items: string[] }) {
  const row = (ariaHidden: boolean, key: string) => (
    <div key={key} aria-hidden={ariaHidden} className="marquee-row flex items-center">
      {items.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-8 pr-8 font-display text-sm sm:text-base font-medium uppercase tracking-[0.3em] text-beech-deep whitespace-nowrap"
        >
          <span className="text-gold text-xs">◆</span>
          {item}
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee border-y border-beech/10 bg-ink-deep py-5">
      {row(false, 'a')}
      {row(true, 'b')}
    </div>
  )
}
