import './Adding.css'
import '../item/item.css'
import '../list/list.css'
import React, {useState} from "react"
import List from '../list/list';
import Functions from '../functions/functions';


function Adding(props) {

	const [name, setName] = useState("")
	const [urgent, setUrgent] = useState(false)
	const [important, setImportant] = useState(false)

	function handleSubmit(e) {
		e.preventDefault();
		// if (name === "") {
		// 	setName("I don`t read thoughts")
		// 	return
		// }
		// let done = 'false'
		props.addTask(name, urgent, important);
		setName("");
		e.target.reset();
		setUrgent(false)
		setImportant(false)

	}

	function handleCheckUrgent(e) {
		setUrgent(e.target.checked)
		console.log(e.target.checked)
	}

	function handleCheckImportant(e) {
		setImportant(e.target.checked)
	}

	function handleChange(e) {
		setName(e.target.value)
	}



	return (
		<div className="adding">
		<form onSubmit={handleSubmit} className="adding_container">
			<input
				type="text"
				placeholder="What do you need to do?"
				value={name}
				className="new_task_input"
				onChange={handleChange}
				autoComplete="off"
			/>
			<button className="adding_btn">
				Add
			</button>

			<input type="checkbox"
				   name="urgent"
				   className="urgentCheck"
				   onClick={handleCheckUrgent}
				   />
			<div>urgent?</div>
			<input type="checkbox"
				   name="importain"
				   className="importantCheck"
				   onClick={handleCheckImportant}
				   />
			<div>important?</div>

		</form>

		</div>
	)
}

export default Adding