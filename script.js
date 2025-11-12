function firstChar(text) {
  // your code here
	
	if(text==="") return "";
	let count=0;
	for(let i=0;i<text.length;i++){
		if((text[i]>='a' && text[i]<='z') || (text[i]>='A' && text[i]<='Z') return text[i] ))
         count++;
	}
	if(count==text.length) return "";
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
