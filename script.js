function makeid(l) {
  // write your code here
	
	var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var result = ' ';
   // const charactersLength = characters.length;
	
    for ( var i = 0; i < l; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
