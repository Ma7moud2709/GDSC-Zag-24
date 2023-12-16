/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

function HomePage() {
    let [day, setDay] = useState("--");
    let [month, setMonth] = useState("--");
    let [year, setYear] = useState("--");
    let [yearMessage, setYearMessage] = useState(" ")
    let [monthMessage, setMonthMessage] = useState(" ")
    let [dayMessage, setDayMessage] = useState(" ")
    let [errborder, setErrBorder] = useState(" ")

    const [buttonColor, setButtonColor] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonColor('black');
        setAge();
    };

    function setAge() {
        const currentDate = new Date();

        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
        if (year > currentYear) {
            setYearMessage("Enter Valid Data");
        } else if (year == '--') {
            setYearMessage("This field is required");
        }
        else {
            setYear(currentYear - year);
            setYearMessage("");
        }

        if (month > 12) {
            setMonthMessage("Enter Valid Data");
        }
        else if (month == '--') {
            setMonthMessage("This field is required");
        }
        else {
            setMonth(currentMonth - month);
            setMonthMessage("");
        }


        if (day > 31) {
            setDayMessage("Enter Valid Data");
        }
        else if (day == '--') {
            setDayMessage("This field is required");
        }
        else {
            setDay(Math.abs(currentDay - day));
            setDayMessage("");
        }


    }
    return (
        <div className='container'>
            <div className=' row col-md-9'>
                <form className='col-md-12' onSubmit={handleSubmit}>
                    <div className='field col-3 d-inline-block'>
                        <label>Day</label>
                        <br />
                        <input type='text' className='rounded-4 req' placeholder='DD' onChange={(e) => { day = e.target.value }} />
                        <br />
                        <span className='message text-danger'>{dayMessage}</span>
                    </div>

                    <div className='field col-3 d-inline-block ml-4'>
                        <label>Month</label>
                        <br />
                        <input type='text' className='rounded-4 req' placeholder='MM' onChange={(e) => { month = e.target.value }} />
                        <br />
                        <span className='message text-danger'>{monthMessage}</span>
                    </div>

                    <div className='field col-3 d-inline-block ml-4'>
                        <label>Year</label>
                        <br />
                        <input type='text' className='rounded-4 req' placeholder='YYYY' onChange={(e) => { year = e.target.value }} />
                        <br />
                        <span className='message text-danger'>{yearMessage}</span>
                    </div>

                    <div className='calc pt-5'>
                        <div className='col-md-10 d-inline-block'></div>
                        <input type='submit' value=' ' className='ml-1 col-md-2' style={{ backgroundColor: buttonColor }} />
                    </div>
                </form>

            </div>

            <div className='results'>
                <h1> <span className='value'>{year}</span> years</h1>
                <h1> <span className='value'>{month}</span> months</h1>
                <h1> <span className='value'>{day}</span> days</h1>
            </div>
        </div>
    )
}

export default HomePage;
