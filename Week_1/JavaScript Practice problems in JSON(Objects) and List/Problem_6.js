var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], 
            [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 //Your code
 let obj ={};
 for(let itr in arr)
 {
     let subArr=arr[itr];
     let obj={};
     for(let subitr in subArr)
     {
         let objArr=subArr[subitr];
         obj[objArr[0]]=objArr[1];
     }

     tranformEmployeeList.push(obj);
    }
         
 return tranformEmployeeList;
}