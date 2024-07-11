const container = document.querySelector(".container");
for(let i = 1; i <= 16; i++){
    const rowDiv = document.createElement("div");
    container.appendChild(rowDiv);
}
for(let j = 1; j <= 16; j++){
    const colDiv = document.createElement("div");
    container.appendChild(colDiv);
}