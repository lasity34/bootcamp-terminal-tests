

var fromWhere = function(reg) {
	switch (reg) {
      case 'CY':  
        return 'Bellville';
      case  'CJ':
        return 'Paarl';
      case 'CA' :
        return 'Cape Town';
      default:
        return 'Some other place!'
               }
}

export default fromWhere