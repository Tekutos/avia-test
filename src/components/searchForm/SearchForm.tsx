import React, { useState } from "react";
import "./searchForm.scss";
import DatePicker from "react-date-picker";

function SearchForm() {
  const base = `search-form`;
  const [value, setValue] = useState(new Date());
  // let dateToHome = new Date();
  // dateToHome.setHours(dateToHome.getHours() + 168);
  const [valueWhere, setValueWhere] = useState< null | Date>(null);

  return (
    <div className={base}>
      <form>
        <div className={`${base}_inputBox`}>
          <div>
            <label htmlFor="from">Откуда</label>
            <input required type="text" id="from" placeholder="Город вылета" />
          </div>
          <div>
            <label htmlFor="where">Куда</label>
            <input
              required
              type="text"
              id="where"
              placeholder="Город прилёта"
            />
          </div>
          <div>
            <label htmlFor="fromDate">Когда</label>
            <DatePicker
              required
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
              onChange={setValueWhere}
              value={valueWhere}
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
