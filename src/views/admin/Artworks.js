import React from "react";

// components

import CardArtworksPaint from "components/Cards/CardArtworksPaint";
import CardArtworksSculpture from "components/Cards/CardArtworksSculpture";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
        <CardArtworksPaint title="Painting" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardArtworksSculpture title="Sculpture" />
        </div>
      </div>
    </>
  );
}
