import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/redireccionar';
import serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker();