const CallsListItem = (props) => {
	console.log('PROPS', props);
	return (
		<div className={'callItem'}>
			{props.key}
			{props.type}
			{props.createdated_at}
			{props.direction}
			{props.duration}
			{props.from}
			{props.id}
			{!props.isArchived && props.isArchived}
			{props.to}
			{props.via}
		</div>
	);
};

export default CallsListItem;
