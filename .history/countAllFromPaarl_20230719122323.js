

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



export default allPaarl()