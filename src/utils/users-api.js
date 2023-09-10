import sendRequest from "./send-request";
const BASE_URL = "/api/users";

export const signUp = async (userData) => {
	return sendRequest(BASE_URL, "POST", userData);
};

export const logIn = async (userData) => {
	return sendRequest(`${BASE_URL}/login`, "POST", userData);
};

