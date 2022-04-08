import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewProject from './components/NewProject';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/allprojects')
      .then(res => {
        console.log(res.data);
        setProjects(res.data);
        
      })
      .catch(err => console.log(err));
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Route exact path="/"><Dashboard projects={projects}/></Route>
        <Route exact path="/newproject"><NewProject/></Route>
      </Router>
    </div>
  );
}

export default App;

