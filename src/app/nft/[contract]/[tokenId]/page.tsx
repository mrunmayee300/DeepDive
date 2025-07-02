import NFTPageClient from "./NFTPageClient";

export default async function NFTPage({ params }: { params: { contract: string; tokenId: string } }) {
  // Next.js now treats params as Promise-like, so we can await if needed (though technically they still work directly for now)
  const contract = params.contract;
  const tokenId = params.tokenId;

  return <NFTPageClient contract={contract} tokenId={tokenId} />;
}
