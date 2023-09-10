import sendRequest from "./send-request";
const BASE_URL = "/api/courses";

const buildQueryURL = (url, filters) => {
	if (filters) {
		const params = new URLSearchParams();
		Object.keys(filters).forEach((key) => params.append(key, filters[key]));
		url += `?${params.toString()}`;
	}
	return url;
};

export const get = (filters = null) => {
	// filters should be null or an object containing filters
	const url = buildQueryURL(BASE_URL, filters);
	return sendRequest(url);
};

export const create = async (courseData) => {
	return sendRequest(BASE_URL, "POST", courseData);
};

export const destroy = async (courseId) => {
	return sendRequest(`${BASE_URL}/${courseId}`, "DELETE");
};

export const update = async (courseId, payload) => {
	return sendRequest(`${BASE_URL}/${courseId}`, "PUT", payload);
};
