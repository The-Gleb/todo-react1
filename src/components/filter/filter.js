import { useState } from 'react'
import './filter.css'

function Filter (props) {


	function applyFilter(e) {
	
	}
 


return (
	<button className="filter_item"
			data="urgent"
			aria-pressed={props.isPressed}
			onClick={() => props.setFilter(props.name)}
			>
		{props.name}
	</button>
)
}

export default Filter;