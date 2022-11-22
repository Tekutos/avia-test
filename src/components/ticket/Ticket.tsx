import React from "react";
import "./ticket.scss";
import { ReactComponent as LineIcon } from "../../image/Line24.svg";
import { ReactComponent as Bagage } from "../../image/багаж.svg";
import { ReactComponent as Ellips } from "../../image/Ellipse12.svg";
import { tickets } from "../../common/mock";

function Ticket() {
  const base = `ticket`;

  function pathTime(time: string) {
    const minH = (+time.slice(6, 8) - +time.slice(0, 2)) * 60;
    const minM = +time.slice(9, 11) - +time.slice(3, 5);
    const allMin = minH + minM;
    const timeToPath = allMin / 60;
    const hours = Math.floor(timeToPath);
    const minutes = Math.ceil((timeToPath - hours) * 60);
    return `В пути ${hours}ч ${minutes} мин`;
  }

  return (
    <div className={`${base}`}>
      <div className={`${base}_container-1`}>
        <div className={`${base}_logoBox`}>
          <div className={`${base}_returnedBox`}>
            <span className={`${base}_returned`}>
              {tickets[0].returned ? "Возвратный" : "Невозвратный"}
            </span>
          </div>
          <div className={`${base}_logo`} />
          <div className={`${base}_companyName`}>{tickets[0].companyName}</div>
        </div>

        <div className={`${base}_mainBox`}>
          <div className={`${base}_mainUpBox`}>
            <div className={`${base}_fromBox`}>
              <span className={`${base}_time`}>
                {tickets[0].time.slice(0, 5)}
              </span>
              <span className={`${base}_where`}>{tickets[0].from}</span>
              <span className={`${base}_date`}>
                {`${tickets[0].date.getDate()}.${tickets[0].date.getMonth()}.${tickets[0].date.getFullYear()}`}
              </span>
            </div>
            <div className={`${base}_pathBox`}>
              <div className={`${base}_fromWhereAir`}>
                <span className={`${base}_fromAir`}>{tickets[0].fromAir}</span>
                <span className={`${base}_whereAir`}>
                  {tickets[0].whereAir}
                </span>
              </div>
              <div>
                <div className={`${base}_path`}>
                  <Ellips />
                  <LineIcon width="269px" />
                  <Ellips />
                </div>
                <div className={`${base}_pathTime`}>
                  <span>{pathTime(tickets[0].time)}</span>
                </div>
              </div>
            </div>
            <div className={`${base}_whereBox`}>
              <span className={`${base}_time1`}>
                {" "}
                {tickets[0].time.slice(6, 11)}
              </span>
              <span className={`${base}_where1`}>{tickets[0].where}</span>
              <span className={`${base}_date1`}>
                {" "}
                {`${tickets[0].date.getDate()}.${tickets[0].date.getMonth()}.${tickets[0].date.getFullYear()}`}
              </span>
            </div>
            <div className={`${base}_bagageBox`}>
              <Bagage />
            </div>
          </div>
          <div className={`${base}_mainDownBox`}>
            <div>
              <p>{tickets[0].time.slice(0, 5)}</p>-
              <span>{tickets[0].time.slice(6, 11)}</span>
            </div>
            <div>
              <p>{tickets[1].time.slice(0, 5)}</p>-
              <span>{tickets[1].time.slice(6, 11)}</span>
            </div>
            <div>
              <p>{tickets[2].time.slice(0, 5)}</p>-
              <span>{tickets[2].time.slice(6, 11)}</span>
            </div>
          </div>
        </div>

        <div className={`${base}_infoBox`} />
      </div>
      <div className={`${base}_priceBox`}>{tickets[0].price} P</div>
    </div>
  );
}

export default Ticket;
