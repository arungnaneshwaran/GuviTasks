var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
    var resultArray=[];
    for(key in obj){
        resultArray.push(obj[key]);
    }
    console.log(resultArray)
}