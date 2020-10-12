export const Catalog = (harvestedFood) => {
    let htmlTarget = document.querySelector(".container")
    for (const food of harvestedFood) {
        htmlTarget.innerHTML += `<section class="plant">${food.type}</section>`
    }
}