import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const yearlyPlan = createPlan()

const bean = createSoybean()
const potato = createPotato()
const asparagus = createAsparagus()
const sunflower = createSunflower()
const wheat = createWheat()
const corn = createCorn()

const cropArray = [bean, potato, asparagus, sunflower, wheat, corn]

console.log(cropArray)