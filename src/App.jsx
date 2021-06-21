import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CallsList from './components/CallsList.jsx';

import Header from './Header.jsx';

const App = () => {
	const [test, setTest] = useState('test');
	return (
		<div className="container">
			<Header />
			<div className="container-view">
				<CallsList />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
