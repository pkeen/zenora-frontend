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

const buildQueryURL = (url, filters) => {
	if (filters) {
		const params = new URLSearchParams();
		Object.keys(filters).forEach((key) => params.append(key, filters[key]));
		url += `?${params.toString()}`;
	}
	return url;
};

export const getWithFilters = (filters = null) => {
	// filters should be null or an object containing filters
	const url = buildQueryURL(BASE_URL, filters);
	return sendRequest(url);
}

export const create = async (courseData) => {
	return sendRequest(BASE_URL, "POST", courseData);
};

export const destroy = async (courseId) => {
	return sendRequest(`${BASE_URL}/${courseId}`, "DELETE");
}

export const update = async (courseId, payload) => {
	return sendRequest(`${BASE_URL}/${courseId}`, "PUT", payload);
}


