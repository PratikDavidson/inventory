import './App.css';
import Info from './Info.js'
import {PropTypes} from 'prop-types'

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text='2' />
    </div>
  );
}



function AddItem(props) {
  return (
    <form>
      <label for='text-form'>Type Something:</label>
      <input type='text' id='text-form' value={ props.text } />
    </form>
  )
}

AddItem.defaultProps = {
  text: 'hello'
}

AddItem.propTypes = {
  text: PropTypes.string
}

export default App;
