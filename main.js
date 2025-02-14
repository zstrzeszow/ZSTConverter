const sasin = document.getElementById('sasin');
const sernik = document.getElementById('sernik');
const krzeslo = document.getElementById('krzeslo');
const kart = document.getElementById('kart');
const slupek = document.getElementById('slupek');

const sasinVal = 70000000;
const sernikVal = 29.99;
const krzesloVal = 29915.31;
const kartVal = 198.15;
const slupekVal = 10000;

function update(val) {
	if(val == ""){
		sasin.textContent = "0";
		sernik.textContent = "0";
		krzeslo.textContent = "0";
		kart.textContent = "0";
		slupek.textContent = "0";
	} else {
		sasin.textContent = (val / sasinVal);
		sernik.textContent = (val / sernikVal);
		krzeslo.textContent = (val / krzesloVal);
		kart.textContent = (val / kartVal);
		slupek.textContent = (val / slupekVal);
	}
}