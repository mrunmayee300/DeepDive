# DeepDive

A web app to track the complete provenance and ownership history of any NFT on the Sei blockchain.

## 🚀 Current Status

✅ **Completed:**
- Next.js app with TypeScript and Tailwind CSS
- Home page with search interface
- NFT Details page with provenance display
- Mock data service for development
- Responsive design with dark mode support

🔄 **In Progress:**
- Timeline visualization components
- Export functionality (PDF/JSON)
- Real API integration with NFTScan

📋 **Next Steps:**
- Add interactive timeline/graph visualization
- Implement export functionality
- Integrate with real Sei blockchain APIs
- Add wallet connection features

## Features
- Search by NFT contract address and token ID
- Visualize transfer history (timeline/graph)
- Show all owners, transfer prices, timestamps, and marketplaces
- Show current owner and wallet info
- Export provenance as PDF/JSON
- (Stub) Subscribe to transfer alerts
- (Optional) Wallet connect

## Tech Stack
- Next.js (TypeScript, App Router)
- Tailwind CSS
- Node.js API routes
- Sei MCP Kit, NFTScan API, Sei RPC

## Setup
1. Clone this repo
2. `cd sei-nft-explorer`
3. `npm install`
4. Copy `env.example` to `.env.local` and add your API keys:
   ```
   NFTSCAN_API_KEY=your_key_here
   ```
5. `npm run dev`
6. Open [http://localhost:3000](http://localhost:3000)

## Testing
Use the example search on the home page:
- Contract: `sei1xyz...`
- Token ID: `123`

## Example Provenance Data (Mock)
```json
{
  "contract": "sei1xyz...",
  "tokenId": "123",
  "provenance": [
    {
      "event": "mint",
      "from": null,
      "to": "sei1minter...",
      "timestamp": "2024-06-01T12:00:00Z",
      "price": null,
      "marketplace": null,
      "txHash": "0xabc..."
    },
    {
      "event": "transfer",
      "from": "sei1minter...",
      "to": "sei1owner1...",
      "timestamp": "2024-06-02T15:00:00Z",
      "price": "10",
      "marketplace": "SeiNFTMarket",
      "txHash": "0xdef..."
    },
    {
      "event": "transfer",
      "from": "sei1owner1...",
      "to": "sei1owner2...",
      "timestamp": "2024-06-10T18:00:00Z",
      "price": "15",
      "marketplace": "SeiNFTMarket",
      "txHash": "0xghi..."
    }
  ],
  "currentOwner": {
    "address": "sei1owner2...",
    "balance": "100 SEI",
    "otherNFTs": [
      { "contract": "sei1abc...", "tokenId": "456" }
    ]
  }
}
```

## Folder Structure
- `/src/app` - Next.js App Router pages
- `/src/components` - UI components (NFTSearchBar, etc.)
- `/src/services` - Data fetching logic (SeiMCPService)
- `/src/utils` - Helpers, mock data

## License
MIT
