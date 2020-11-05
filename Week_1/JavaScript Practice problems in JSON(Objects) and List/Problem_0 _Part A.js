var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
   console.log(cat);

//1.Add height and weight to Fluffy
cat.height = 5;
cat.weight = 10;

//2.Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = "Fluffyy";

//3.List all the activities of Fluffyy’s catFriends.
let catActivities=[];
for (let key in cat.catFriends){
    catActivities = catActivities.concat(cat.catFriends[key].activities);
}
console.log(catActivities);

//4.Print the catFriends names.
let catFriendsname=[]
for (key in cat.catFriends){
    catFriendsname = catFriendsname.concat(cat.catFriends[key].name);}

console.log(catActivities);

//5.Print the total weight of catFriends
let catFriendsweight=0
for (key in cat.catFriends){
    catFriendsweight += cat.catFriends[key].weight);}

console.log(catFriendsweight);

//6.Print the total activities of all cats (op:6)


//7.Add 2 more activities to bar & foo cats


//8.Update the fur color of bar


