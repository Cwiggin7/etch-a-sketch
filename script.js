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
    cells.forEach(cell => {
        cell.style.backgroundColor = 'transparent'
    })
})

document.querySelector('[data-black]').addEventListener('click', () => {
    removeEvent()
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black'
        })
    })
})

document.querySelector('[data-rainbow]').addEventListener('click', () => {
    removeEvent()
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            var r = () => Math.random() * 256 >> 0
            cell.style.backgroundColor = `rgb(${r()}, ${r()}, ${r()})`
        })
    })
})

function removeEvent() {
    cells.forEach(cell => {
        cell.removeEventListener('mouseover', event)
    })
}
