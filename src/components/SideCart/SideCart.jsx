import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const SideCart = ({ watchTime }) => {
    const [time, setItem] = useState(watchTime);
    const [breakTime, setBreakTime] = useState(0);
    
    useEffect(() => {    
    const getWatchTimeFromStorage = localStorage.getItem("watchTime");
        setItem(getWatchTimeFromStorage);
        const getBreakTime = localStorage.getItem("breakTime");
        setBreakTime(getBreakTime);
    }, [watchTime]);

    const handleBreakTime = (bt) => {
        localStorage.setItem("breakTime", bt);
        setBreakTime(bt);
    }

    const handleComplete = () => {
        toast("Wow so easy !!")
    }

    return (
        <div>
            
            <h1>My Cart</h1>
            <div className='mt-5 text-center'>
                <p>Total watch Time</p>
                <input type="text" value={time} disabled/>
            </div>
            <h5 className='mt-5'>Add break time</h5>
            <button onClick={()=>handleBreakTime(15)}className='w-25 btn-circle m-1 btn btn-info'>15</button>
            <button className='w-25 btn-circle m-1 bg-warning btn btn-info'>20</button>
            <button className='w-25 btn-circle m-1 btn bg-danger btn-info'>25</button>
            <input type="text" value={breakTime} disabled />
            <button onClick={handleComplete} className='mt-5 btn btn-info w-100'>Complete</button>
        </div>
    );
};

export default SideCart;