export default function BtnNov({date, upSetDate}){
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
    return(
        <div className="btns_nav">
        <button className="btn" onClick={() => handlePrevMonth("py")}>{"<<"}</button>
        <button className="btn" onClick={() => handlePrevMonth("pm")}>{"<"}</button>
        <b className="date">{date.toLocaleDateString()}</b>
        <button className="btn" onClick={() => handlePrevMonth("nm")}>{">"}</button>
        <button className="btn" onClick={() => handlePrevMonth("ny")}>{">>"}</button>
      </div>
    )
}