import { useState, Fragment } from 'react';
import './App.css';
import Overview from './components/Overview';

function App() {
  let [taskList, setTaskList] = useState([]);

  return (
    <Fragment>
    <Input taskList={taskList} setTaskList={setTaskList}/>
    <Overview tasks={taskList} />
    </Fragment>
  );
}

function Input({taskList, setTaskList}){
  let [curTaskVal, setCurTaskVal] = useState('');

  function handleChange(e){
    setCurTaskVal(e.target.value);
  }

  function handleSubmit(e){
    let newTaskList = taskList.slice();
    newTaskList.push(curTaskVal);
    setTaskList(newTaskList);
    setCurTaskVal('');
    e.preventDefault();
  }

  return (<form>
    <input type="text" id="task" placeholder="task" value={curTaskVal} onChange={(e) => handleChange(e)}></input>
    <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)}></input>
  </form>);
}

export default App;
