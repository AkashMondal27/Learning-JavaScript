//async function
async function hello() {
    console.log("hello");
}

//async-awit 
function api(){  //async function always returns a promise.
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
          console.log("weatheer data");
        resolve("200")
        } , 3000);
    });
}

async  function getWeatherData(){
        await api(); // 1ST CALL
        await api(); // 2nd CALL
}
