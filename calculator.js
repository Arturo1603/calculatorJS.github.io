//* animacion

let theme1 = document.querySelector("#theme_1");
let theme2 = document.querySelector("#theme_2");
let theme3 = document.querySelector("#theme_3");
let changeTheme = document.querySelector("body");
let circlePosition = document.querySelector("#circle-theme");

theme1.addEventListener("click", () => {
    changeTheme.setAttribute("id", "theme1");
    circlePosition.style.justifyContent = "flex-start";

});

theme2.addEventListener("click", () => {
    changeTheme.setAttribute("id", "theme2");
    circlePosition.style.justifyContent = "center";

});

theme3.addEventListener("click", () => {
    changeTheme.setAttribute("id", "theme3");
    circlePosition.style.justifyContent = "flex-end";

});







const ops = {
    sumar: function sumarNumeros(n1, n2) { return (n1) + (n2) },
    restar: function restarNumeros(n1, n2) { return (n1) - (n2) },
    multiplicar: function multiplicarNumeros(n1, n2) { return (n1) * (n2) },
    dividir: function dividirNumeros(n1, n2) { return (n1) + (n2) },
}






