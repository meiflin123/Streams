import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';


const App = () => {
	return (
    <div>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={ StreamList }/>
        <Route path="/stream/new" exact component={ StreamCreate }/>
        <Route path="/stream/delete" exact component={ StreamDelete }/>
        <Route path="/stream/edit" exact component={ StreamEdit }/>
        <Route path="/stream/show" exact component={ StreamShow }/>
  
      </div>
    </BrowserRouter>
    </div>
  );
};

export default App;