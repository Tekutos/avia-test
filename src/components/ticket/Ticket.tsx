import React from "react";
import "./ticket.scss";

function Ticket() {
  const base = `ticket`;
  return (
    <div className={`${base}`}>
      <div className={`${base}_container-1`}>

        <div className={`${base}_logoBox`}>
          <div className={`${base}_returnedBox`}>
            <span className={`${base}_returned`}>Невозвратный</span>
          </div>
          <div className={`${base}_logo`}/>
          <div className={`${base}_companyName`}>S7 Airlines</div>
        </div>

        <div className={`${base}_whereBox`}>
          <>
          <span>09:20</span>
          </>
          <>
          <span>Москва</span>
          <span>19.05.2022</span>
          </>
        </div>

        <div className={`${base}_infoBox`}/>
      </div>
      <div className={`${base}_priceBox`}/>
    </div>
  );
}

export default Ticket;
