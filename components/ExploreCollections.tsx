import React from 'react'
import { ExploreCollectionsCard } from './NftComponents';

export default function ExploreCollections() {
  return (
    <div className="container mx-auto py-10 overflow-hidden ">
      <h1 className="font-orbitron font-bold text-3xl py-10">Top Nft</h1>
      <div className="overflow-visible">
        <div className=" mx-auto overflow-scroll  flex  ">
          <ExploreCollectionsCard />
          <ExploreCollectionsCard />
          <ExploreCollectionsCard />
          <ExploreCollectionsCard />
          <ExploreCollectionsCard />
          <ExploreCollectionsCard />
        </div>
      </div>
    </div>
  );
}
