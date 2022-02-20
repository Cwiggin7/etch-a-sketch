const sketchBox = document.getElementById('sketch-box')

function createGrid(size = 16) {
    let i = 0
    sketchBox.style.gridTemplateColumns = `repeat(${size}, auto)`;
    while (i < size*size) {
        var element = document.createElement('div')
        element.classList.add('cell')
        sketchBox.appendChild(element)
        i++
    }
}
createGrid()

let cells = document.querySelectorAll('.cell')
const gridSizeSlider = document.getElementById('grid-size-slider')
const output = document.getElementById('output')

addMouseoverEvent()

gridSizeSlider.onchange = function() {
    deleteGrid()
    createGrid(gridSizeSlider.value)
    cells = document.querySelectorAll('.cell')
    addMouseoverEvent()
    output.innerText = `${gridSizeSlider.value}x${gridSizeSlider.value}`
}

document.querySelector('[data-clear]').addEventListener('click', () => {
    clear()
})

document.querySelector('[data-black]').addEventListener('click', () => {
    removeMouseoverEvent()
    addMouseoverEvent()
})

document.querySelector('[data-rainbow]').addEventListener('click', () => {
    removeMouseoverEvent()
    addMouseoverEvent('rgb')
})

function removeMouseoverEvent() {
    cells.forEach(cell => {
        cell.removeEventListener('mouseover', event)
    })
}

function clear() {
    cells.forEach(cell => {
        cell.style.backgroundColor = 'transparent'
    })
}

function deleteGrid() {
    cells.forEach(cell => {
        cell.parentElement.removeChild(cell)
    })
}

function addMouseoverEvent(color = 'black') {
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (color === 'rgb') cell.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
            else cell.style.backgroundColor = `${color}`
        })
    })
}
