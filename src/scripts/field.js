let myField = []

export const addPlant = (seedObj) => {
    myField.push(seedObj)
}

export const usePlants = () => {
    return myField.slice()
}