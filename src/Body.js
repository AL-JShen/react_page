import React, {Component} from 'react';
import ImageBlock from './ImageBlock';
import TextBlock from './TextBlock';

class Body extends Component {
    render() {
        return (
            <div className='body'>
                <div className='intro'>
                    Hello! My name is Jeff and this is a page created with React. Above are some buttons that can be pressed, although they do not lead anywhere.
                </div>
                <br /><br />
                 <ImageBlock />
                 <TextBlock />
            </div>
        );
    }
}

export default Body;