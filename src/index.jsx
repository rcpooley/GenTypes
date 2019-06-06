import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
        It renders!
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}