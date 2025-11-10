import { useState } from "react";
export default function App(){
  return(
    <div className="m-4">
    <div className="m-4 flex justify-end">
      <input className="border-2 bg-sky-500 rounded-full border-transparent p-3" type="button" value="Connect To Metamask"/>
    </div>
    <p className='font-bold m-4'>Enter Certificate Details</p>
    <div className='flex mb-2'>
    <p className='mr-2'>Certificate Id:</p>
    <input className='border border-black' type="text" name="id"/>
    </div>
    <div className='flex mb-2'>
      <p className='mr-2'>Candidate Name :</p>
      <input className='border border-black' type="text" name="name" />
    </div>
    <div className='flex mb-2'>
      <p className='mr-2'>Course :</p>
      <input className='border border-black' type="text" name="course" />
    </div>
    <div className='flex mb-2'>
      <p className='mr-2'>Grade :</p>
      <input className='border border-black' type="text" name="grade" />
    </div>
    <div className='flex mb-2'>
      <p className='mr-2'>Date :</p>
      <input className='border border-black' type="date" name="date" />
    </div>
    <div className='flex justify-center'>
      <input className='bg-sky-500 rounded-full p-2' type="button" value="Submit" />
    </div>
    <div>
      <p className='font-bold m-4'>View Cetificate</p>
      <div className='flex '>
        <p className='mr-2'>Enter Certificate Id :</p>
        <input className='border border-black m-4' type="text" name="cid"/>
        <input className='bg-sky-500 rounded-full p-2' type="button" value="View"/>
      </div>
    </div>
    </div>
  )
}