export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to My Landing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Built with Next.js and Tailwind CSS
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">Fast</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Built on Next.js for optimal performance
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">Modern</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Styled with Tailwind CSS for beautiful UI
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">TypeScript</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Type-safe development experience
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
