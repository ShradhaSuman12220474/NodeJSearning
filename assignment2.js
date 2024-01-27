function downloader(url) {
    // write a dummy impl using setTimeout to show a delay 
    console.log("Started Downloading");
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let value="dummy"
            res(value);
        },4000);
    })
}

function writeFile(data) {
    // write a dummy impl using setTimeout to show a delay 
    console.log("Started writing ",data);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let fileName="dummy.txt";
            // rej("failed to write the file");
            res(fileName);
        },2000);
    });

}

function uploadFile(fileName, newUrl) {
     // write a dummy impl using setTimeout to show a delay
     console.log("Started Uploading ",fileName, "to the url",newUrl);
     return new Promise((res, resolve)=>{
        setTimeout(()=>{
            let value="SUCCESS"
            res(value);
        },3000);
     }) 
}

console.log("Starting the Process");

let response=downloader("google.com");
response.then(function fulfilHandeler(downloadedData){
    console.log("Downloading Done")
    // Now we are putting the downloaded data for the writting purpose
    let writeResponse=writeFile(downloadedData);
    writeResponse.then(function onfulfilHandeler(fileName){
        //now we will give this written file to uploader for uploading 
        let uploadResponse=uploadFile(fileName,"Amazon.com");
        uploadResponse.then(function fulfilHandeler(uploadMessage){
            console.log("Uploading Done");
            console.log(uploadMessage);
        },function regectHandeler(uploadMessage){
            console.log(uploadMessage);
        })
    },function regectHandeler(message){
        console.log(message);
    })
},function regectHandeler(downloadedData){
    console.log("failed to download the data");
});
