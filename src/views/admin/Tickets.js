import React from "react";

// components

import CardTicket from "components/Cards/CardTicket.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
        <CardTicket title="Tickets #1" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTicket title="Tickets #2" />
        </div>
      </div>
    </>
  );
}
