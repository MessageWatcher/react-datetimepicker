import React from 'react';
import '../style/DateTimeRange.css'
import "../style/DateTimeRange.css"
import ShouldUpdate from "../ShouldUpdate";

class CalendarHeader extends ShouldUpdate {

    mapHeaderToDiv(headers){
        return headers.map(function(header, i){
            return <div key={i}>{header}</div>
        })
    }

    render(){
        let headerDivs = this.mapHeaderToDiv(this.props.headers);
        return(
            <div className="calendarGrid">
                {headerDivs}
            </div>
        );
  }
}
export default CalendarHeader
