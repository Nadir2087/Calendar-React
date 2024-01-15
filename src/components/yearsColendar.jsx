import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const MonthsStyles = styled.div({
   maxWidth: '1300px',
   margin: '0 auto',
   display:'flex',
   flexWrap: 'wrap',
   justifyContent: 'center'
});
const Month = styled.div({
  width: '201px',
  height: '180px',
  margin: '5px',
  display: 'flex',
  flexWrap: 'wrap',
  border:'1px solid #c6c6c6',  
  padding: '3px 0'
  
});

const Days = styled.div`
width: 27px;
height: 27px;
background: rgb(184, 184, 184);
margin: 0.7px;
text-align: center;

&.noww{
  background: rgb(5, 90, 124);
  color: #fff;
}
`

export default function YearsColendar({ date }) {
  const [monthOnYears, setMonthOnYears] = useState([]);
  const realyDate = new Date()
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
      {monthOnYears.map((el,index)=> <Month key={index}>{el.map((day, ind)=><Days className={`${day[2]==realyDate.getDate()&&day[1]==realyDate.getMonth()? 'noww': ''}`} style={day[2]==''?{background: '#fff'}:{}} key={ind}>{day[2]}</Days>)}</Month>)}
    </MonthsStyles>
  </div>;
}
