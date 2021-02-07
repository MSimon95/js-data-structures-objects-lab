const driver = {};


function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, { [key]: value });
}
//"before each" hook for "returns a driver with the original key value pairs and the new key value pair":
//ReferenceError: driver is not defined

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
driver[key] = value;
    return driver;
}
// 1) updates `driver` with the given `key` and `
// value` (it is destructive) and returns the entire updated
//  driver
function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver)
    delete newDriver[key];
    return newDriver;
}
// deleteFromDriverByKey(driver, key)
// 1) deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
// 2) does not modify the original driver (it is non-destructive)
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}
// destructivelyDeleteFromDriverByKey(driver, key)
// returns driver without the delete key/value pair:
// ReferenceError: destructivelyDeleteFromDriverByKey is not defined
// at Context.<anonymous> (test/indexTest.js:56:23)
// at processImmediate (node:internal/timers:463:21)