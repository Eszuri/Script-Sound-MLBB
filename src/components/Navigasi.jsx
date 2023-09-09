import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigasi() {
    return (
        <>
            <h1 className='text-3xl text-center font-bold mt-5 mb-5'>Script Sound MLBB</h1>
            <div className='biruNavigasi flex justify-between flex-wrap w-[80%] mr-auto ml-auto text-2xl mt-2 rounded-sm'>
                <Link to="/" className='cursor-pointer hover:bg-blue-800 p-2 rounded-sm duration-500 w-[25%] max-sm:w-[50%] text-center' id='home'>Home</Link>
                <Link to="/list" className='cursor-pointer hover:bg-blue-800 p-2 rounded-sm duration-500 w-[25%] max-sm:w-[50%] text-center' id='list'>Hero List</Link>
                <Link to="/report" className='cursor-pointer hover:bg-blue-800 p-2 rounded-sm duration-500 w-[25%] max-sm:w-[50%] text-center' id='report'>Laporkan</Link>
                <Link to="/request" className='cursor-pointer hover:bg-blue-800 p-2 rounded-sm duration-500 w-[25%] max-sm:w-[50%] text-center' id='request'>Request</Link>
            </div>
        </>
    )
}
