function displayType(character) {
  let characterType = character.getAttribute("data-character-type");
  alert(characterType + " is a model of " + character.innerHTML)
}