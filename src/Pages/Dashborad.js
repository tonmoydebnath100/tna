import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Dashborad = () => {
  const [tnadetails, setTnadetails]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/details')
    .then(res=>res.json())
    .then(data=> setTnadetails(data))
  },[])
    const tna=[
      {
        name:"PO Sheet",
      },
      {
        name:"Fit Sample"
      },
      {
        name:"Fabrics AW"
      },
      {
        name:"Accs. AW"
      },
      {
        name:"Fabrics LD,S/O Send"
      },
      {
        name:"Fit Sample Cmmnts"
      },
      {
        name:"Fabrics LD,S/O Cmmnts"
      },
      {
        name:"Accs. Send for approval"
      },
      {
        name:"Accs. Approval Cmmnts"
      },
      {
        name:"Fabric booking"
      },
      {
        name:"Fabric In house"
      },
      {
        name:"Accs Booking"
      },
      {
        name:"PP Sample send"
      },
      {
        name:"PP sample cmmnts"
      },
      {
        name:"Cutting"
      },
      {
        name:"Sewing Start"
      },
      {
        name:"test"
      },
      {
        name:"Sewing Finish"
      },
      {
        name:"Finishing"
      },
      {
        name:"FRI"
      },
      {
        name:"Ex-Factory"
      },
      
    ]
    return (
      <div className='flex divide-x'>
        <div class="overflow-x-auto w-1/3">
        <div class=" border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">BUYER</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Tonmoy</dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">STYLE</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">DECRIPTION</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">QUANTITY:</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">MERCHANT</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">SHIP DATE</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">PLAN DATE</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">PROD/DAY</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">LEAD TIME</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">LEAD TIME AS PLAN</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
              </div>
              <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xs ms-3 font-medium leading-6 text-gray-900">Acctual Ex-Factory</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
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
              {
                tna.map((t,i)=>(
                  <tr>
                    <th>{++i}</th> 
                    <td>{t.name}</td> 
                    <td>Quality Control Specialist</td> 
                    <td>Littel, Schaden and Vandervort</td> 
                    <td>Canada</td> 
                    <td>12/16/2020</td> 
                    <td>Blue</td>
                  </tr>
                ))
              }
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