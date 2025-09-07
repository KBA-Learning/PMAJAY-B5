const fetchData=()=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             const add = 2+3;
             if(add==5){
                 resolve(add);
                // return add
             }
             else{
                 reject("The output is not correct");
                // return 0;
             }
         },2000)
     
 
     })
 }
 async function printK(){
 const k =await fetchData();
 console.log(k);
 console.log("Hello World");
 }
 printK();