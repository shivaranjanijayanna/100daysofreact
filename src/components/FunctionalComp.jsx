import React from 'react'
import ReactDOM from 'react-dom';

const FunctionalComp = () => {
  return (
    <div>
        <h1>Hello World!</h1>
        <p>This is a functional component example.</p>
    </div>
  )
}
ReactDOM.render(<FunctionalComp />,document.getElementById('root'));

export default FunctionalComp