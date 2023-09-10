import { getToken } from "./users-service";
import handleServerError from "./errors/handleError";

/**
 * Sends a request to the specified URL with the specified options.
 *
 * @param {string} url - The URL to send the request to.
 * @param {string} [method='GET'] - The HTTP method to use for the request. Defaults to 'GET'.
 * @param {Object} [payload=null] - The payload to include with the request, if any. Defaults to null.
 *
 * @returns {Promise<Object>} - A promise that resolves to the response JSON object.
 *
 * @throws {Error} - Throws an error if the response is not OK, with the message set to the error message from the response JSON object.
 */

export default async function sendRequest(url, method = "GET", payload = null) {
	// fetch accepts options arg as second argument
	// used to include payload, set headers, specify method, etc.
	const options = { method };

	if (payload) {
		options.headers = { "Content-Type": "application/json" };
		options.body = JSON.stringify(payload);
	}

	const token = getToken();
	if (token) {
		// need to add authorization header
		// use the logical OR assignment
		options.headers ||= {};

		options.headers.Authorization = `Bearer ${token}`;
	}

	const res = await fetch(url, options);

	if (res.ok) {
		return res.json();
		// server must always return JSON or will cause an error
	} else {
		throw await handleServerError(res);
	}
}
