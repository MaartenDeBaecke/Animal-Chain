animals = ["cow"];

textAnimals = ["Pig", "Blue Whale", "Feret", "Leopard"];


function myFunction(){
  let input = document.getElementById("inp")
  let animal = input.value.toLowerCase();



  if (animal.charAt(0) !== (animals[animals.length -1]).slice(-1)){ //check if the animal starts with the right character
    document.getElementById("error").innerHTML = "Your animal should start with '" + (animals[animals.length -1]).slice(-1) + "'";
    document.getElementById("error").classList.add("errormsg1");
  } else if (animals.includes(animal)){//check if it's already used
    document.getElementById("error").innerHTML = "Carefull there, '" + animal + "' is already used!";
    document.getElementById("error").classList.add("errormsg1");
  }
  else {
    document.getElementById("error").classList.remove("errormsg1");
    animals.push(animal);

    let newP = document.createElement("p");
    let newBr = document.createElement("br");
    let text = document.createTextNode(animal);
    newP.appendChild(text);
    document.getElementById("player2").appendChild(newP);
    document.getElementById("player2").appendChild(newBr);

    document.getElementById("inp").value = "";
    console.log(animals);

  }

  return false;

}
