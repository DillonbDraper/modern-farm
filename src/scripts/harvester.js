export const harvestPlants = (plants) => {
    let harvest = [];
    for (const crop of plants) {
        if (Array.isArray(crop)) {
            const cornArray = crop[0]
            for (let i = 0; i <= cornArray.output; i++) {
                harvest.push(crop[0])
            }
        }

            for (let i = 0; i <= crop.output; i++) {
                harvest.push(crop)
            }
        }
    return harvest
}