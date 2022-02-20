const sketchBox = document.getElementById('sketch-box')

function createGrid() {
    let i = 0
    while (i < 256) {
        var element = document.createElement('div')
        element.classList.add('cell')
        sketchBox.appendChild(element)
        i++;
    }
}

createGrid()

const cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black'
    })
})

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
        cell.remove()
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
