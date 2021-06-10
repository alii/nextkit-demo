import {api, HttpException, InferAPIResponseType} from 'nextkit';

const handler = api<{time: number}>({
	async GET() {
		if (Math.random() > 0.7) {
			throw new HttpException(500, 'This was intentionally thrown.');
		}

		return {
			time: Date.now(),
		};
	},
});

export default handler;
export type HandlerResponse = InferAPIResponseType<typeof handler>;
