import type {HandlerResponse} from './api/hello';
import type {APIResponse} from 'nextkit';

import {useEffect, useState} from 'react';

export default function Home() {
	const [data, setData] = useState<null | HandlerResponse>(null);

	useEffect(() => {
		void fetch('/api/hello')
			.then(async res => {
				return res.json() as Promise<APIResponse<HandlerResponse>>;
			})
			.then(res => {
				if (!res.success) {
					// eslint-disable-next-line no-alert
					alert(res.message);
					return;
				}

				setData(res.data);
			});
	}, []);

	return <div>{data ? `Time according to /api/hello: ${data.time}` : 'Loading...'}</div>;
}
