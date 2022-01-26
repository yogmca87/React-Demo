
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Create from './components/create'
import Read from './components/read'
import Update from './components/update'

const App = () => {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/' component={Read} />
        </div>
        <Route path='/create' component={Create} />

        <div style={{ marginTop: 20 }}>
          <Route path='/read' component={Read} />
        </div>
        <div>
          <Route path='/update/:id' component={Update} />
        </div>
      </div>
    </Router>
  );
}

export default App;
