myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
/*   let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3]; */
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
/*   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);
 */

  //ForEach
myInfo.favoriteFoods.forEach((food) => {
    // Crear un nuevo elemento <li> para cada comida favorita
    let favoriteFoodItem = document.createElement("li");
    favoriteFoodItem.textContent = food; // Asignar el valor de la comida
    // Agregar el <li> al <ul> en el html
    document.querySelector("#favorite-foods").appendChild(favoriteFoodItem);
});

myInfo.hobbies.forEach((hobby) => {
    let hobbyItem = document.createElement("li");
    hobbyItem.textContent = hobby;
    document.querySelector("#hobbies").appendChild(hobbyItem);
});

myInfo.placesLived.forEach((place)=>{
    let placeItem = document.createElement("dt");
    let lengthItem = document.createElement("dt");

    placeItem.textContent = place.place;
    lengthItem.textContent = place.length;

    document.querySelector("#places-lived").appendChild(placeItem);
    document.querySelector("#places-lived").appendChild(lengthItem);
});

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log("Using for");
// Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
for (let i = 0; i < studentReport.length; i++) {
    if(studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }else{
        console.log("The condition is not meet")
    }
}

console.log("Using while");
// Repeat the previous programming snippet by using a while loop.
let i = 0;
while (i < studentReport.length) {
    if(studentReport[i] < LIMIT){
        console.log(studentReport[i])
    } i++;
}

// Repeat the previous programming snippet by using a forEach loop.
console.log("Using forEach");
studentReport.forEach((number)=> {
    if(number < LIMIT){
        console.log(number);
    }
});

console.log("Using for ... in");
// Repeat the previous programming snippet by using a for...in loop.
for(let number in studentReport){
    if (studentReport[number] < LIMIT) {
        console.log(studentReport[number]);
    }
}

