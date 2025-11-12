import { Router } from "express";
import { createClient,http } from "viem";
import { hardhat,hoodi } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { writeContract,readContract } from "viem/actions";
import cert from '../assets/cert.json' with {type:'json'}
import dotenv from 'dotenv';

dotenv.config();

const routes = Router();

const client = createClient({
    chain:hoodi,
    account:privateKeyToAccount(process.env.PRIVATE_KEY),
    transport:http(process.env.HOODI_URL)
})

routes.get('/',(req,res)=>{
    console.log('Hello World');
    
})

routes.post('/issueCertificate',async(req,res)=>{
    const data = req.body
    console.log(req.body);
    
    console.log(cert.contract_address);
    
    const txHash = await writeContract(client,{
        address:cert.contract_address,
        abi:cert.abi,
        functionName:'issue',
        args:[data.id,data.name,data.course,data.grade,data.date]
    })

    console.log(txHash);

    res.status(201).json({msg:'Certificate created successfully'})
    
})

routes.get('/getCertificate/:id',async(req,res)=>{
    const ID = req.params.id;
    console.log(ID);

    const txDetails =await readContract(client,{
        address:cert.contract_address,
        abi:cert.abi,
        functionName:'Certificates',
        args:[ID]
    })

    console.log(txDetails);

    res.status(200).json(txDetails)
    
    
})

export default routes