let color = ["blue","red", "green", "white", "yellow", "brown","pink"];
let namecolor = ["blue","red", "green", "white","yellow", "brown","pink"];
let indicecolor = 0;



function changecolor() {
    document.body.style.backgroundColor = color[indicecolor];
    document.getElementById("namecolor").innerHTML = namecolor[indicecolor];
    indicecolor = (indicecolor + 1) % color.length;
}
function determineCouleurTexte(couleurfond) {
    let luminance = (0.300 * parseInt(couleurfond.substring(1, 3), 16) +
                    0.587 * parseInt(couleurfond.substring(3, 5), 16) +
                    0.114 * parseInt(couleurfond.substring(5, 7), 16)
    );
    return (luminance > 186) ? "black" : "white";
}