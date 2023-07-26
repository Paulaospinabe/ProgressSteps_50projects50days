/*Se crean constantes para cada accion*/

const progreso = document.getElementById('progresos')
const ant = document.getElementById('ant')
const sig = document.getElementById('sig')
const niveles = document.querySelectorAll('.nivel')

let currentActive = 1  /*Hace avanzar de a 1*/

sig.addEventListener('click', () => {
    currentActive++  /*Realiza el avance (siguiente)*/

    if(currentActive > niveles.length) {
        currentActive = niveles.length
    }

    avanzar()  /*Se crea una nueva funcion*/
})

ant.addEventListener('click', () => {
    currentActive--  /*Devuelve el avance (anterior)*/

    if(currentActive < 1) {
        currentActive = 1
    }

    avanzar()
})

function avanzar() {
    niveles.forEach((niveles, idx) => {
        if(idx < currentActive) {
            niveles.classList.add('active')
        } else {
            niveles.classList.remove('active')
        }
    })

    const llenar = document.querySelectorAll('.active')

    /*Se usa style para tener las reglas del elemento */ 
    /*a "llenar" y a "niveles" se resta 1 para que empiece desde cero*/
    /**Todo se divide y el resultado se multiplica por 100% para que "se rellene" completamente la barra del progreso*/
    progreso.style.width = (llenar.length - 1) / (niveles.length - 1) * 100 + '%'

/*Se habilita los botones siguiente y anterior, si currenactive es igual a 1, se deshabilita el botón de anterior.
 Si currentActive es igual al array niveles, se deshabilita el botón sigguiente. 
 Fuera de eso lo dos botones se habilitan*/

    if(currentActive === 1) {
        ant.disabled = true
    } else if(currentActive === niveles.length) {
        next.disabled = true
    } else {
        ant.disabled = false
        sig.disabled = false
    }
}