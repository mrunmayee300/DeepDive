import axios from "axios";

export interface ProvenanceEvent {
  owner: string;
  timestamp: string;
  price: string;
  marketplace: string;
}

export interface CurrentOwner {
  owner: string;
  balance: string;
  otherNFTs: string[];
}

export interface NFTProvenanceData {
  contractAddress: string;
  tokenId: string;
  provenance: ProvenanceEvent[];
  currentOwner: CurrentOwner;
}

export const getNFTProvenance = async (contract: string, tokenId: string): Promise<NFTProvenanceData> => {
  const MCP_SERVER_URL = process.env.NEXT_PUBLIC_MCP_SERVER_URL || "https://sei-mcp-server-production.up.railway.app/";

  try {
    const response = await axios.get(`${MCP_SERVER_URL}/nft/provenance`, {
      params: {
        contractAddress: contract,
        tokenId: tokenId,
      },
    });

    return {
      contractAddress: contract,
      tokenId: tokenId,
      provenance: response.data.provenance || [],
      currentOwner: response.data.currentOwner || {
        owner: "Unknown",
        balance: "0 SEI",
        otherNFTs: [],
      },
    };
  } catch (error) {
    console.error("Error fetching provenance data:", error);
    throw error;
  }
};
