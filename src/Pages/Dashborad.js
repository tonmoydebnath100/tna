import { addDays, differenceInCalendarDays, differenceInDays, format, parse, parseISO, subDays, toDate } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { DayPicker } from 'react-day-picker';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useLoaderData } from 'react-router-dom';

const Dashborad = () => {
      const {
        buyertname,
        quantity,
        style,
        merchant,
        description,
        shipdate,
        prod,
        plandate
      }=useLoaderData();
      let i=0;
      const [startDate, setStartDate] = useState('');
      const [fitsample, setFitsample] = useState('');
      const [faw, setfaw] = useState('');
      const [aaw, setaaw] = useState('');
      const [leadday, setleadday] = useState('');
      const [fsend, setfsend] = useState('');
      const [fcmt, setfcmt] = useState('');
      const [fabcmt, setfabcmt] = useState('');
      const [fitsampleDays, setfitsampleDays] = useState('');
      const [fsendDays, setfsendDays] = useState('');
      const [acca, setacca] = useState('');
      const [accmt, setaccmt] = useState('');
      const [fb, setfb] = useState('');
      const [fhouse, setfhouse] = useState('');
      const [accbooking, setaccbooking] = useState('');
      const [ppsend, setppsend] = useState('');
      const [ppcmt, setppcmt] = useState('');
      const [cutting, setcutting] = useState('');
      const [SewingStart, setSewingStart] = useState('');
      const [test, settest] = useState('');
      const [SewingFinish, setSewingFinish] = useState('');
      const [Finish, setFinish] = useState('');
      const [Fri, setFri] = useState('');
      const [exFri, setexFri] = useState('');
      
      useEffect(() => {
        if(startDate!==''){
        const lead=differenceInDays(startDate,new Date(shipdate));
        setleadday(lead);
        const result = addDays(startDate, 7);
        setFitsample(result);
        const resultfs = addDays(result, 4);
        setfitsampleDays(resultfs);
        const result1 = addDays(result, 20);
        setfaw(result1);
        const result2 = addDays(result, 20);
        setaaw(result2);
        const result3 = addDays( aaw, 7);
        setfsend(result3);
        const resultfsend = addDays(fsend, 3);
        setfsendDays(resultfsend);
        const result4 = addDays(fitsampleDays, 7);
        setfcmt(result4);
        const result5 = addDays(fsendDays, 10);
        setfabcmt(result5);
        const result6 = addDays(aaw, 15);
        setacca(result6);
        const result7= addDays(acca, 10);
        setaccmt(result7);
        const result8= addDays(fcmt, 2);
        setfb(result8);
        const result9= addDays(fb, 60);
        setfhouse(result9);
        const result10= addDays(accmt, 2);
        setaccbooking(result10);
        const result11= addDays(fb, 37);
        setppsend(result11);
        const result12= addDays(ppsend, 10);
        setppcmt(result12);
        const result13= subDays(new Date(plandate), 10);
        setcutting(result13);
        const result14= addDays(cutting, 1);
        setSewingStart(result14);
        const result15= addDays(SewingStart, 4);
        settest(result15);
        const result16= addDays(SewingStart, Math.ceil(quantity/prod));
        setSewingFinish(result16);
        const result17= addDays(SewingFinish, (quantity<10000)?4:3);
        setFinish(result17);
        const result18= addDays(Finish,2);
        setFri(result18);
        const result19= addDays(Fri,1);
        setexFri(result19);
        }
      }, [startDate]);
      
     
    return (
      <div className='flex divide-x'>
        <div class="overflow-x-auto w-1/3">
        <div class=" border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">BUYER</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{buyertname}</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">STYLE</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{style}</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">DECRIPTION</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{description}</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">QUANTITY:</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{quantity}</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">MERCHANT</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{merchant}</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">SHIP DATE</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{shipdate}</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">PLAN DATE</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{plandate}</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">PROD/DAY</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{prod}</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">LEAD TIME</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{leadday} Days</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">LEAD TIME AS PLAN</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{}</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">Acctual Ex-Factory</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{}</dd>
              </div>
              
            </dl>
          </div>
        </div>
        <div class="overflow-x-auto w-2/3">
          <table class="table table-xs">
            <thead>
              <tr>
                <th></th> 
                <th>Name</th> 
                <th>Start Date</th> 
                <th>Days</th> 
                <th>Done</th> 
              </tr>
            </thead> 
            <tbody>
              
                  <tr>
                    <th>{++i}</th> 
                    <td>PO Sheet</td>
                    <td> <DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fit Sample</td>
                    <td> <DatePicker selected={fitsample} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td> <DatePicker selected={fitsampleDays} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setfitsampleDays(date)}  /></td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fabrics AW</td>
                    <td> <DatePicker selected={faw} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Accs. AW</td>
                    <td> <DatePicker selected={aaw} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fabrics LD,S/O Send</td>
                    <td> <DatePicker selected={fsend} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td><DatePicker selected={fsendDays} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setfsendDays(date)}  /></td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fit Sample Cmmnts</td>
                    <td> <DatePicker selected={fcmt} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fabrics LD,S/O Cmmnts</td>
                    <td> <DatePicker selected={fabcmt} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Accs. Send for approval</td>
                    <td> <DatePicker selected={acca} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Accs. Send for approval</td>
                    <td> <DatePicker selected={accmt} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fabric booking</td>
                    <td> <DatePicker selected={fb} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setfb(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fabric In house</td>
                    <td> <DatePicker selected={fhouse} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setfhouse(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Accs Booking</td>
                    <td> <DatePicker selected={accbooking} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setaccbooking(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>PP Sample send</td>
                    <td> <DatePicker selected={ppsend} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setppsend(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>PP sample cmmnts</td>
                    <td> <DatePicker selected={ppcmt} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setppcmt(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Cutting</td>
                    <td> <DatePicker selected={cutting} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setcutting(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Sewing Start</td>
                    <td> <DatePicker selected={SewingStart} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setSewingStart(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>test</td>
                    <td> <DatePicker selected={test} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => settest(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Sewing Finish</td>
                    <td> <DatePicker selected={SewingFinish} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setSewingFinish(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Finish</td>
                    <td> <DatePicker selected={Finish} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setFinish(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>FRI</td>
                    <td> <DatePicker selected={Fri} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setFri(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Ex-Factory</td>
                    <td> <DatePicker selected={exFri} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setexFri(date)}  /></td> 
                    
                    <td>0 days</td> 
                    <td><DatePicker selected={startDate} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                  </tr>
                
            </tbody> 
            <tfoot>
              <tr>
                <th></th> 
                <th>Name</th> 
                <th>Start Date</th> 
                <th>Days</th> 
                <th>Done</th> 
                
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
};

export default Dashborad;