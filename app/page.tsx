export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-950 via-green-900 to-emerald-950 flex flex-col items-center justify-center text-white px-4 py-12">

      {/* Kermit SVG */}
      <div className="mb-8 drop-shadow-2xl">
        <svg
          width="200"
          height="220"
          viewBox="0 0 200 220"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Body */}
          <ellipse cx="100" cy="180" rx="45" ry="35" fill="#3a7d44" />

          {/* Neck */}
          <rect x="88" y="140" width="24" height="20" rx="6" fill="#4a9e58" />

          {/* Head */}
          <ellipse cx="100" cy="115" rx="52" ry="45" fill="#4a9e58" />

          {/* Eyes - outer white */}
          <ellipse cx="78" cy="95" rx="18" ry="20" fill="white" />
          <ellipse cx="122" cy="95" rx="18" ry="20" fill="white" />

          {/* Eyes - iris */}
          <ellipse cx="80" cy="96" rx="12" ry="13" fill="#8BC34A" />
          <ellipse cx="120" cy="96" rx="12" ry="13" fill="#8BC34A" />

          {/* Eyes - pupil */}
          <ellipse cx="81" cy="97" rx="7" ry="8" fill="#1a1a1a" />
          <ellipse cx="121" cy="97" rx="7" ry="8" fill="#1a1a1a" />

          {/* Eyes - highlight */}
          <ellipse cx="84" cy="93" rx="2.5" ry="2.5" fill="white" />
          <ellipse cx="124" cy="93" rx="2.5" ry="2.5" fill="white" />

          {/* Eyebrow ridges */}
          <ellipse cx="78" cy="78" rx="20" ry="6" fill="#3a7d44" />
          <ellipse cx="122" cy="78" rx="20" ry="6" fill="#3a7d44" />

          {/* Mouth area - wide frog mouth */}
          <ellipse cx="100" cy="138" rx="38" ry="12" fill="#2d6e38" />

          {/* Mouth smile */}
          <path
            d="M 65 135 Q 100 155 135 135"
            stroke="#1a4a22"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* Nostrils */}
          <ellipse cx="93" cy="125" rx="4" ry="3" fill="#3a7d44" />
          <ellipse cx="107" cy="125" rx="4" ry="3" fill="#3a7d44" />

          {/* Arms */}
          <path d="M 58 170 Q 30 160 20 175" stroke="#3a7d44" strokeWidth="14" fill="none" strokeLinecap="round" />
          <path d="M 142 170 Q 170 160 180 175" stroke="#3a7d44" strokeWidth="14" fill="none" strokeLinecap="round" />

          {/* Hands */}
          <circle cx="18" cy="178" r="9" fill="#4a9e58" />
          <circle cx="182" cy="178" r="9" fill="#4a9e58" />

          {/* Legs */}
          <path d="M 80 210 Q 70 220 55 215" stroke="#3a7d44" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M 120 210 Q 130 220 145 215" stroke="#3a7d44" strokeWidth="12" fill="none" strokeLinecap="round" />

          {/* Collar/neck frill */}
          <path
            d="M 75 148 Q 100 158 125 148"
            stroke="#2d6e38"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Badge */}
      <div className="bg-green-800 bg-opacity-60 border border-green-500 rounded-full px-4 py-1 text-green-300 text-sm font-medium mb-6 tracking-widest uppercase">
        🚧 Under Construction
      </div>

      {/* Headline */}
      <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400 mb-4 text-center leading-tight">
        Cameron Morales
      </h1>

      {/* Subtext */}
      <p className="text-green-300 text-lg sm:text-xl text-center max-w-md mb-3">
        Something great is coming. Even Kermit is excited.
      </p>
      <p className="text-green-600 text-sm text-center italic mb-8">
        &ldquo;It&apos;s not easy being green... but it&apos;s worth it.&rdquo;
      </p>

      <a
        href="/resume"
        className="mt-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-colors duration-200 text-sm tracking-wide"
      >
        View Resume →
      </a>
    </main>
  );
}
