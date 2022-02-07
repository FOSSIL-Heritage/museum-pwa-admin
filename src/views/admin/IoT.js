import React from "react";

// components

import CardTableCameraIoT from "components/Cards/CardTableCameraIoT.js";
import CardTablePCIoT from "components/Cards/CardTablePCIoT.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
        <CardTableCameraIoT title="Camera IoT" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTablePCIoT title="PC IoT" />
        </div>
      </div>
    </>
  );
}
