import {nanoid} from "nanoid"
import './App.css';
import Title from '../title/title.js'
import Search from '../search/search';
import Filter from '../filter/filter';
import List from '../list/list';
import Adding from '../adding/Adding';
import Item from '../item/item';
import React, {useState} from "react"


const FILTER_MAP = {
  All: () => true,
  Urgent: (task) => task.urgent,
  Important: (task) => task.important,
  Done: (task) => task.done
}

const FILTER_NAMES = Object.keys(FILTER_MAP);



function App() {

    const DATA = [
      {
        name: `Eat`,
        urgent: 'true',
        important: false,
        done: false,
        id: 1
      },
      {
        name: `Sleep`,
        urgent: 'false',
        important: true,
        done: false,
        id: 2
      },
      {
        name: `Make to-do list app`,
        urgent: 'true',
        important: false,
        done: false,
        id: 3
      }
    ]

  const [tasks, setTasks] = useState(DATA)
  const [filter, setFilter] = useState(`All`)

  const filterList = FILTER_NAMES.map((name) => (
    <Filter key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
            />
  ))

  const [requestValue, setRequestValue] = useState("")

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .filter((task) => task.name.includes(requestValue) || requestValue == '')
  .map((task) => (
    <Item id={task.id}
          name={task.name}
          urgent={task.urgent}
          important={task.important}
          key={task.id}
          done={task.done}
          toggleTaskDone={toggleTaskDone}
          deleteTask={deleteTask}
          editTask={editTask}
          />
  ));





  
  function addTask(name, urgent, important) {
    const newTask = {
      name,
      urgent,
      important,
      done: false,
      id: `todo-${nanoid()}`
    }
    setTasks([...tasks, newTask]);
  }

  function toggleTaskDone(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        task.done = !task.done
        // return {task}
      }
      return task
    })
      setTasks(updatedTasks)
	}

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => id !== task.id)
    setTasks(updatedTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        task.name = newName
      }
      return task
    })
    setTasks(editedTaskList)
  }


  function searchTask(requestValue) {
    let r = `eating`
    setRequestValue(requestValue)
    // setRegExp(r.match(/\$\{reqValue\}/))
    // console.log(regExp)

    // let str = `eating`;
    // let reg = new RegExp(reqValue.test(str))
    // console.log(reg);

  }

  return (
    <div className="App">
      <Title/>
      <Search searchTask={searchTask}/>
      <div className="filter_box">
		<div className="filter_title">Filter</div>
		<div className="filter_container">
      {filterList}
		</div>
	</div>      <List tasks={taskList}/>
      <Adding addTask={addTask}/>
    </div>
      
    
  );
}

export default App;
