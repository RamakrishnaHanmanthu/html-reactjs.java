function checkAge(){
    let age = parseInt(document.getElementById("age").value);
    let element = document.getElementById("age");

    return new Promise((reslove,reject)=> {
        if(age>=18){
            reslove("success:you are an adult");
        }else{
            reject("failure:you are not an adult");
        }
    })
}

function promise(){
    checkAge()
    .then((message)=>{
        document.getElementById("result").textContent = message;
    
    })
    .catch((error)=>{
document.getElementById("result").textContent = error;
    })
}


