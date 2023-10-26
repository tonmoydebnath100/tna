import React from 'react';
import { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
    const handleSave=event=>{
      event.preventDefault();
      const form = event.target;
      const buyertname=form.buyertname.value;
      const quantity=form.quantity.value;
      const style=form.style.value;
      const shipdate=form.shipdate.value;
      const plandate=form.plandate.value;
      const merchant=form.merchant.value;
      const prod=form.prod.value;
      const description=form.description.value;
      const data={
        buyertname,
        quantity,
        style,
        merchant,
        description,
        prod,
        shipdate,
        plandate
      }
      console.log(data);
      fetch('https://tna-server.vercel.app/infodata',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        navigate(`/${style}`, { replace: true });
        
      })
      form.reset();
      setShipselectedDay(new Date());
      setPlanselectedDay(new Date());

      
    }

    const [shipselectedDay, setShipselectedDay] = useState(new Date());
    const [planselectedDay, setPlanselectedDay] = useState(new Date());
    
    return (
        <div className='m-10'>
            <form  onSubmit={handleSave}>
      <div className="space-y-12">


        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">TNA</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Please input information carefully</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Buyer name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="buyertname"
                  id="buyertname"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Quantity
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Style
              </label>
              <div className="mt-2">
                <input
                  id="style"
                  name="style"
                  type="text"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Merchant
              </label>
              <div className="mt-2">
                <input
                  id="merchant"
                  name="merchant"
                  type="text"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                PROD/DAY
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="prod"
                  type="number"
                  autoComplete="phone"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-bold leading-6 text-blue-900">
                Ship Date
              </label>
              <DayPicker
                mode="single"
                required
                selected={shipselectedDay}
                onSelect={setShipselectedDay} 
            />
              <div className="mt-2">
                <input
                  id="shipdate"
                  name="shipdate"
                  type="text"
                  readOnly
                  value={format(shipselectedDay, 'dd/MM/yyyy')}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-bold leading-6 text-blue-900">
                Plan Date
              </label>
              <DayPicker
                mode="single"
                required
                selected={planselectedDay}
                onSelect={setPlanselectedDay}
            />
              <div className="mt-2">
                <input
                  id="phone"
                  name="plandate"
                  type="text"
                  readOnly
                  value={format(planselectedDay, 'dd/MM/yyyy')}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            

            

            

            
          </div>
        </div>

      </div>
     

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
        </form>
            </div>
    );
};

export default Home;