const winnerNumber = [123, 456];
const myList = [123, 778, 556, 456, 456, 123, 123];
const winnerList = [];

winnerNumber.forEach((num, idx) => {
    let counter = 0;
    myList.forEach(item => {
        if (num === item) {
            counter += 1
            winnerList[idx] = { "winningNum": num, "winningTimes": counter };
        }
    })
})

winnerList.forEach((item) => {
    console.log(`Winning Number: ${item.winningNum}, Winning Times: ${item.winningTimes}`)
})

