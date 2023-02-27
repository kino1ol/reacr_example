export default async function getProducts() {
	let dataResponse;
	let statusOk;
	await fetch("https://api.escuelajs.co/api/v1/products?offset=10&limit=10")
		.then((data) => {
			statusOk = data.ok;
			return data.json();
		})
		.then((data) => {
			dataResponse = data;
		})
		.catch(() => {
			alert("Server Error!");
		});
	if (!statusOk) {
        alert(dataResponse.message)
	} else {
        return dataResponse
    }
}
