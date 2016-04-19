function suma(a, b) {
	return a >= 0 && b >= 0 ? a + b : "Ahorita no joven, mande cosas positivas";
}

function suma2(a,b) {
	if (a >= 0 && b >= 0) {
		return a + b;
	} else {
		return "Ahorita no joven, mande cosas positivas";
	}
}
console.log(suma(4,5));
console.log(suma(-5,8));