/**
 * Fetch pretty much always resolves the promise it returns,
 * this function throws an error if http status is <200 || >= 300
 *
 * @param response Fetch response
 * @returns {*}
 */
export function handleFetchErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText ? response.statusText : 'Error ' + response.status);
	}
	return response;
}
