import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const MonthsStyles = styled.div({
   maxWidth: '1224px',
   margin: '0 auto',
   display:'flex',
   flexWrap: 'wrap'
});
const Month = styled.div({
  width: '200px',
  height: '200px',
  background: 'blue',
  margin: '2px'
});

export default function YearsColendar({ date }) {
  const [monthOnYears, setMonthOnYears] = useState([]);
  const FullDayInMonth = (y, m) => {
    const years = y;
    const month = m;
    let day = 1;
    const days = [];
    const dayInweek = [];
    let emptydays = [];

    while (new Date(years, month, day).getMonth() === month) {
      dayInweek.push(new Date(years, month, day).getDay());
      days.push([years, month, day]);
      day++;
    }
    if (dayInweek[0] === 0) {
      emptydays = Array(6)
        .fill()
        .map(() => [...["", "", ""]]);
    } else if (dayInweek === 1) {
      emptydays = [];
    } else {
      emptydays = Array(dayInweek[0] - 1)
        .fill()
        .map(() => [...["", "", ""]]);
    }

    days.unshift(...emptydays);

    return days;
  };

  const allMonthShow = (years) => {
    let month = 0;
    const yearsMonth = [];
    while (new Date(years, month, 1).getFullYear() === years) {
      yearsMonth.push(FullDayInMonth(years, month));
      month++;
    }
    setMonthOnYears(yearsMonth);
  };

  useEffect(() => {
    allMonthShow(date.getFullYear());
  }, [date]);
  return <div className="container">
    <MonthsStyles>
      {monthOnYears.map((el,index)=> <Month key={index}>{'ehh'}</Month>)}
    </MonthsStyles>
  </div>;
}
