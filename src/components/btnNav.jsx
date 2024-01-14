import { useState } from "react";

export default function BtnNov({ date, upSetDate }) {
    const [chooseValue, setChooseValue] = useState('month')
  const handlePrevMonth = (el) => {
    let years = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    if (el == "pm") {
      month--;
    } else if (el == "nm") {
      month++;
    } else if (el == "py") {
      years--;
    } else if (el == "ny") {
      years++;
    }
    upSetDate(new Date(years, month, day));
  };
  return (
    <div className="header">
      <div className="btns_nav">
        <button className="btn" onClick={() => handlePrevMonth("py")}>
          {"<<"}
        </button>
        <button className="btn" onClick={() => handlePrevMonth("pm")}>
          {"<"}
        </button>
        <b className="date">{date.toLocaleDateString()}</b>
        <button className="btn" onClick={() => handlePrevMonth("nm")}>
          {">"}
        </button>
        <button className="btn" onClick={() => handlePrevMonth("ny")}>
          {">>"}
        </button>
      </div>
      <div className="choose_mode_on_colendar">
        <select defaultValue={chooseValue} onChange={(event) => setChooseValue(event.target.value)} name="choose_mode" id="chooseNode">
            <option className="choose_value" value={'week'}>Неделя</option>
            <option className="choose_value" value={'month'}>Месяц</option>
            <option className="choose_value" value={'years'}>Год</option>
        </select>
      </div>

    </div>
  );
}
