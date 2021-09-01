import React from 'react'
import './App.css';

const uploder = () => {
    return (
        <>
        <div>
            <input
             className="file"
             type="file"
             accept=".csv,.xlsx,.xls"
             label ="Drag And Drop" 
            />
        </div>
        </>
    )
}

export default uploder
