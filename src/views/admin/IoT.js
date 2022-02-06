import React from "react";

// components

import CardTable from "components/Cards/CardTableIoT.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
        <CardTable title="Camera IoT" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable title="PC IoT" />
        </div>
      </div>
    </>
  );
}
