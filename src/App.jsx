import { useEffect, useState } from "react";
// import Calendar from 'react-calendar'

export default function App() {
  const [date, setDate] = useState(new Date());
  const [dayInMonth, setDayInMonth] = useState([]);
  const week_days = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс',]

  const FullDayInMonth = (y, m) => {
    const years = y
    const month = m;
    let day = 1;
    const days = [];
    const dayInweek = [];
    let emptydays = [];

    while (new Date(years, month, day).getMonth() === month) {
      dayInweek.push(new Date(years, month, day).getDay());
      days.push(day);
      day++;
    }
    switch (dayInweek[0]) {
      case 1:
        break;
      case 2:
        emptydays.push('');
        break;
      case 3:
        emptydays.push('','');
        break;
      case 4:
        emptydays.push('','','');
        break;
      case 5:
        emptydays.push('','','','');
        break;
      case 6:
        emptydays.push('','','','','');
        break;
      case 0:
        emptydays.push('','','','','','');
        break;
    }
    days.unshift(...emptydays)
    setDayInMonth(days);
  };

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
      setDate(new Date(years, month, day));

  };

  useEffect(() => {
    FullDayInMonth(date.getFullYear(), date.getMonth());
  }, [date]);

  return (
    <div className="container">
      <div className="btns_nav">
        <button onClick={() => handlePrevMonth("py")}>{"<<"}</button>
        <button onClick={() => handlePrevMonth("pm")}>{"<"}</button>
        <b>{date.toLocaleDateString()}</b>
        <button onClick={() => handlePrevMonth("nm")}>{">"}</button>
        <button onClick={() => handlePrevMonth("ny")}>{">>"}</button>
      </div>
      <div className="week_days">
        {week_days.map((wd,ind)=><div className="week_day" key={ind}>{wd}</div>)}
      </div>
      <div className="days">
          {dayInMonth.map((day, index)=><div className="calendar_day" key={index}>{day}</div>)}
      </div>
    </div>
  );
}
