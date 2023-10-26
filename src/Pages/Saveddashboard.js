import { addBusinessDays, addDays, compareAsc, differenceInCalendarDays, differenceInDays, format, isFriday, parse, parseISO, subBusinessDays, subDays, toDate } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { DayPicker } from 'react-day-picker';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

import { Link, useLoaderData } from 'react-router-dom';

const Saveddashboard = () => {
    const {
        buyertname,
        quantity,
        style,
        merchant,
        description,
        shipdate,
        plandate,
        prod,
        startDate:start,
        Donestartdate:Dstartdate,
          DoneFitS:DFitS,
          DoneFaw:DFaw,
          DoneAaw:DAaw,
          DoneFabsend:DFabsend,
          DoneFcmt:DFcmt,
          DoneFabcmt:DFabcmt,
          DoneAsend:DAsend,
          DoneAcmt:DAcmt,
          Donefb:Dfb,
          Donefhouse:Dfhouse,
          DoneAbooking:DAbooking,
          Doneppsend:Dppsend,
          Doneppcmt:Dppcmt,
          Donecutting:Dcutting,
          Doness:Dss,
          Donetest:Dtest,
          Donesf:Dsf,
          Donef:Df,
          Donefri:Dfri,
          Doneexfri:Dexfri
        
      }=useLoaderData();
      let i=0;
      const [startDate, setStartDate] = useState((start!=='')? new Date(start):start);
      const [fitsample, setFitsample] = useState('');
      const [faw, setfaw] = useState('');
      const [aaw, setaaw] = useState('');
      const [leadday, setleadday] = useState(0);
      const [leaddayAsPlan, setleaddayAsPlan] = useState(0);
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
      const [fawD, setfawD] = useState(20);
      const [aawD, setaawD] = useState(20);
      const [fitcmtD, setfitcmtD] = useState(7);
      const [fcmtD, setfcmtD] = useState(10);
      const [asendD, setasendD] = useState(15);
      const [acmtD, setacmtD] = useState(10);
      const [fbD, setfbD] = useState(2);
      const [fhouseD, setfhouseD] = useState(60);
      const [abD, setabD] = useState(2);
      const [ppsendD, setppsendD] = useState(37);
      const [ppcmtD, setppcmtD] = useState(10);
      const [cuttingD, setcuttingD] = useState('OK');
      const [ssD, setssD] = useState(1);
      const [testD, settestD] = useState(4);

      const [Donestartdate, setDonestartdate] = useState((Dstartdate!=='')? new Date(Dstartdate):Dstartdate);
      const [DoneFitS, setDoneFitS] = useState((DFitS!=='')? new Date(DFitS):DFitS);
      const [DoneFaw, setDoneFaw] = useState((DFaw!=='')? new Date(DFaw):DFaw);
      const [DoneAaw, setDoneAaw] = useState((DAaw!=='')? new Date(DAaw):DAaw);
      const [DoneFabsend, setDoneFabsend] = useState((DFabsend!=='')? new Date(DFabsend):DFabsend);
      const [DoneFcmt, setDoneFcmt] = useState((DFcmt!=='')? new Date(DFcmt):DFcmt);
      const [DoneFabcmt, setDoneFabcmt] = useState((DFabcmt!=='')? new Date(DFabcmt):DFabcmt);
      const [DoneAsend, setDoneAsend] = useState((DAsend!=='')? new Date(DAsend):DAsend);
      const [DoneAcmt, setDoneAcmt] = useState((DAcmt!=='')? new Date(DAcmt):DAcmt);
      const [Donefb, setDonefb] = useState((Df!=='')? new Date(Df):Df);
      const [Donefhouse, setDonefhouse] = useState((Dfhouse!=='')? new Date(Dfhouse):Dfhouse);
      const [DoneAbooking, setDoneAbooking] = useState((DAbooking!=='')? new Date(DAbooking):DAbooking);
      const [Doneppsend, setDoneppsend] = useState((Dppsend!=='')? new Date(Dppsend):Dppsend);
      const [Doneppcmt, setDoneppcmt] = useState((Dppcmt!=='')? new Date(Dppcmt):Dppcmt);
      const [Donecutting, setDonecutting] = useState((Dcutting!=='')? new Date(Dcutting):Dcutting);
      const [Doness, setDoness] = useState((Dss!=='')? new Date(Dss):Dss);
      const [Donetest, setDonetest] = useState((Dtest!=='')? new Date(Dtest):Dtest);
      const [Donesf, setDonesf] = useState((Dsf!=='')? new Date(Dsf):Dsf);
      const [Donef, setDonef] = useState((Df!=='')? new Date(Df):Df);
      const [Donefri, setDonefri] = useState((Dfri!=='')? new Date(Dfri):Dfri);
      const [Doneexfri, setDoneexfri] = useState((Dexfri!=='')? new Date(Dexfri):Dexfri);

      
      function SubtractBussinessdays(from,Days){
        let i=0,newDate=from;
        Days++;
        while(i<=Days){
          if(isFriday(newDate)){
            Days++;
          }
          newDate=subDays(newDate,1);
          i++;
        }
        return newDate;
      }
      function additionBussinessdays(from,Days){
        let i=0,newDate=from;
        while(i!==Days){
          if(isFriday(newDate)){
            Days++;
          }
          newDate=addDays(newDate,1);
          i++;
        }
        return newDate;
      }
      useEffect(() => {
        if(startDate!==''){
        var a = shipdate.split("/");
        const lead=differenceInDays(new Date(a[2],a[1]-1,a[0]),startDate);
        setleadday(lead);
        const result = addDays(startDate, 7);
        setFitsample(result);
        const resultfs = addDays(result, 4);
        setfitsampleDays(resultfs);
        const result1 = addDays(startDate, 20);
        setfaw(result1);
        const result2 = addDays(startDate, aawD);
        setaaw(result2);

        }
      }, [startDate,fawD,aawD]);
      useEffect(()=>{
        if(aaw!==''){
          const result3 = addDays( aaw, fitcmtD);
          setfsend(result3);
          const result6 = addDays(aaw, asendD);
          setacca(result6);
        }
      },[aaw,fitcmtD,asendD])
      useEffect(()=>{
        if(fsend!==''){
          const resultfsend = addDays(fsend, 3);
          setfsendDays(resultfsend);
        }
      },[fsend])
      useEffect(()=>{
        if(fitsampleDays!==''){
          const result4 = addDays(fitsampleDays, fitcmtD);
          setfcmt(result4);
        }
      },[fitsampleDays,fitcmtD])
      useEffect(()=>{
        if(fsendDays!==''){
          const result5 = addDays(fsendDays, fcmtD);
        setfabcmt(result5);
        }
      },[fsendDays])
      useEffect(()=>{
        if(acca!==''){
          const result7= addDays(acca, acmtD);
          setaccmt(result7);
        }
      },[acca,acmtD])
      useEffect(()=>{
        if(fabcmt!==''){
          const result8= addDays(fabcmt, fbD);
        setfb(result8);
        }
      },[fabcmt,fbD])
      useEffect(()=>{
        if(fb!==''){
          const result9= addDays(fb, fhouseD);
        setfhouse(result9);
        const result11= addDays(fb, ppsendD);
        setppsend(result11);
        }
      },[fb,fhouseD,ppsendD])
      useEffect(()=>{
        if(accmt!==''){
          const result10= addDays(accmt, abD);
        setaccbooking(result10);
        }
      },[accmt])
      useEffect(()=>{
        if(ppsend!==''){
          const result12= addDays(ppsend, ppcmtD);
        setppcmt(result12);
        }
      },[ppsend,ppcmtD])
      useEffect(()=>{
        if(cutting!==''){
          const result14= addDays(cutting, ssD);
        setSewingStart(result14);
        }
      },[cutting,ssD])
      useEffect(()=>{
        if(SewingStart!==''){
          const result15= addDays(SewingStart, testD);
        settest(result15);
        const result16= additionBussinessdays(SewingStart, Math.ceil(quantity/prod));
        setSewingFinish(result16);
        }
      },[SewingStart,testD])
      useEffect(()=>{
        if(SewingFinish!==''){
          const result17= addDays(SewingFinish, (quantity<10000)?4:3);
        setFinish(result17);
        }
      },[SewingFinish])
      useEffect(()=>{
        if(Finish!==''){
          const result18= addDays(Finish,2);
        setFri(result18);
        }
      },[Finish])
      useEffect(()=>{
        if(Fri!==''){
          const result19= addDays(Fri,1);
        setexFri(result19);
        }
      },[Fri])
      useEffect(()=>{
        if(exFri!=='' && startDate!==''){
          
        const leadday=differenceInDays(exFri,startDate);
        setleaddayAsPlan(leadday);
        }
      },[exFri,startDate])
      useEffect(()=>{
        if(plandate!==''){
          var arr = plandate.split("/");
          const result13= SubtractBussinessdays(new Date(arr[2],(arr[1]-1),arr[0]),Math.ceil(quantity/prod));
          setcutting(result13);
          
          
        }
      },[plandate])
      useEffect(()=>{
        if(Donefhouse!==''){
          if(compareAsc(Donefhouse,cutting)===-1){
            setcuttingD('OK');
          }
          else{
            setcuttingD('Fabric Is Not In House');
          }
          
          
        }
      },[Donefhouse])
      const handleSubmit=()=>{
        const details={
          style:style,
          startDate:startDate,
          Donestartdate:Donestartdate,
          DoneFitS:DoneFitS,
          DoneFaw:DoneFaw,
          DoneAaw:DoneAaw,
          DoneFabsend:DoneFabsend,
          DoneFcmt:DoneFcmt,
          DoneFabcmt:DoneFabcmt,
          DoneAsend:DoneAsend,
          DoneAcmt:DoneAcmt,
          Donefb:Donefb,
          Donefhouse:Donefhouse,
          DoneAbooking:DoneAbooking,
          Doneppsend:Doneppsend,
          Doneppcmt:Doneppcmt,
          Donecutting:Donecutting,
          Doness:Doness,
          Donetest:Donetest,
          Donesf:Donesf,
          Donef:Donef,
          Donefri:Donefri,
          Doneexfri:Doneexfri


        }
      fetch('https://tna-server.vercel.app/infodataUpdate',{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(details)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })

      }
    return (
        <>
      <div className="navbar bg-base-300">
       
        <div className='navbar-start'>
          <a className=" btn btn-ghost normal-case text-xl">W. Apparels Ltd.</a>
        </div>
        <div className='navbar-end'>
          <Link to='/'><button  className='btn btn-ghost mx-2'>Cancel</button></Link>
          <button onClick={handleSubmit} className='btn btn-primary mx-2'>Save</button>
        </div>
        
      </div>
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
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{(leadday>=leaddayAsPlan)?
                <h1 className='text-green-600 font-bold'>{leaddayAsPlan} Days</h1>:<h1 className='text-red-600 font-bold'>{leaddayAsPlan} Days</h1>  
              }</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">Acctual Ex-Factory</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><input className='text-green-600 font-bold' value={exFri}/></dd>
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
                    
                    <td>{leadday} days</td> 
                    <td><DatePicker  placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Donestartdate} onChange={(date) => setDonestartdate(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fit Sample</td>
                    <td> <DatePicker selected={fitsample} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td> <DatePicker selected={fitsampleDays} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setfitsampleDays(date)}  /></td> 
                    <td><DatePicker  placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={DoneFitS} onChange={(date) => setDoneFitS(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fabrics AW</td>
                    <td> <DatePicker selected={faw} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td><input value={fawD} onChange={e => setfawD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker  placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={DoneFaw} onChange={(date) => setDoneFaw(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Accs. AW</td>
                    <td> <DatePicker selected={aaw} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td><input value={aawD} onChange={e => setaawD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker  placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={DoneAaw} onChange={(date) => setDoneAaw(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fabrics LD,S/O Send</td>
                    <td> <DatePicker selected={fsend} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td><DatePicker selected={fsendDays} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setfsendDays(date)}  /></td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={DoneFabsend} onChange={(date)=> setDoneFabsend(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fit Sample Cmmnts</td>
                    <td> <DatePicker selected={fcmt} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td><input value={fitcmtD} onChange={e => setfitcmtD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={DoneFcmt} onChange={(date)=> setDoneFcmt(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fabrics LD,S/O Cmmnts</td>
                    <td> <DatePicker selected={fabcmt} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td><input value={fcmtD} onChange={e => setfcmtD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={DoneFabcmt} onChange={(date)=> setDoneFabcmt(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Accs. Send for approval</td>
                    <td> <DatePicker selected={acca} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td><input value={asendD} onChange={e => setasendD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={DoneAsend} onChange={(date)=> setDoneAsend(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Accs. Approval Cmmnts</td>
                    <td> <DatePicker selected={accmt} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)}  /></td> 
                    
                    <td><input value={acmtD} onChange={e => setacmtD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={DoneAcmt} onChange={(date)=> setDoneAcmt(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fabric booking</td>
                    <td> <DatePicker selected={fb} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setfb(date)}  /></td> 
                    
                    <td><input value={fbD} onChange={e => setfbD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Donefb} onChange={(date)=> setDonefb(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Fabric In house</td>
                    <td> <DatePicker selected={fhouse} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setfhouse(date)}  /></td> 
                    
                    <td><input value={fhouseD} onChange={e => setfhouseD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Donefhouse} onChange={(date)=> setDonefhouse(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Accs Booking</td>
                    <td> <DatePicker selected={accbooking} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setaccbooking(date)}  /></td> 
                    
                    <td><input value={abD} onChange={e => setabD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={DoneAbooking} onChange={(date)=> setDoneAbooking(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>PP Sample send</td>
                    <td> <DatePicker selected={ppsend} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setppsend(date)}  /></td> 
                    
                    <td><input value={ppsendD} onChange={e => setppsendD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Doneppsend} onChange={(date)=> setDoneppsend(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>PP sample cmmnts</td>
                    <td> <DatePicker selected={ppcmt} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setppcmt(date)}  /></td> 
                    
                    <td><input value={ppcmtD} onChange={e => setppcmtD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Doneppcmt} onChange={(date)=> setDoneppcmt(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Cutting</td>
                    <td> <DatePicker selected={cutting} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setcutting(date)}  /></td> 
                    
                    <td>{
                      (cuttingD==='OK')? <h1 className='text-green-600 font-bold'>{cuttingD}</h1>:
                      <h1 className='text-red-600 font-bold'>{cuttingD}</h1>
                      }</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Donecutting} onChange={(date)=> setDonecutting(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Sewing Start</td>
                    <td> <DatePicker selected={SewingStart} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setSewingStart(date)}  /></td> 
                    
                    <td><input value={ssD} onChange={e => setssD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Doness} onChange={(date)=> setDoness(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>test</td>
                    <td> <DatePicker selected={test} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => settest(date)}  /></td> 
                    
                    <td><input value={testD} onChange={e => settestD(e.target.value)}  className='w-10 px-1' /> days</td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Donetest} onChange={(date)=> setDonetest(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Sewing Finish</td>
                    <td> <DatePicker selected={SewingFinish} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setSewingFinish(date)}  /></td> 
                    
                    <td></td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Donesf} onChange={(date)=> setDonesf(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Finish</td>
                    <td> <DatePicker selected={Finish} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setFinish(date)}  /></td> 
                    
                    <td></td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Donef} onChange={(date)=> setDonef(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>FRI</td>
                    <td> <DatePicker selected={Fri} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setFri(date)}  /></td> 
                    
                    <td></td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Donefri} onChange={(date)=> setDonefri(date)}  /></td> 
                  </tr>
                  <tr>
                    <th>{++i}</th> 
                    <td>Ex-Factory</td>
                    <td> <DatePicker selected={exFri} placeholderText="select a date" dateFormat="dd/MM/yyyy" onChange={(date) => setexFri(date)}  /></td> 
                    
                    <td></td> 
                    <td><DatePicker placeholderText="select a date" dateFormat="dd/MM/yyyy" selected={Doneexfri} onChange={(date)=> setDoneexfri(date)}  /></td> 
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
      </>
    );
};

export default Saveddashboard;