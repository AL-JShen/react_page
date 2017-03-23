import React, {Component} from 'react';
import NavButton from './NavButton';

class NavBar extends Component {
    render() {
        return (
            <div className='navBar'>
                <div className='title'>
                    <h1>React Page</h1>
                    <NavButton text={'Button 1'}/>
                    <NavButton text={'Button 2'}/>
                    <NavButton text={'Button 3'}/>
                </div>
            </div>
        );
    }
}

export default NavBar;