let storeUSD = [5, 6, 7, 8, 9];

/**
 * @param {number[]} store @returns 
 */
function toEuros(store){
    return store*0.85;
}

let storeEUR = storeUSD.map(toEuros);

console.log(`EUR Store: ${storeEUR}`);
console.log(`USD Store: ${storeUSD}`);

document.write(`<BR>EUR Store: ${storeEUR}`);
document.write(`<BR>USD Store: ${storeUSD}`);