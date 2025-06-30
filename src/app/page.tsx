import NFTSearchBar from '@/components/NFTSearchBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Sei NFT Explorer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Track the complete provenance and ownership history of any NFT on the Sei blockchain
          </p>
        </div>

        {/* Search Bar */}
        <NFTSearchBar />

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Complete Provenance</h3>
            <p className="text-gray-600 dark:text-gray-300">Track every transfer, sale, and ownership change</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Visual Timeline</h3>
            <p className="text-gray-600 dark:text-gray-300">Interactive timeline showing NFT journey</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Export Reports</h3>
            <p className="text-gray-600 dark:text-gray-300">Download provenance data as PDF or JSON</p>
          </div>
        </div>

        {/* Example Searches */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Try These Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Basic NFT */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Basic NFT</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>Contract: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">sei1xyz...</code></p>
                <p>Token ID: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">123</code></p>
                <p className="text-xs">3 transfers, moderate value</p>
              </div>
            </div>

            {/* Rare NFT */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Rare NFT</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>Contract: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">sei1rare...</code></p>
                <p>Token ID: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">777</code></p>
                <p className="text-xs">4 transfers, high value (5K SEI)</p>
              </div>
            </div>

            {/* Gaming NFT */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Gaming NFT</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>Contract: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">sei1gaming...</code></p>
                <p>Token ID: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">456</code></p>
                <p className="text-xs">5 transfers, frequent trading</p>
              </div>
            </div>

            {/* New NFT */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">New NFT</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>Contract: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">sei1new...</code></p>
                <p>Token ID: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">1</code></p>
                <p className="text-xs">Just minted, no transfers yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
