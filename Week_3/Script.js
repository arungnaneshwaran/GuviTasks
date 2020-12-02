// create a req variable
var request = new XMLHttpRequest();

//open the request
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//true is for try & exception block- asyncronous .

//send request
request.send();

//load the response
request.onload = () =>{
    console.log(request);
    console.log(request.status);
    let NewArr=[];
    let data = JSON.parse(request.responseText);
    const AsianCountries = data.filter(item => item.region == 'Asia').map(item => item.name);
    const PopulationLessThan2Lakhs = data.filter(item => item.population < 200000).map(item => item.name);
    const ForEachFunction = data.forEach(element => {
        let temp={};
        temp.name=element.name;
        temp.capital=element.capital;
        temp.flag=element.flag;
        NewArr.push(temp);
        
    });
    let tot=0;
    const TotalPopulation=data.reduce((tot,item)=>{
        return (item.population+tot);
    });

    console.log(PopulationLessThan2Lakhs);
    console.log(AsianCountries);
    console.log(TotalPopulation);
    console.log(NewArr);
}



  