var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 // your code here
 var expectedstr=JSON.stringify(actual);
 var actualstr=JSON.stringify(expected);
 if(expectedstr===actualstr)
 {
     console.log("Passed");
 }
 else{
     console.log("FAILED ["+testName+"] Expected: "+expectedstr+", but got : "+actualstr);
 }

}