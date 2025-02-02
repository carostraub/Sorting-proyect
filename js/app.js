window.onload = function () {

    let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    let pintas = ['pica', 'corazon', 'diamante','trebol']


 let nro = document.querySelector('#nro')
 let btnDraw = document.querySelector('#btnDraw')
 let btnSort = document.querySelector('#btnSort')

 let contenedor = document.querySelector('#contenedor')

 let ordenadas = document.querySelector('#ordenadas')

 let cartas = []

 btnDraw.addEventListener('click', generarCartas)
 btnSort.addEventListener('click',() => ordenarCartas(cartas))






 function generarCartas () {

    if(nro.value < 1 || nro.value > 10) {
       alert('Ingrese un numero entre el 1 y el 10')
       return;
    }

    console.log("Dibujando las cartas")
    cartas = []
    contenedor.innerHTML = ""


    for(let i = 1; i <= nro.value; i++ ) {
        //console.log(`Generando carta nro ${i}`)
        let rnv = generarRandomNumber(valores)
        let rnp = generarRandomNumber(pintas)

        let valor = valores[rnv]
        let pinta = pintas[rnp]


        let carta = dibujarCarta(valor, pinta)  
        cartas.push({valor, pinta})
        //console.log(carta) 
        contenedor.appendChild(carta)
    }
    console.log(cartas)
 }

function dibujarCarta (valor, pinta) {
    let div = document.createElement('div')
    div.classList.add('card', pinta)
    div.innerHTML = invertirValor(valor)
    return div
}



function ordenarCartas (arr = []) {
    console.log("Ordenando las cartas")
    let size = arr.length
    for(let i = 0; i < size - 1; i++){
        let minIndex = i
        for(let j = i +1; j < size; j++){
           if(arr[j].valor < arr[minIndex].valor) {
            minIndex = j
           }
        }

        if(minIndex !== i){
            const temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }

        let div = document.createElement('div')
        div.classList.add('contenedor')
        
        


        arr.forEach(({valor, pinta}) => {
            let carta = dibujarCarta(valor, pinta)
            div.appendChild(carta)
        })
        ordenadas.appendChild(div)

    }





 }


 function generarRandomNumber(arr = []) {
    return Math.floor(Math.random() * arr.length)
 }

 function invertirValor(valor){
    switch (valor) {
        case 1: return "A"
        case 11: return "J"
        case 12: return "Q"
        case 13: return "K"
        default: return valor
        
    }
 }

}