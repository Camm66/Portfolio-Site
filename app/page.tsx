export default function Home() {
  return (
    <main className="min-h-screen bg-green-950 flex flex-col items-center justify-center text-white px-4">
      {/* Kermit ASCII */}
      <pre className="text-green-400 text-xs sm:text-sm leading-tight font-mono mb-8 select-none">
{`
        (o)   (o)
         \\ _ /
      .-'     '-.
     /  Kermit   \\
    |    the      |
    |    Frog     |
     \\           /
      '-._____.-'
        |     |
       /|     |\\
      / |     | \\
`}
      </pre>

      <h1 className="text-4xl sm:text-6xl font-bold text-green-400 mb-4 text-center">
        Under Construction
      </h1>
      <p className="text-green-300 text-lg sm:text-xl text-center max-w-md mb-2">
        It&apos;s not easy being green... or building a portfolio.
      </p>
      <p className="text-green-500 text-sm text-center">
        Cameron Morales &mdash; something great is coming.
      </p>
    </main>
  );
}
