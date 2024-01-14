export default function ColendarDays({dayInMonth, now}){
    return(
        <div className="days">
          {dayInMonth.map((day, index)=><div className={`calendar_day ${day==''?'empty': ''} ${day[2]===now[0]&&day[1]===now[1]? 'now': ''}`} key={index}>{day[2]}</div>)}
        </div>
    );
}