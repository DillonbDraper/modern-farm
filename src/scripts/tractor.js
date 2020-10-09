import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (cropPlan) => {
    for (const outerArray of cropPlan) {
        for (const innerCrop of outerArray) {
            switch (innerCrop) {
                case "Potato":
                    const potato = createPotato()
                    addPlant(potato)
                    break;
                case "Asparagus":
                    const asparagus =createAsparagus()
                    addPlant(asparagus)
                    break;
                case "Corn":
                    const corn = createCorn()
                    addPlant(corn)
                    break;
                case "Wheat":
                    const wheat = createWheat()
                    addPlant(wheat)
                    break;
                case "Soybean":
                    const bean = createSoybean()
                    addPlant(bean)
                    break;
                case "Sunflower":
                    const flower = createSunflower()
                    addPlant(flower)
                    break;
            }
        }
    }
}