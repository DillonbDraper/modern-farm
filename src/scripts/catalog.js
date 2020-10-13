import { addPlant, usePlants } from "./field.js"
import { harvestCounter } from "./harvestCounter.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

export const Catalog = () => {
    const yearlyPlan = createPlan()

    plantSeeds(yearlyPlan)
    const theField = usePlants();

    const theHarvest = harvestPlants(theField)

    const finalHarvest = harvestCounter(theHarvest)


    let htmlTarget = document.querySelector(".container")
        htmlTarget.innerHTML += `<section class="plant">Asparagus: ${finalHarvest[0]}</section>
        <section class="plant">Corn: ${finalHarvest[1]}</section>
        <section class="plant">Potatoes: ${finalHarvest[2]}</section>
        <section class="plant">Soybeans: ${finalHarvest[3]}</section>
        <section class="plant">Sunflowers: ${finalHarvest[4]}</section>
        <section class="plant">Wheat: ${finalHarvest[5]}</section>
        `
}