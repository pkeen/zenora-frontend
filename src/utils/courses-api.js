import sendRequest from "./send-request";
const BASE_URL = "/api/courses";

const handleErrorOrParse = async (res) => {
	if (!res.ok) {
		if (res.status === 404) {
			throw new Error("404 - We could not find what you are looking for");
		} else {
			throw new Error("We're sorry, something went wrong");
		}
	} else {
		try {
			const data = await res.json();
			return data;
		} catch (err) {
			throw new Error("Failed to parse JSON - improper response");
		}
	}
};

export async function get() {
	try {
		// const response = await fetch("http://localhost:5173/api/coursesss"); // to create error
		const response = await fetch(BASE_URL);
		const data = await handleErrorOrParse(response);

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

export async function getWithFilters(filters = null) {
	// filters should be null or an object containing filters
	try {
		let url = BASE_URL;

		if (filters) {
			const params = new URLSearchParams();
			Object.keys(filters).forEach((key) =>
				params.append(key, filters[key])
			);
			url += `?${params.toString()}`;
		}

		console.log(url);
		// const response = await fetch("http://localhost:5173/api/coursesss"); // to create error
		const response = await fetch(url);
		const data = await handleErrorOrParse(response);

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

// export const create = async (courseData) => {
// 	try {
// 		const response = await fetch(BASE_URL, {
// 			method: "POST",
// 			headers: {
// 			"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(courseData),
// 		})
// 		const data = await handleErrorOrParse(response);
// 	} catch (error) {
// 		throw error;
// 	}
// }

export const create = async (courseData) => {
	return sendRequest(BASE_URL, "POST", courseData);
};
