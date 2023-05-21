// I created a dictionary and then removed 
// the Model value from the dictionary.
function myDictionary() {
  let Car = {
    Brand: "Audi",
    Color: "Silver",
    Model: "A6",
    Age: '6',
  };
  delete Car.Model;
  document.getElementById('Dictionary').innerHTML = Car.Model;
}