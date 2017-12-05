import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import RadioOption from './components/RadioOption';
import RadioGroup from './components/RadioGroup';
import Executioner from './components/Executioner';

import registerServiceWorker from './registerServiceWorker';
let selectedValue = '';
const handleChange = value => {
    selectedValue = value;
    setTimeout(() => {
        console.log(selectedValue);
    }, 1000);
};

const Radios = (
    <RadioGroup name="name" handleChange={handleChange}>
        <RadioOption  label="JOE" value="joe" />
        <RadioOption  label="DENNIS" value="dennis" checked/>
        <RadioOption  label="PEAK" value="peak"/>
    </RadioGroup>
);

const Executioners = (
    <Executioner>
      {Radios}
    </Executioner>
);

ReactDOM.render(Executioners, document.getElementById('root'));
registerServiceWorker();
