// should take in different status codes, the cause and then give back an appropriate message

const handleServerError = async (res) => {
	let message = "We're sorry, something went wrong";
	try {
		const data = await res.json();
		// console.log("server error", data.error.message);
		if (data.error && data.error.message) {
			message = data.error.message;
			// console.log("getting here");
		}
	} catch (err) {
		console.log("Error parsing response:", err);
	}
	return new Error(message);
};

export default handleServerError;
