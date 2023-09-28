import sendRequest from "./send-request";
const BASE_URL = "/api/orders";

// const buildQueryURL = (url, filters) => {
// 	if (filters) {
// 		const params = new URLSearchParams();
// 		Object.keys(filters).forEach((key) => params.append(key, filters[key]));
// 		url += `?${params.toString()}`;
// 	}
// 	return url;
// };

// export const get = async (filters = null) => {
// 	// filters should be null or an object containing filters
// 	const url = buildQueryURL(BASE_URL, filters);
// 	console.log("url:", url);
// 	return sendRequest(url);
// };

export const create = async (courseId) => {
	return sendRequest(BASE_URL, "POST", {courseId: courseId});
}

