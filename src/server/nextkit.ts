// This server defines a basic implementation of the nextkit API.
import nextkit from 'nextkit';

export const api = nextkit({
	// On error is responsible for shipping an error message and a status back to the client.
	async onError(req, res, error) {
		console.error('error', error);

		return {
			message: 'An error occurred.',
			status: 500,
		};
	},

	// Context is optional, can be used to pass information such as the current user
	// or even the date. I'm not a fan of middleware as it's not very extensible and
	// the idea of context can type safe (as it is here).
	async getContext(req) {
		const ip = (req.headers['x-forwarded-for'] ?? req.socket.remoteAddress) as string;

		return {ip};
	},
});
