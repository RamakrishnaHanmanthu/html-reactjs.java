function checkAge(){
    let string= "hanmathuramakrishna@gmail.com"
if (string.match("@gmail.com")){
    console.log("success"+ "  " +string);

}
else{
    console.log("failure");
}

    return new Promise((reslove,reject)=> {
        if(age>=18){
            reslove("success" +string);
        }else{
            reject("failure");
        }
    })
}

function promise(){
    checkAge()
    .then((message)=>{
        document.getElementById("result").innerHTML = message;
    
    })
    .catch((error)=>{
        console.log("test");
    })
}
promise();

