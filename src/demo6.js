const getMaxNumber = (numbersArray) => numbersArray.reduce((accumulator, currentValue) => accumulator < currentValue  ? currentValue : accumulator);

const getMinNumber = (numbersArray) => numbersArray.reduce((accumulator, currentValue) => accumulator > currentValue  ? currentValue : accumulator);

const getAverage = (numbersArray) => {
    return numbersArray.reduce((accumulator, currentValue, idx) => {
        if (idx === numbersArray.length - 1 ){
            accumulator += currentValue;
            return accumulator / numbersArray.length;
        }else{
            return accumulator + currentValue;
        }
    })
}
module.exports = { getMaxNumber, getMinNumber, getAverage };
