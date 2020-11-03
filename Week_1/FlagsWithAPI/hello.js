// create a req variable
var request = new XMLHttpRequest();

//open the request
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//true is for try & exception block- asyncronous .

//send request
request.send();

//load the response
request.onload = function(){
    var data = JSON.parse(this.response)
    var lenarr=Object.keys(data).length
    for(var i=0;i<lenarr;i++){
        console.log(data[i].name + " : "+data[i].flag+"\n")
    }
}
