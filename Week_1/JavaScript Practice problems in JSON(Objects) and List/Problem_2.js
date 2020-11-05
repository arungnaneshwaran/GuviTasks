function printAllKeys(obj) {
 // your code here
 var resultArray=[];
    for(key in obj){
        resultArray.push(key);
    }
    console.log(resultArray)
}