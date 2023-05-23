type Response<T> = {
	error: string
	result: T
}

export const split =
	<T, L, R>(layer1: (input: T) => L, layer2: (input: T) => R) =>
	(input: T): [L, R] =>
		[layer1(input), layer2(input)]

export const post = async <T>(endpoint: string, data: object): Promise<Response<T>> => {
	return fetch(endpoint, {
		method: "POST",
		credentials: "include",
		body: JSON.stringify(data ?? {}),
		headers: {
			"Content-Type": "application/json"
		}
	}).then((r) => r.json())
}
