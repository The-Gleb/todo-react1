import { useState } from 'react';
import './search.css'

function Search (props) {

	const [requestValue, setRequestValue] = useState("")

	function handleChange(e) {
		setRequestValue(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.searchTask(requestValue)
	}

	return (
		<form className="search_container" onSubmit={handleSubmit}>
			<input type="text"
				   placeholder='Type what you need...'
				   className='line'
				   onChange={handleChange}
				   value={requestValue}
				   />
			<button className='search_btn'>Search</button>
		</form>
	)
}

export default Search;