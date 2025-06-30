export const mockProvenance = {
  contract: 'sei1xyz...',
  tokenId: '123',
  provenance: [
    {
      event: 'mint',
      from: null,
      to: 'sei1minter...',
      timestamp: '2024-06-01T12:00:00Z',
      price: null,
      marketplace: null,
      txHash: '0xabc...'
    },
    {
      event: 'transfer',
      from: 'sei1minter...',
      to: 'sei1owner1...',
      timestamp: '2024-06-02T15:00:00Z',
      price: '10',
      marketplace: 'SeiNFTMarket',
      txHash: '0xdef...'
    },
    {
      event: 'transfer',
      from: 'sei1owner1...',
      to: 'sei1owner2...',
      timestamp: '2024-06-10T18:00:00Z',
      price: '15',
      marketplace: 'SeiNFTMarket',
      txHash: '0xghi...'
    }
  ],
  currentOwner: {
    address: 'sei1owner2...',
    balance: '100 SEI',
    otherNFTs: [
      { contract: 'sei1abc...', tokenId: '456' }
    ]
  }
};

// Example 2: Rare NFT with high-value transfers
export const mockRareNFT = {
  contract: 'sei1rare...',
  tokenId: '777',
  provenance: [
    {
      event: 'mint',
      from: null,
      to: 'sei1artist...',
      timestamp: '2024-01-15T10:30:00Z',
      price: null,
      marketplace: null,
      txHash: '0xrare_mint...'
    },
    {
      event: 'transfer',
      from: 'sei1artist...',
      to: 'sei1collector1...',
      timestamp: '2024-02-01T14:20:00Z',
      price: '1000',
      marketplace: 'SeiArtGallery',
      txHash: '0xrare_sale1...'
    },
    {
      event: 'transfer',
      from: 'sei1collector1...',
      to: 'sei1collector2...',
      timestamp: '2024-03-15T16:45:00Z',
      price: '2500',
      marketplace: 'SeiArtGallery',
      txHash: '0xrare_sale2...'
    },
    {
      event: 'transfer',
      from: 'sei1collector2...',
      to: 'sei1whale...',
      timestamp: '2024-05-20T09:15:00Z',
      price: '5000',
      marketplace: 'SeiNFTMarket',
      txHash: '0xrare_sale3...'
    }
  ],
  currentOwner: {
    address: 'sei1whale...',
    balance: '50000 SEI',
    otherNFTs: [
      { contract: 'sei1rare...', tokenId: '888' },
      { contract: 'sei1gaming...', tokenId: '999' }
    ]
  }
};

// Example 3: Gaming NFT with frequent transfers
export const mockGamingNFT = {
  contract: 'sei1gaming...',
  tokenId: '456',
  provenance: [
    {
      event: 'mint',
      from: null,
      to: 'sei1game...',
      timestamp: '2024-04-01T08:00:00Z',
      price: null,
      marketplace: null,
      txHash: '0xgame_mint...'
    },
    {
      event: 'transfer',
      from: 'sei1game...',
      to: 'sei1player1...',
      timestamp: '2024-04-01T08:05:00Z',
      price: '5',
      marketplace: 'SeiGameStore',
      txHash: '0xgame_buy1...'
    },
    {
      event: 'transfer',
      from: 'sei1player1...',
      to: 'sei1player2...',
      timestamp: '2024-04-05T12:30:00Z',
      price: '8',
      marketplace: 'SeiGameMarket',
      txHash: '0xgame_trade1...'
    },
    {
      event: 'transfer',
      from: 'sei1player2...',
      to: 'sei1player3...',
      timestamp: '2024-04-10T19:20:00Z',
      price: '12',
      marketplace: 'SeiGameMarket',
      txHash: '0xgame_trade2...'
    },
    {
      event: 'transfer',
      from: 'sei1player3...',
      to: 'sei1player4...',
      timestamp: '2024-04-15T15:45:00Z',
      price: '15',
      marketplace: 'SeiGameMarket',
      txHash: '0xgame_trade3...'
    }
  ],
  currentOwner: {
    address: 'sei1player4...',
    balance: '25 SEI',
    otherNFTs: [
      { contract: 'sei1gaming...', tokenId: '789' }
    ]
  }
};

// Example 4: Newly minted NFT
export const mockNewNFT = {
  contract: 'sei1new...',
  tokenId: '1',
  provenance: [
    {
      event: 'mint',
      from: null,
      to: 'sei1creator...',
      timestamp: '2024-06-30T10:00:00Z',
      price: null,
      marketplace: null,
      txHash: '0xnew_mint...'
    }
  ],
  currentOwner: {
    address: 'sei1creator...',
    balance: '150 SEI',
    otherNFTs: [
      { contract: 'sei1new...', tokenId: '2' },
      { contract: 'sei1new...', tokenId: '3' }
    ]
  }
}; 