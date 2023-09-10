import * as usersAPI from "./users-api";

const storeTokenInLocalStorage = (data) => {
	// store token in local storage but only if json has a token property
	if (data.token) {
		localStorage.setItem("token", data.token);
	} else {
		throw Error("Token format invalid, try again");
	}
};

export const getToken = () => {
	// getItem returns null if there's no string
	// but what if string is wrong format I dont want to store JSON object
	const token = localStorage.getItem("token");

	if (!token) return null;

	const payload = JSON.parse(atob(token.split(".")[1]));

	// A JWT's exp is expressed in seconds, not milliseconds, so convert
	if (payload.exp < Date.now() / 1000) {
		// Token has expired - remove it from localStorage
		localStorage.removeItem("token");
		return null;
	}
	return token;
};

export const getUser = () => {
	const token = getToken();
	// If there's a token, return the user in the payload, otherwise return null
	return token ? JSON.parse(atob(token.split(".")[1])).user : null;
};

export const logOut = async () => {
	localStorage.removeItem("token");
	return getUser();
};

export const signUp = async (userData) => {
	const data = await usersAPI.signUp(userData);
	storeTokenInLocalStorage(data);
	return getUser();
};

export const logIn = async (userData) => {
	const data = await usersAPI.logIn(userData);
	storeTokenInLocalStorage(data);
	return getUser();
};
