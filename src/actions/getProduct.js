export default async function getProduct({params: {id}}) {
	let dataResponse;
	let statusOk;
	await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
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