function myFunction(myObj, checkProp) {
    // Only change code below this line
    var myObj = {
        title: "Titanic",
        song: "My Heart Will Go On",
        genre: "drama",
        actor: "Not Found"
    };

    myObj.checkProp = "actor",
        myObj.checkProp = "song";
    myObj.checkProp = "genre",
        myObj.checkProp = "actor";

    return "Not found";
    // Only change code above this line

}
console.log(myFunction("title"));
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "title");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "song");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "genre");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "actor");
module.exports = myFunction;