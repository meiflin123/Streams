import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      <Link to="/pagetwo">Navigate to Page Two</Link>
      PageOne
    </div>
  ); 
};

const PageTwo = () => {
  return (
    <div>
      <Link to="/">Navigate to Page One</Link>
      PageTwo
    </div>
  ); 
};

const App = () => {
	return (
    <div>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={ PageOne }/>
        <Route path="/pagetwo" component={ PageTwo }/>
      </div>
    </BrowserRouter>
    </div>
  );
};

export default App;