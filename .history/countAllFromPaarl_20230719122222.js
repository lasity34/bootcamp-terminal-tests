var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

var allPaarl = function(str) {
	
  var newArr = []
  const reg = str.split(",");
  
  for (let i = 0; i < reg.length; i++) {
  	const newReg = reg[i].trim();
    
    if (newReg.includes("CJ")) {
    	newArr.push(newReg)
    }
  }
  return newArr
}

var regNumbersForPaarl = allPaarl(regNumbers);

export default regNumbersForPaarl