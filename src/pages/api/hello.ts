import {NextkitException} from 'nextkit';
import {api} from '../../server/nextkit';

export default api({
	async GET() {
		if (Math.random() > 0.7) {
			throw new NextkitException(500, 'This was intentionally thrown.');
		}

		return Date.now();
	},

	// Access context defined in `server/nextkit.ts`
	async POST({context}) {
		return context.ip;
	},
});
