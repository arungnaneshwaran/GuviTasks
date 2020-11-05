var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
 // your code here
 var resultArray=[];
    for(key in obj){
        resultArray.push([key,obj[key]]);
    }
    console.log(resultArray)
}