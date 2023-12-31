import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './Comp/Main';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Nav from './Comp/Nav';
import { Provider } from 'react-redux';
import store from './Redux/store.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}>

<BrowserRouter>
<Nav/>
  <Main/>
</BrowserRouter>

  </Provider>


);

