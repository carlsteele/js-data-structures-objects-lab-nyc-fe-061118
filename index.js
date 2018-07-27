// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
  let copyDriver = {...driver}
  copyDriver[key] = value 
  return copyDriver 
} 

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  

driver[key] = value;
return driver 
}

function deleteFromDriverByKey()
{
let copy = {...driver}
delete copy [key]
return copy
}
