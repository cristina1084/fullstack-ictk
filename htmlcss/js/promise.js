var mypromise = new Promise((resolve,reject)=>{
    var grade = "A+";
    if(grade == "A") resolve();  //can pass arguments
    else reject();

});

mypromise.then(()=>{                //receive values
    console.log("Promise Resolved");
    
})
.catch(()=>{
    console.log("Promise Rejected");
    
})