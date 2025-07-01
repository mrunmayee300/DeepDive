"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import { fetchNFTProvenance } from "@/services/SeiMCPService";
import Link from "next/link";

interface ProvenanceEvent {
  event: string;
  from: string | null;
  to: string;
  timestamp: string;
  price: string | null;
  marketplace: string | null;
  txHash: string;
}

interface CurrentOwner {
  address: string;
  balance: string;
  otherNFTs: { contract: string; tokenId: string }[];
}

interface NFTProvenanceData {
  contract: string;
  tokenId: string;
  provenance: ProvenanceEvent[];
  currentOwner: CurrentOwner;
}

interface NFTDetailsPageProps {
  params: Promise<{
    contract: string;
    tokenId: string;
  }>;
}

export default function NFTDetailsPage({ params }: NFTDetailsPageProps) {
  const { contract, tokenId } = use(params);
  const [provenanceData, setProvenanceData] = useState<NFTProvenanceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [contract, tokenId]);

  const fetchData = async () => {
    try {
      const data = await fetchNFTProvenance(contract, tokenId);
      if (data) {
        setProvenanceData(data);
      } else {
        setError("NFT not found");
      }
    } catch {
      console.error("Fetch failed");
      setError("Failed to load NFT data");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading NFT provenance...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Error</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to Search
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to Search
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            NFT Provenance
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>
              Contract: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{contract}</code>
            </span>
            <span>
              Token ID: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{tokenId}</code>
            </span>
          </div>
        </div>

        {/* Current Owner */}
        {provenanceData && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Current Owner</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Address</p>
                <p className="font-mono text-gray-900 dark:text-white">{provenanceData.currentOwner.address}</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">Balance</p>
                <p className="text-gray-900 dark:text-white">{provenanceData.currentOwner.balance}</p>
              </div>
            </div>
          </div>
        )}

        {/* Provenance Timeline */}
        {provenanceData && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Transfer History</h2>
            <div className="space-y-4">
              {provenanceData.provenance.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white capitalize">
                        {event.event}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(event.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">From</p>
                        <p className="font-mono text-gray-900 dark:text-white">
                          {event.from || "N/A (Mint)"}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">To</p>
                        <p className="font-mono text-gray-900 dark:text-white">{event.to}</p>
                      </div>
                      {event.price && (
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">Price</p>
                          <p className="text-gray-900 dark:text-white">{event.price} SEI</p>
                        </div>
                      )}
                      {event.marketplace && (
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">Marketplace</p>
                          <p className="text-gray-900 dark:text-white">{event.marketplace}</p>
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <p className="text-gray-600 dark:text-gray-400">Transaction</p>
                      <p className="font-mono text-sm text-gray-900 dark:text-white">{event.txHash}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Export Report
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Track Future Transfers
          </button>
        </div>
      </div>
    </div>
  );
} 