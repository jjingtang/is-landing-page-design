interface Props {
  x: number
  y: number
  pressing: boolean
}

export default function WipeCursor({ x, y, pressing }: Props) {
  const size = pressing ? 92 : 76

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        borderRadius: '50%',
        border: '1px solid rgba(217, 206, 188, 0.72)',
        boxShadow: pressing
          ? 'inset 0 0 0 1px rgba(245, 240, 232, 0.44), 0 4px 16px rgba(46, 42, 37, 0.08)'
          : '0 4px 16px rgba(46, 42, 37, 0.08)',
        background: pressing
          ? 'rgba(245, 240, 232, 0.16)'
          : 'rgba(245, 240, 232, 0.08)',
        transition:
          'width 0.15s ease, height 0.15s ease, margin 0.15s ease, background 0.15s ease',
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
      }}
    />
  )
}
