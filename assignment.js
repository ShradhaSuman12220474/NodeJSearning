function downloader(url, cb) {
    // write a dummy impl using setTimeout to show a delay 
    console.log("Started Downloading");
    setTimeout(()=>{
        console.log("downloading done");
        let downloadedFile="Dummy";
        cb(downloadedFile);

    },4000);
}

function writeFile(data, cb) {
    // write a dummy impl using setTimeout to show a delay
    console.log("Starting writing data",data);
    setTimeout(()=>{
        console.log("Writting done");
        let file="dummy.txt";
        cb(file);

    },2000) 
}

function uploadFile(fileName, newUrl, cb) {
     // write a dummy impl using setTimeout to show a delay
     console.log("Starting uploading file ",fileName,"on the url",  newUrl);
     setTimeout(()=>{
        console.log("Uploading done");
        let uploadResponse="SUCCESS";
        cb(uploadResponse);


     },3000); 
}

console.log("Starting the process");//call back hell can be seen here
downloader("www.google.com",(downloadedFile)=>{
    writeFile(downloadedFile,(fileName)=>{
        uploadFile(fileName,"Amazon.com",(response)=>{
            console.log(response);
        })
    })
});