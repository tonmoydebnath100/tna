import { format, toDate } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Tna = () => {
  const [info, setInfo]=useState([]);
  useEffect(()=>{
    fetch('https://tna-server.vercel.app/details')
    .then(res=>res.json())
    .then(data=> setInfo(data))
  },[])
    return (
        <>
        <div className='bg-base-100'>
        <ul role="list" className="divide-y divide-gray-300">
          {
            info.map(i=>(
              <li className="flex flex-col lg:flex-row justify-between gap-x-6 py-5 px-20">
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto mb-2">
                    <p className="text-xl font-bold leading-6 text-gray-900">Style No:<span className='text-[green]'> {i.style}</span></p>
                    <p className="text-sm font-bold leading-6 text-gray-900">Merchant: {}</p>
                    <p className="mt-1  truncate text-sm font-bold leading-5 text-gray-500">Ship Date: {i.shipdate}</p>
                  </div>
                </div>
                <div className="sm:flex sm:flex-col sm:items-end">
                  <Link to={`/saved/${i.style}`}><button className=' btn btn-primary text-white'>See More</button></Link>  
                </div>
              </li>
            ))
          }
          
          
      
      </ul>
      </div>
        </>
    );
};

export default Tna;