import { mockProvenance, mockRareNFT, mockGamingNFT, mockNewNFT } from '../utils/mockProvenance';

export async function fetchNFTProvenance(contract: string, tokenId: string) {
  // TODO: Replace with real API call to Sei MCP Kit or NFTScan
  // For now, return mock data based on contract/tokenId combinations
  
  // Example 1: Basic NFT
  if (contract === mockProvenance.contract && tokenId === mockProvenance.tokenId) {
    return mockProvenance;
  }
  
  // Example 2: Rare NFT with high-value transfers
  if (contract === mockRareNFT.contract && tokenId === mockRareNFT.tokenId) {
    return mockRareNFT;
  }
  
  // Example 3: Gaming NFT with frequent transfers
  if (contract === mockGamingNFT.contract && tokenId === mockGamingNFT.tokenId) {
    return mockGamingNFT;
  }
  
  // Example 4: Newly minted NFT
  if (contract === mockNewNFT.contract && tokenId === mockNewNFT.tokenId) {
    return mockNewNFT;
  }
  
  // Simulate not found
  return null;
} 