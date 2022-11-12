import React, { useState } from "react";
import "./searchForm.scss";
import DatePicker from "react-date-picker";

function SearchForm() {
  const base = `search-form`;
  const [value, setValue] = useState(new Date());

  return (
    <div className={base}>
      <form>
        <div className={`${base}_inputBox`}>
          <div>
            <label htmlFor="from">Откуда</label>
            <input type="text" id="from" placeholder="Город вылета" />
          </div>
          <div>
            <label htmlFor="where">Куда</label>
            <input type="text" id="where" placeholder="Город прилёта" />
          </div>
          <div>
            <label htmlFor="fromDate">Когда</label>
            <DatePicker
              format={"d.M.y"}
              className={`${base}_inputFrom`}
              onChange={setValue}
              value={value}
            />
          </div>
          <div>
            <label htmlFor="whereDate">Обратно</label>
            <DatePicker
              format={"d.M.y"}
              className={`${base}_inputFrom`}
              onChange={setValue}
              value={value}
            />
          </div>
        </div>
        <div className={`${base}_btnBox`}>
          <button type="submit">Найти Билеты</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
