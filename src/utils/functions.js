export const getRandom = (max, min = 0) => Math.floor(Math.random() * (max - min) + min)

export const getColor = () => {
        const red = getRandom(256)
        const green = getRandom(256)
        const blue = getRandom(256)
        const clr = `rgb(${red},${green},${blue})`
        return clr;
    }