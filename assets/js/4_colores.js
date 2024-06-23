const divs = ['azul', 'rojo', 'verde', 'amarillo'];
divs.forEach(id => {
    document.getElementById(id).addEventListener('click', function() {
        this.style.backgroundColor = 'black';
    });
});

let colorActual = '';

document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');
    switch(event.key) {
        case 'a':
            colorActual = 'pink';
            keyDiv.style.backgroundColor = colorActual;
            break;
        case 's':
            colorActual = 'orange';
            keyDiv.style.backgroundColor = colorActual;
            break;
        case 'd':
            colorActual = 'skyblue';
            keyDiv.style.backgroundColor = colorActual;
            break;
        case 'q':
            crearDiv('purple');
            break;
        case 'w':
            crearDiv('gray');
            break;
        case 'e':
            crearDiv('brown');
            break;
    }
});

function crearDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.margin = '10px';
    document.body.appendChild(newDiv);
}
