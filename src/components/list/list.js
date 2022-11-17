import './list.css'
import Item from '../item/item'
import { useState } from 'react';

function List (props) {

	

	return (
		<div className="list_container">
			{props.tasks}
		</div>
	)
}

export default List;