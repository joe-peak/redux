import React from 'react';
import RadioOption from './RadioOption';
class RadioGroup extends React.Component {
    render () {
        // 渲染子组件
        console.log(React.Children.count(this.props.children));
        const renderChildren = React.Children.map(this.props.children, child => {
            if (child.type === RadioOption) {
                return React.cloneElement(child, {
                    name: this.props.name,
                    handleChange: this.props.handleChange
                });
            } else {
                return child;
            }
        }); 

        return (
            <div>
                {renderChildren}
            </div>
        );
    }
}

export default RadioGroup;