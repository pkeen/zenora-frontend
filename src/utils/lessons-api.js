import sendRequest from "./send-request";
const BASE_URL = "/api/lessons";

export const getOne = async (id) => {
	return sendRequest(`${BASE_URL}/${id}`);
};
