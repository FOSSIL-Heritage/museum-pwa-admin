import React from "react";

// components

import CardVisitors from "components/Cards/CardVisitors";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
        <CardVisitors title="Visitors" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardVisitors title="Moderators" />
        </div>
      </div>
    </>
  );
}
