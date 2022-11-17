import './item.css'
import { useState } from 'react'

function Item(props) {
	const [nameDone, setNameDone] = useState('task_name')
	const [isEditing, setEditing] = useState(false)

	function crossText(e) {
		if (e.target.checked) {
			setNameDone('crossed')
		} else {
			setNameDone('task_name')
		}
	}


	const editingTemplate = (
		<div className='item'>
			<div>
				<input type="text" className='editing_input' placeholder='edit task'/>
				<button type='button' className='cancel_btn'>
					Cancel
				</button>
				<button type='submit' className='save_btn'>
					Save
				</button>
			</div>
		</div>
	)

	const importantIcon = <div className="true">!</div>
	const urgentIcon = <div className="true"> 
							<div>&#9200;</div>
					   </div>
	const zeroDiv = <div></div>

	const viewTemplate = (
		<div className="item">
		<input className='checkbox'
			   id={props.id}
			   type="checkbox"
			   defaultChecked={props.done}
			   onChange={() => props.toggleTaskDone(props.id)}
			   onClick={crossText}
			   />
		<label className={nameDone}
			   htmlFor={props.id}
			   >
			{props.name}
		</label>
		{props.urgent ? urgentIcon : zeroDiv}
		{props.important ? importantIcon : zeroDiv}
		<button className="delete_icon"
				onClick={() => props.deleteTask(props.id)}
				>
			&#10006;
		</button>
	</div>
	)



	return (
		<div className='item_container'>
			{isEditing ? editingTemplate : viewTemplate}
		</div>

		
	)
}

export default Item;