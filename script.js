function makeid(length) {
  // write your code here
	const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
