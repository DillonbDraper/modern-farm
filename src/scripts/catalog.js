export const Catalog = (harvestedFood) => {
    let htmlTarget = document.querySelector(".container")
    let id = 1
    for (const food of harvestedFood) {
        htmlTarget.innerHTML += `<section class="plant" id="${id}"><img src=${food.icon}></section>`
        id++
    }
}