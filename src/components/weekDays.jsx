export default function WeekDays(){
  const week_days = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс',]
    return(
        <div className="week_days">
        {week_days.map((wd,ind)=><div className="week_day" key={ind}>{wd}</div>)}
      </div>
    )
}