const imagetobase64 = async(file)=>{   //function to convert image to base64 format
    const reader = new FileReader();  //FileReader is a built-in JavaScript object that allows you to read the contents of files stored on the user's computer.
    reader.readAsDataURL(file);  //readAsDataURL method is used to read the contents of the specified Blob or File. When the read operation is complete, the result attribute contains a data: URL representing the file's data.

    const data = await new Promise((resolve,reject)=>{
        reader.onload = ()=>{   //onload event is triggered when the read operation is successfully completed.
            resolve(reader.result);  //reader.result contains the data URL
        };
        reader.onerror = (error)=>{
            reject(error);
        };
    });

    return data;  //return the base64 string
}

export default imagetobase64;