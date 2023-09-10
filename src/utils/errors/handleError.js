// should take in different status codes, the cause and then give back an appropriate message
// const handleServerError = async (res) => {

//     const message = "We're sorry, something went wrong";
// 	try {
// 		const data = await res.json();

//         console.log("server error", data.error.message);
// 		// If data will parse as JS - check if its in the error format
// 		if (data.error.message) {

// 			message = data.error.message;
//             console.log("getting herere")
// 		}
// 		// if its in format return an error with appropriate message
// 	} catch (err) {
// 		return new Error(message);
// 	}
// };

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

// const handleErrorOrParse = async (res) => {
// 	if (!res.ok) {
// 		if (res.status === 404) {
// 			throw new Error("404 - We could not find what you are looking for");
// 		} else {
// 			throw new Error("We're sorry, something went wrong");
// 		}
// 	} else {
// 		try {
// 			const data = await res.json();
// 			return data;
// 		} catch (err) {
// 			throw new Error("Failed to parse JSON - improper response");
// 		}
// 	}
// };

export default handleServerError;
