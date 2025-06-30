'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const NFTSearchBar: React.FC = () => {
  const [contract, setContract] = useState('');
  const [tokenId, setTokenId] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contract && tokenId) {
      router.push(`/nft/${contract}/${tokenId}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 items-center justify-center w-full max-w-xl mx-auto mt-8">
      <input
        type="text"
        placeholder="NFT Contract Address"
        value={contract}
        onChange={e => setContract(e.target.value)}
        className="w-full md:w-1/2 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <input
        type="text"
        placeholder="Token ID"
        value={tokenId}
        onChange={e => setTokenId(e.target.value)}
        className="w-full md:w-1/4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <button
        type="submit"
        className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default NFTSearchBar; 