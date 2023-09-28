import sendRequest from "./send-request";
const BASE_URL = "/api/modules";

export const getOne = async (id) => {
    console.log("getting to get one")
	return sendRequest(`${BASE_URL}/${id}`);
};

