import { useEffect, useState } from "react";
// import Calendar from 'react-calendar'
import BtnNov from "./components/btnNav";
import WeekDays from "./components/weekDays";
import ColendarDays from "./components/colendarDays";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [dayInMonth, setDayInMonth] = useState([]);

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


    if(days.length < 35){
      while (days.length < 35){
        days.push('');
      }
    }
    setDayInMonth(days);
  };

  const upSetDate = (newDate)=>{
    setDate(newDate)
  }

  useEffect(() => {
    FullDayInMonth(date.getFullYear(), date.getMonth());
  }, [date]);

  return (
    <div className="container">
      <BtnNov upSetDate = {upSetDate} date={date}/>
      <WeekDays/>
      <ColendarDays dayInMonth={dayInMonth} now={date.getDate()}/>
      
    </div>
  );
}
