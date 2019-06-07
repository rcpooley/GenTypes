import React from 'react';
import ReactDOM from 'react-dom';
import FieldsEditor from './fieldsEditor';

import './main.css';

window.PRELOADED = {
    types: [
        {name: 'string', numArgs: 0, dictKey: true},
        {name: 'int', numArgs: 0, dictKey: true},
        {name: 'boolean', numArgs: 0, dictKey: true},
        {name: 'float', numArgs: 0, dictKey: true},
        {name: 'null', numArgs: 0},
        {name: 'Array', numArgs: 1},
        {name: 'Dict', numArgs: 2},
        {name: 'Union', numArgs: 2}
    ]
};

ReactDOM.render(<FieldsEditor />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
