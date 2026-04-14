interface TreeBlob {
  left: string
  top: string
  width: string
  height: string
  opacity?: number
}

interface TreeClusterProps {
  left: string
  bottom: string
  width: string
  height: string
  trunkWidth: string
  trunkHeight: string
  opacity: number
  canopy: TreeBlob[]
}

interface FenceSegment {
  left: string
  top: string
  width: string
  rotate: number
  posts: number
}

const TREE_CLUSTERS: TreeClusterProps[] = [
  {
    left: '18%',
    bottom: '30%',
    width: 'clamp(220px, 28vw, 380px)',
    height: 'clamp(220px, 44vh, 410px)',
    trunkWidth: 'clamp(12px, 0.95vw, 18px)',
    trunkHeight: '42%',
    opacity: 0.88,
    canopy: [
      { left: '10%', top: '4%', width: '34%', height: '30%', opacity: 0.88 },
      { left: '26%', top: '0%', width: '32%', height: '36%', opacity: 0.94 },
      { left: '46%', top: '8%', width: '28%', height: '28%', opacity: 0.84 },
      { left: '22%', top: '18%', width: '48%', height: '30%', opacity: 0.78 },
    ],
  },
  {
    left: '70%',
    bottom: '30%',
    width: 'clamp(150px, 18vw, 240px)',
    height: 'clamp(140px, 28vh, 220px)',
    trunkWidth: 'clamp(8px, 0.7vw, 12px)',
    trunkHeight: '38%',
    opacity: 0.46,
    canopy: [
      { left: '10%', top: '10%', width: '36%', height: '28%', opacity: 0.8 },
      { left: '34%', top: '6%', width: '34%', height: '32%', opacity: 0.76 },
      { left: '22%', top: '22%', width: '44%', height: '28%', opacity: 0.7 },
    ],
  },
  {
    left: '3%',
    bottom: '36%',
    width: 'clamp(48px, 8vw, 90px)',
    height: 'clamp(86px, 18vh, 140px)',
    trunkWidth: 'clamp(4px, 0.35vw, 8px)',
    trunkHeight: '44%',
    opacity: 0.18,
    canopy: [
      { left: '16%', top: '18%', width: '30%', height: '24%', opacity: 0.72 },
      { left: '38%', top: '10%', width: '26%', height: '26%', opacity: 0.68 },
    ],
  },
]

const FENCE_SEGMENTS: FenceSegment[] = [
  { left: '-3%', top: '12%', width: '20%', rotate: -2, posts: 4 },
  { left: '15%', top: '16%', width: '16%', rotate: 2, posts: 4 },
  { left: '31%', top: '18%', width: '18%', rotate: -4, posts: 4 },
  { left: '48%', top: '21%', width: '15%', rotate: 5, posts: 3 },
]

function TreeCluster({
  left,
  bottom,
  width,
  height,
  trunkWidth,
  trunkHeight,
  opacity,
  canopy,
}: TreeClusterProps) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left, bottom, width, height, opacity }}
    >
      <div className="absolute inset-x-[10%] top-[2%] bottom-[24%]">
        {canopy.map((blob, index) => (
          <div
            key={`${left}-${bottom}-${index}`}
            className="absolute"
            style={{
              left: blob.left,
              top: blob.top,
              width: blob.width,
              height: blob.height,
              opacity: blob.opacity ?? 1,
              borderRadius: '48% 52% 44% 56% / 42% 48% 52% 58%',
              background:
                'radial-gradient(circle at 50% 42%, rgba(122, 110, 98, 0.86) 0%, rgba(122, 110, 98, 0.62) 42%, rgba(46, 42, 37, 0.34) 72%, transparent 100%)',
              filter: 'blur(2px)',
            }}
          />
        ))}
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-[22px]"
        style={{
          width: trunkWidth,
          height: trunkHeight,
          background:
            'linear-gradient(180deg, rgba(122, 110, 98, 0.74) 0%, rgba(46, 42, 37, 0.82) 100%)',
          filter: 'blur(0.35px)',
        }}
      />

      <div
        className="absolute inset-x-[18%] bottom-[14%]"
        style={{
          height: '18%',
          background:
            'radial-gradient(ellipse at center, rgba(217, 206, 188, 0.26) 0%, rgba(217, 206, 188, 0.08) 42%, transparent 72%)',
          filter: 'blur(14px)',
        }}
      />
    </div>
  )
}

function FenceRow() {
  return (
    <div
      className="absolute left-[-2%] right-[-2%] pointer-events-none"
      style={{
        bottom: '32%',
        height: '56px',
        opacity: 0.56,
        filter: 'blur(0.3px)',
      }}
    >
      {FENCE_SEGMENTS.map((segment, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: segment.left,
            top: segment.top,
            width: segment.width,
            height: '32px',
            transform: `rotate(${segment.rotate}deg)`,
            transformOrigin: 'left center',
          }}
        >
          <span
            className="absolute inset-x-0 top-[10px]"
            style={{ height: '2px', background: 'rgba(122, 110, 98, 0.84)' }}
          />
          <span
            className="absolute inset-x-0 top-[22px]"
            style={{ height: '2px', background: 'rgba(122, 110, 98, 0.8)' }}
          />
          {Array.from({ length: segment.posts }).map((_, postIndex) => (
            <span
              key={postIndex}
              className="absolute top-[4px]"
              style={{
                left: `${(postIndex / Math.max(1, segment.posts - 1)) * 100}%`,
                width: '2px',
                height: '26px',
                background: 'rgba(122, 110, 98, 0.8)',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function BackgroundLayer() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(245, 240, 232, 1) 0%, rgba(245, 240, 232, 0.96) 24%, rgba(237, 229, 213, 0.98) 56%, rgba(217, 206, 188, 0.96) 100%)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 34% 30%, rgba(212, 98, 26, 0.22) 0%, rgba(212, 98, 26, 0.12) 12%, rgba(212, 98, 26, 0.06) 20%, transparent 38%)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.42) 0%, rgba(245, 240, 232, 0.24) 28%, rgba(237, 229, 213, 0.12) 56%, transparent 100%)',
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          left: '26%',
          top: '18%',
          width: 'clamp(120px, 15vw, 220px)',
          height: 'clamp(120px, 15vw, 220px)',
          background: 'rgba(245, 240, 232, 0.8)',
          filter: 'blur(14px)',
          mixBlendMode: 'screen',
        }}
      />

      <div
        className="absolute inset-x-[-4%]"
        style={{
          top: '34%',
          height: '28%',
          background:
            'linear-gradient(180deg, rgba(245, 240, 232, 0.34) 0%, rgba(245, 240, 232, 0.18) 34%, rgba(237, 229, 213, 0.12) 64%, transparent 100%)',
          filter: 'blur(38px)',
          opacity: 0.96,
        }}
      />

      <div
        className="absolute inset-x-0"
        style={{
          top: '48%',
          height: '18%',
          background:
            'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.36) 0%, rgba(245, 240, 232, 0.2) 38%, transparent 76%)',
          filter: 'blur(34px)',
        }}
      />

      <div
        className="absolute inset-x-[-5%] bottom-[-6%]"
        style={{
          height: '42%',
          background:
            'linear-gradient(180deg, rgba(217, 206, 188, 0.12) 0%, rgba(217, 206, 188, 0.48) 26%, rgba(122, 110, 98, 0.68) 100%)',
        }}
      />

      <div
        className="absolute inset-x-[-6%] bottom-[-4%]"
        style={{
          height: '24%',
          background:
            'radial-gradient(ellipse at center, rgba(217, 206, 188, 0.54) 0%, rgba(181, 168, 152, 0.26) 48%, transparent 78%)',
          filter: 'blur(22px)',
          opacity: 0.82,
        }}
      />

      <div
        className="absolute inset-x-[10%]"
        style={{
          top: '44%',
          height: '10%',
          background:
            'radial-gradient(circle at 18% 52%, rgba(122, 110, 98, 0.28) 0%, transparent 18%), radial-gradient(circle at 35% 50%, rgba(122, 110, 98, 0.18) 0%, transparent 12%), radial-gradient(circle at 58% 46%, rgba(122, 110, 98, 0.22) 0%, transparent 14%), radial-gradient(circle at 78% 58%, rgba(122, 110, 98, 0.16) 0%, transparent 12%)',
          filter: 'blur(10px)',
          opacity: 0.86,
        }}
      />

      {TREE_CLUSTERS.map((cluster) => (
        <TreeCluster key={`${cluster.left}-${cluster.bottom}`} {...cluster} />
      ))}

      <FenceRow />

      <div
        className="absolute inset-0 pointer-events-none film-grain"
        style={{ opacity: 0.92 }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 52%, rgba(46, 42, 37, 0.12) 100%)',
          mixBlendMode: 'multiply',
        }}
      />

    </div>
  )
}
