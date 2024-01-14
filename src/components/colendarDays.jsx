export default function ColendarDays({dayInMonth, now}){
    return(
        <div className="days">
          {dayInMonth.map((day, index)=><div className={`calendar_day ${day==''?'empty': ''} ${day===now? 'now': ''}`} key={index}>{day}</div>)}
        </div>
    );
}