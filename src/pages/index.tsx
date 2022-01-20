import {useEffect, useState} from 'react';

import type {APIResponse, InferAPIResponse} from 'nextkit';
import type HelloAPI from '../pages/api/hello';

// Result from the `GET` method defined in `api/hello.ts`
type HelloGetResponse = InferAPIResponse<typeof HelloAPI, 'GET'>;

export default function Home() {
	const [data, setData] = useState<null | HelloGetResponse>(null);

	useEffect(() => {
		void fetch('/api/hello')
			.then(async res => res.json() as Promise<APIResponse<HelloGetResponse>>)
			.then(res => {
				if (!res.success) {
					// eslint-disable-next-line no-alert
					alert(res.message);
					return;
				}

				setData(res.data);
			});
	}, []);

	return <div>{data ? `Time according to /api/hello: ${data}` : 'Loading...'}</div>;
}
