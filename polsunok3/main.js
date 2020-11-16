document.querySelector('#btn').onclick = ClickBTN;

function ClickBTN(){

	num = document.querySelector('input[name="amountRange"]').value;
	num = num * 100;
	str = '' + num;
	str*100;

		result = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, " $1 '");
		document.querySelector('#serchNamber').innerHTML = result;
		console.log(result) 	
		

}


