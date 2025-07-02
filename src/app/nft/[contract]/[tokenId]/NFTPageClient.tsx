"use client";

import { useEffect, useState } from "react";
import { getNFTProvenance } from "@/services/SeiMCPService";
import Link from "next/link";

interface Props {
  contract: string;
  tokenId: string;
}

interface ProvenanceEvent {
  owner: string;
  timestamp: string;
  price: string;
  marketplace: string;
}

interface CurrentOwner {
  owner: string;
  balance: string;
  otherNFTs: string[];
}

interface NFTProvenanceData {
  contractAddress: string;
  tokenId: string;
  provenance: ProvenanceEvent[];
  currentOwner: CurrentOwner;
}

export default function NFTPageClient({ contract, tokenId }: Props) {
  const [data, setData] = useState<NFTProvenanceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNFTProvenance(contract, tokenId);
        setData(result);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contract, tokenId]);

  if (loading) {
    return <p>Loading NFT provenance data...</p>;
  }

  if (!data) {
    return <p>No provenance data found.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">NFT Provenance: {contract} / {tokenId}</h1>

      <h2 className="text-xl font-semibold mt-4 mb-2">Current Owner</h2>
      <div className="border rounded p-2 mb-4">
        <p><strong>Address:</strong> {data.currentOwner.owner}</p>
        <p><strong>Balance:</strong> {data.currentOwner.balance}</p>
        <p><strong>Other NFTs:</strong> {data.currentOwner.otherNFTs.join(", ")}</p>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Provenance History</h2>
      {data.provenance.length === 0 ? (
        <p>No previous transfers found.</p>
      ) : (
        data.provenance.map((event, index) => (
          <div key={index} className="border rounded p-2 mb-2">
            <p><strong>Owner:</strong> {event.owner}</p>
            <p><strong>Timestamp:</strong> {event.timestamp}</p>
            <p><strong>Price:</strong> {event.price}</p>
            <p><strong>Marketplace:</strong> {event.marketplace}</p>
          </div>
        ))
      )}

      <Link href="/" className="text-blue-500 underline mt-4 block">
        Back to search
      </Link>
    </div>
  );
}
