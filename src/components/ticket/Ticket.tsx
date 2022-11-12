import React from "react";
import "./ticket.scss";


function Ticket() {
  const base = `ticket`;
  return (
    <div className={`${base}`}>
      <div>
        <div className={`${base}_logoBox`}>
        <span>{}</span>
        <input></input>
        </div>
        <div className={`${base}_infoBox`}>

        </div>
      </div>
      <div className={`${base}_priceBox`}>

      </div>
    </div>
  );
}

export default Ticket;
