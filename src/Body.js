import React, {Component} from 'react';
import ImageBlock from './ImageBlock';
import TextBlock from './TextBlock';
import Footer from './Footer'

class Body extends Component {
    render() {
        return (
            <div className='body'>
                <div className='intro'>
                    Hello! My name is Jeff and this is a page created with React. On here are various components, including buttons, images, text, and links.
                </div>
                <br/><br/>
                <div className='bodyText'>
                    <ImageBlock url='https://i.redd.it/pu7kpjvtl1ny.jpg' alt='Lake Kirkpatrick, Queenstown, New Zealand' caption={"Lake Kirkpatrick, Queenstown, New Zealand. Image credit: /u/south_of_home on Reddit"}/>
                    <TextBlock/>
                </div>
                <br/><br/>
                <div className='bodyFooter'>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Body;