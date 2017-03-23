import React, {Component} from 'react';

class NavButton extends Component {
    render() {
        return (
            <button>
                this.props.text
            </button>
        );
    }
}

export default NavButton;