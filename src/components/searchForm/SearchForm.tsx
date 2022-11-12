import React from "react";
import "./searchForm.scss";
import DatePicker from "react-date-picker";

function SearchForm() {
  const base = `search-form`;

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
            <DatePicker className={`${base}_inputFrom`}/>
          </div>
          <div>
            <label htmlFor="whereDate">Обратно</label>
            <input type="date" id="whereDate" />
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
