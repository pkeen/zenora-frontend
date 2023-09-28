import sendRequest from "./send-request";
const BASE_URL = "/api/lessons";

export const getOne = async (id) => {
	console.log('getting here');
	return sendRequest(`${BASE_URL}/${id}`);
};
