const winnerNumber = [123, 456];
const myList = [123, 778, 556, 456, 456, 123, 123];


winnerNumber.forEach(num => {
    let counter = 0;
    myList.forEach((item, index) => {
        if (num === item) {
            counter += 1;
            let myWin = [num, counter];
            console.log (`winning number: ${myWin[0]}, winning times: ${myWin[1]}`);
        }
    })
})

/* Results display can be optimized by logging under a condition as follows: 
if (index === item.length - 1) {
    console.log (`winning number: ${myWin[0]}, winning times: ${myWin[1]}`);
}

expected results ==> winning number: 123, winning times: 3
                     winning number: 456, winning times: 2

but as i have try implementing this code, it breaks out of the first forEach loop
and display only winning number: 123, winning times: 3.

I cannot manage to fix this issue at the moment. I try to explain this in order
to show my thinking process. */

