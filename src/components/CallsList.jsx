import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CallsListItem from './CallsListItem';

const CallsList = () => {
	let [state, setState] = useState({
		calls: [],
	});
	useEffect(() => {
		const baseUrl = 'https://aircall-job.herokuapp.com/';
		const promiseCalls = axios.get(`${baseUrl}activities`);

		const promises = [promiseCalls];
		Promise.all(promises).then((all) => {
			setState((prev) => ({
				...prev,
				calls: all[0].data,
			}));
		});
	}, []);

	const callItem = state.calls.map((call) => {
		return (
			<CallsListItem
				key={call.id}
				type={call.call_type}
				created={call.created_at}
				direction={call.direction}
				duration={call.duration}
				from={call.from}
				id={call.id}
				isArchived={call.is_archived}
				to={call.to}
				via={call.via}
			/>
		);
	});

	return <div className={'callsList'}>{callItem}</div>;
};

export default CallsList;
