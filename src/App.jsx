import { useEffect, useState } from "react";
// import Calendar from 'react-calendar'

export default function App() {
  const [date, setDate] = useState(new Date());
  const [dayInMonth, setDayInMonth] = useState([]);

  const FullDayInMonth = (y, m) => {
    const years = y
    const month = m;
    let day = 1;
    const days = [];

    while (new Date(years, month, day).getMonth() === month) {
      console.log(day);
      days.push(day);
      day++;
    }

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
    <div>
      <div className="btns">
        <button onClick={() => handlePrevMonth("py")}>{"<<"}</button>
        <button onClick={() => handlePrevMonth("pm")}>{"<"}</button>
        <b>{date.toLocaleDateString()}</b>
        <button onClick={() => handlePrevMonth("nm")}>{">"}</button>
        <button onClick={() => handlePrevMonth("ny")}>{">>"}</button>
      </div>
      <p>{dayInMonth.join("  -   ")}</p>
    </div>
  );
}
