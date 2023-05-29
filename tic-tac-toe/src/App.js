import React, {useState} from 'react';

function Square({handleClick, value}){
  return (<button className="square" onClick={handleClick}>{value}</button>);
}

function Row({row, handleClick, values}){
  let squares = [];
  for(let i=row*3 - 2; i<=row*3; i++){
    squares.push(<Square handleClick={() => handleClick(i-1)} value={values[i-1]}/>);
  }
  return squares;
}

function Board({handleClick, values}){
  let rows = [];

  for(let i=1; i<=3; i++){
    rows.push(<div className="board-row"><Row row={i} handleClick={handleClick} values={values}/></div>);
  }
  return (<React.Fragment>
          {rows}
        </React.Fragment>);
}

function Header({headerText}){
  return (<div>{headerText}</div>)
}

export default function Ui(){
  let [values, setValues] = useState(Array(9).fill(null));
  let [nextSymbol, setNextSymbol] = useState('X');
  let headerText = 'next turn is X';
  function checkForWin(){
    if(((values[0] === values[1] && values[1] === values[2]) && (values[0] && values[1] && values[2]))
      || ((values[3] === values[4] && values[4] === values[5]) && (values[3] && values[4] && values[5]))
      || ((values[6] === values[7] && values[7] === values[8]) && (values[6] && values[7] && values[8]))
      || ((values[0] === values[3] && values[3] === values[6]) && (values[0] && values[3] && values[6]))
      || ((values[1] === values[4] && values[4] === values[7]) && (values[1] && values[4] && values[7]))
      || ((values[2] === values[5] && values[5] === values[8]) && (values[2] && values[5] && values[8]))
      || ((values[0] === values[4] && values[4] === values[8]) && (values[0] && values[4] && values[8]))
      || ((values[2] === values[4] && values[4] === values[6]) && (values[2] && values[4] && values[6]))){
        return true;
      }
      return false;
  }
  function handleClick(index){
    let newValues = values.slice();
    if(!values[index]){
      newValues[index] = nextSymbol;
    setValues(newValues);
    setNextSymbol((nextSymbol === 'X') ? 'O' : 'X');
    }
  }

  if(checkForWin()){
    headerText = `Winner is ${(nextSymbol === 'X') ? 'O' : 'X'}`;
  }
  else{
    headerText = `Next turn is ${nextSymbol}`;
  }

  return (<React.Fragment>
            <Header headerText={headerText} />
            <Board handleClick={handleClick} values={values} />
  </React.Fragment>)
}
