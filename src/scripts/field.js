let myField = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        for (const seed of seedObj) {
            myField.push(seed)
        }
    } else {
        myField.push(seedObj)
    }
}

export const usePlants = () => {
    return myField.slice()
}