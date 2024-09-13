function distanceFromHqInBlocks (blocks) {
    const hq = 42
    let distance = hq - blocks

    if (distance > 0) {
        return distance
    }
    
        distance = distance * -1
        return distance
    
    
}

function distanceFromHqInFeet  (point) {
    let feet = distanceFromHqInBlocks(point)*264
    return feet
}

function distanceTravelledInFeet (start, stop) {
    let blocks = stop - start
    let feet
    if (blocks < 0) {
        blocks = blocks * -1
        }
    
    feet = blocks*264
    return feet


}

function calculatesFarePrice  (start, end) {
    let distance = distanceTravelledInFeet(start, end)
    if (distance >2500) {
        return 'cannot travel that far'
    }
    if (distance > 2000) {
        return 25
    }

    if (distance > 400 && distance < 2000) {
        let price 
        price = (distance-400) * 0.02
        return price
    }

    return 0
}