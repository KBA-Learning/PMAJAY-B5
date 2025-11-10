import { useState } from "react";
import { createWalletClient,custom } from "viem";
import { hardhat } from "viem/chains";
import { writeContract,readContract } from "viem/actions";
import cert from './assets/Cert.json';

export default function App(){
  const [formdata,setFormdata] = useState({
                                            id:'',
                                            name:'',
                                            course:'',
                                            grade:'',
                                            date:''
                                         })
  const [addr,setAddr] = useState(null)
  const [ID,setId] = useState()

  const client = createWalletClient({        //we created a client for communicating with blockchain
    chain: hardhat,
    transport:custom(window.ethereum)
  })

  async function connectmetamask(){
    const [Addr] =await client.requestAddresses()
    setAddr(Addr)
    console.log(addr);
    
  }

  function getId(){
    const id = document.getElementById("cid").value;
    setId(id)
  }

  function handleChange(event){
    const {name,value} = event.target;
    setFormdata((prevState)=>({...prevState,[name]:value}))
  }

  async function handleSubmit(){
    console.log(formdata);
    console.log(addr);
    console.log(cert.ContractAddress);
    
    const Id = parseInt(formdata.id)
    const txhash = await writeContract(client,{
      address:cert.ContractAddress,
      abi:cert.abi,
      functionName:'issue',
      args:[Id,formdata.name,formdata.course,formdata.grade,formdata.date],
      account:addr
    })
    
    console.log(txhash);
  }

  async function viewCertificate(){
    const txDeatails = await readContract(client,{
      address:cert.ContractAddress,
      abi:cert.abi,
      functionName:"Certificates",
      args:[ID],
      account:addr
    })
  }

  return(
    <div className="m-4">
    <div className="m-4 flex justify-end">
      <input className="border-2 bg-sky-500 rounded-full border-transparent p-3" type="button" value="Connect To Metamask" onClick={connectmetamask}/>
    </div>
    <p className='font-bold m-4'>Enter Certificate Details</p>
    <div className='flex mb-2'>
    <p className='mr-2'>Certificate Id:</p>
    <input className='border border-black' type="text" name="id" onChange={handleChange}/>
    </div>
    <div className='flex mb-2'>
      <p className='mr-2'>Candidate Name :</p>
      <input className='border border-black' type="text" name="name" onChange={handleChange}/>
    </div>
    <div className='flex mb-2'>
      <p className='mr-2'>Course :</p>
      <input className='border border-black' type="text" name="course" onChange={handleChange}/>
    </div>
    <div className='flex mb-2'>
      <p className='mr-2'>Grade :</p>
      <input className='border border-black' type="text" name="grade" onChange={handleChange}/>
    </div>
    <div className='flex mb-2'>
      <p className='mr-2'>Date :</p>
      <input className='border border-black' type="date" name="date" onChange={handleChange}/>
    </div>
    <div className='flex justify-center'>
      <input className='bg-sky-500 rounded-full p-2' type="button" value="Submit"onClick={handleSubmit}/>
    </div>
    <div>
      <p className='font-bold m-4'>View Cetificate</p>
      <div className='flex '>
        <p className='mr-2'>Enter Certificate Id :</p>
        <input className='border border-black m-4' type="text" id="cid" name="cid"/>
        <input className='bg-sky-500 rounded-full p-2' type="button" value="View" onClick={viewCertificate}/>
      </div>
    </div>
    </div>
  )
}