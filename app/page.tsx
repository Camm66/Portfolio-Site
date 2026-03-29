export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-950 via-green-900 to-emerald-950 flex flex-col items-center justify-center text-white px-4 py-12">

      {/* Kermit Image */}
      <div className="mb-8 drop-shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Kermit_the_Frog.jpg/330px-Kermit_the_Frog.jpg"
          alt="Kermit the Frog"
          width={200}
          height={220}
          className="rounded-xl"
          style={{ objectFit: "contain" }}
        />
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
