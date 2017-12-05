import React from 'react';

class RadioOption extends React.Component {
    handleChange = e => {
        // console.log(e.target.value);
        this.props.handleChange(e.target.value);
    }

    render () {
        return (
            <label htmlFor="">
               <input type="radio" onChange={this.handleChange} defaultChecked={this.props.checked} value={this.props.value} name={this.props.name}/>
                {this.props.label} 
            </label>
        );
    }
}

export default RadioOption;