export const harvestPlants = (plants) => {
    let harvest = [];
    for (const crop of plants) {
        if (crop.type === "Corn") {
            for (let i = 0; i < crop.output; i += 2) {
                harvest.push(crop)
            }
        } else {
            for (let i = 0; i < crop.output; i++) {
                harvest.push(crop)
            }
        }
    }
    return harvest
}