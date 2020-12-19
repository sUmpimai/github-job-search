import * as React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string, //default primary
    label: PropTypes.string,
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
        if (this.props.onClick) {
            return this.props.onClick(e);
        }
    }

    render() {
        let { className, label} = this.props;

        const defaultClassName = className ? `btn ${className}` : 'btn btn-primary';
        
        return (
            <button 
                className={defaultClassName}
                onClick={this.onClick}
            >
                {label}
            </button>
        )
    }
}

Button.propTypes = propTypes;
export { Button };