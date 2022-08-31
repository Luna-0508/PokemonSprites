//    raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

//LOOP FOR OTHER IMG POKEMON
for (let i = 1; i < 10; i++) {
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  container.appendChild(newImg);
}
