import { Fragment } from 'react';
import '../css/body.css';

const CallsListItem = (props) => {
	console.log('PROPS', props.create);
	return (
		<>
			<span className={'createdDate'}>{props.created}</span>
			<div className={'callItem'}>
				{props.key}
				{props.type}
				{props.direction}
				{props.duration}
				{props.from}
				{props.id}
				{!props.isArchived && props.isArchived}
				{props.to}
				{props.via}
			</div>
		</>
	);
};

export default CallsListItem;
