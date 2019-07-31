var mypromise = new Promise((resolve,reject)=>{
    var grade = "A+";
    if(grade == "A") resolve();
    else reject();

});

mypromise.then(()=>{
    console.log("Promise Resolved");
    
})
.catch(()=>{
    console.log("Promise Rejected");
    
})