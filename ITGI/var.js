let a = 1
const b = 1
a = 2 
//b = 2

function teste() {
    for (var i = 0; i < 5; i++) {
        // lol

    }

    for (let j = 0; j < 5; j++) {
        // lol    
        console.log(`j: ${j}`)
    }
    console.log(`i: ${i}`)
}
teste()