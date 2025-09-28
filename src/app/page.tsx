
export default function Home() {
  return (
    <main className="wrap">
      <div className="hero">
        <svg
          className="mark"
          viewBox="0 0 200 200"
          role="img"
          aria-label="BlackGrid wireframe cube"
        >
          <g fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            <path className="hidden-edge" d="M80 60 L160 60 L160 140 L80 140 Z" />
            <path className="edge" d="M60 90 L140 90 L140 170 L60 170 Z" />
            <path className="hidden-edge" d="M60 90 L80 60" />
            <path className="edge" d="M140 90 L160 60" />
            <path className="edge" d="M140 170 L160 140" />
            <path className="edge" d="M60 170 L80 140" />
            <g className="nodes">
              <circle cx="80" cy="60" r="2" />
              <circle cx="160" cy="60" r="2" />
              <circle cx="160" cy="140" r="2" />
              <circle cx="80" cy="140" r="2" />
              <circle cx="60" cy="90" r="3" />
              <circle cx="140" cy="90" r="3" />
              <circle cx="140" cy="170" r="3" />
              <circle cx="60" cy="170" r="3" />
            </g>
          </g>
        </svg>
        <h1 className="title">BLACKGRID</h1>
        <p className="sub">COMING SOON</p>
      </div>
    </main>
  );
}
