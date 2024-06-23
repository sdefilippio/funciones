function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

function alternarTitulo(titulo) {
    const colorNormal = '';       
    const colorDestacado = 'yellow';  
    const tamanoNormal = '3em';   
    const tamanoDestacado = '4em'; 

    if (titulo.style.backgroundColor === colorDestacado) {
        titulo.style.backgroundColor = colorNormal;
        titulo.style.fontSize = tamanoNormal;
    } else {
        titulo.style.backgroundColor = colorDestacado;
        titulo.style.fontSize = tamanoDestacado;
    }
}

const ele = document.getElementById("ele1-pintar");
const titulo = document.getElementById("titulo-pintar");

let esAmarillo = false;

function alternarColor(elemento) {
    if (!esAmarillo) {
        pintar(elemento, 'yellow');
        esAmarillo = true;
    } else {
        pintar(elemento, 'green');
        esAmarillo = false;
    }
}

ele.addEventListener("click", function() {
    alternarColor(this);
});

titulo.addEventListener("click", function() {
    alternarColor(this);
});


const keyColorMap = {
    'a': 'pink',
    's': 'orange',
    'd': 'lightblue'
};

document.addEventListener('keydown', (event) => {
    if (event.key in keyColorMap) {
        const color = keyColorMap[event.key];
        pintar(ele, color);
        pintar(titulo, color);
        esAmarillo = false; 
    }
});
