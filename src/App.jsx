import { useEffect, useState } from "react";
// import Calendar from 'react-calendar'
import BtnNov from "./components/btnNav";
import WeekDays from "./components/weekDays";
import ColendarDays from "./components/colendarDays";
import YearsColendar from "./components/yearsColendar";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [dayInMonth, setDayInMonth] = useState([]);
  const [Mode , setMode] = useState('month')
  const realyDate = new Date()

  const FullDayInMonth = (y, m) => {
    const years = y
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
    if(dayInweek[0]===0){
      emptydays = Array(6).fill().map(()=>[...['','','']])
    }else if(dayInweek === 1) {
      emptydays = []
    } else {
      emptydays = Array(dayInweek[0]-1).fill().map(()=>[...['','','']])
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
  const upSetMode = (mode)=>{
    setMode(mode)
  }
  useEffect(() => {
    FullDayInMonth(date.getFullYear(), date.getMonth());
  }, [date]);

  return (
    <div className="container">
      {Mode}
      <BtnNov upSetDate = {upSetDate} date={date} mode={upSetMode}/>
      {Mode === 'month'?<><WeekDays/> <ColendarDays dayInMonth={dayInMonth} now={[realyDate.getDate(), realyDate.getMonth()]}/></> : ''}
      {Mode === 'years'? <><YearsColendar date={date}/></>: ''}     
      
    </div>
  );
}
