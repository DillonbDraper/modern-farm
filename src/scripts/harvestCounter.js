export const harvestCounter = (harvest) => {
    let asparagusCount = 0
    let cornCount = 0
    let potatoCount = 0
    let soybeanCount = 0
    let sunflowerCount = 0
    let wheatCount = 0

    for (const plant of harvest) {
        if (plant.type === "Corn") {
            cornCount += 3
        } else if (plant.type === "Asparagus") {
            asparagusCount += plant.output
        } else if (plant.type === "Potato") {
            potatoCount += plant.output
        } else if (plant.type === "Soybean") {
            soybeanCount += plant.output
        } else if (plant.type === "Sunflower") {
            sunflowerCount += plant.output
        } else if (plant.type === "Wheat") {
            wheatCount += plant.output
        }
    }

    return [asparagusCount, cornCount, potatoCount, soybeanCount, sunflowerCount, wheatCount]
}