const BASE_URL = "/api/courses";

// export const get = async () => {

//     // try {
//     //     const res = await fetch(BASE_URL);

//     // } catch (err) {

//     // }
//     const res = await fetch(BASE_URL);

// 	if (res.ok) {
// 		try {
// 			const data = await res.json();
//             console.log("res.ok")
// 			return data;
// 		} catch (e) {
// 			console.error("Failed to parse JSON:", e);
// 			throw new Error("Failed to parse JSON");
// 		}
// 	} else {
// 		let message = "Something really went wrong";
// 		try {
// 			const errorData = await res.json();
// 			message = errorData.message || message;
//             //    console.log("we are here");
// 		} catch (e) {
//             // console.log('second catch ')
//             // return new Error(message);
// 			// Failed to parse error response as JSON, fallback to default message
// 		}
// 		return new Error(message);
// 	}
// };

const handleErrorOrParse = async (res) => {

    if (!res.ok) {
        if (res.status === 404) {
            throw new Error("404 - We could not find what you are looking for")
        } else {
            throw new Error("We're sorry, something went wrong")
        }
    } else {
        try {
            const data = await res.json();
            return data;
        } catch (err) {
            throw new Error("Failed to parse JSON - improper response")
        }
    }
}

export async function get() {
	try {
		const response = await fetch("http://localhost:5173/api/coursesss"); // to create error
		// const response = await fetch(BASE_URL);
        const data = await handleErrorOrParse(response)

        // console.log(response);
		// if (!response.ok) {
		// 	throw new Error(
		// 		"Network response was not ok " + response.statusText
		// 	);
		// }
        // const data = await response.json()
		return data;
	} catch (error) {
		// console.error("API get method error:", error);
		throw error;
	}
}


