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
		return <CallsListItem />;
	});

	console.log(state);
};

export default CallsList;
