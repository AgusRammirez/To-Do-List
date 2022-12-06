let input = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")

class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea){

        let inputItem = document.createElement("input")
        inputItem.value = nuevaTarea
        inputItem.classList.add("item-input")
        inputItem.type = "text"
        inputItem.disabled = true

        let itemBox = document.createElement("div")
        itemBox.classList.add("item")

        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
        botonEditar.classList.add("boton-editar")

        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
        botonRemover.classList.add("boton-remover")

        itemBox.appendChild(inputItem)
        itemBox.appendChild(botonEditar)
        itemBox.appendChild(botonRemover)
        container.appendChild(itemBox)

        botonEditar.addEventListener("click", function() {
                if (inputItem.disabled == true) {
                    inputItem.disabled = false
                    botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
                }
                else {
                    inputItem.disabled = true
                    botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
                }
        })
        
        botonRemover.addEventListener("click", function () {
            container.removeChild(itemBox)
        })
    }
}

function chequearInput() {
    if (input.value != "") {
        new Item(input.value);
        input.value = ""
    }
}

botonAgregar.addEventListener ("click", chequearInput)




