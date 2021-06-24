import '../css/body.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const CallsListItem = (props) => {
	console.log('PROPS', props.create);
	return (
		<div>
			<span>{props.created}</span>
			<Accordion defaultActiveKey={props.key} className={'mb-3'}>
				<Card>
					<Card.Header>{props.from}</Card.Header>
					<span>tried to call on {props.to}</span>
				</Card>
			</Accordion>
		</div>
	);
};

export default CallsListItem;

// <Accordion>
// 	<span className={'createdDate'}>{props.created}</span>
// 	<div className={'callItem'}>
// 		{props.key}
// 		{props.type}
// 		{props.direction}
// 		{props.duration}
// 		{props.from}
// 		{props.id}
// 		{!props.isArchived && props.isArchived}
// 		{props.to}
// 		{props.via}
// 	</div>
// <Accordion/>
