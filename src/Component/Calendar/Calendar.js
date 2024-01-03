import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
// import { addDays } from 'date-fns';
import { useState } from 'react';
const Calendar = ({close}) => {
   

    const [state, setState] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
    ]);

    return ( 
        <>
        <div className="modal-background" onClick={close}>
            <div className="outer">
                <div className='calender-background' onClick={(e) => e.stopPropagation()}>
                    <DateRangePicker
                    onChange={item => setState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={state}
                    direction="horizontal"
                    />;
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Calendar;