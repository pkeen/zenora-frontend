import sendRequest from "./send-request";

const BASE_URL = "/api/users";

// const hardCoded_url = "http://localhost:3000/api/users"; // for sending direct from browser to test CORS error


export const signUp = async (userData) => {
	return sendRequest(BASE_URL, "POST", userData);
};

// export const signUp = async (userData) => {
// 	// using fetch
// 	const res = await fetch(BASE_URL, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(userData),
// 	});

// 	const data = await res.json();

// 	if (res.ok) {
// 		return await data.token;
// 	} else {
// 		return data;
// 	}
// };



export const logIn = async (userData) => {
	return sendRequest(`${BASE_URL}/login`, "POST", userData);
};

