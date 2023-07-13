// Code your solution in this file!
// Code your solution in this file!

const driverNames = ['Joey', 'Robert', 'Ross', 'Chandler'];

const returnFirstTwoDrivers = function (driverNames) {
    return driverNames.slice(0, 2);
}

const returnLastTwoDrivers = function (driverNames) {
    return driverNames.slice(2);
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](driverNames));
console.log(selectingDrivers[1](driverNames));

const createFareMultiplier = (fareMultiplier) => {
    return function (fare) {
       return fareMultiplier * fare;
    };
}

const fareDoubler = (fare) => { return fare * 2;
}

const fareTripler = (fare) => { return fare * 3;
}

function selectDifferentDrivers(driverNames, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(driverNames) 
}

function selectDifferentDrivers(driverNames, returnLastTwoDrivers) {
    return returnLastTwoDrivers(driverNames) 
}