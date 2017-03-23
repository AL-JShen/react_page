import React, {Component} from 'react';

class TextBlock extends Component {
    render() {
        return (
            <div className='text'>
                <h2 className='textHeading'>Feynman Prompts</h2>
                <div className='paragraphs'>
                    <p className='para1'>
                        <strong>let</strong> is a way to declare variables. It is used for variables that will be changed in the future. The variable is limited to the block in which it is declared.
                    </p>
                    <p className='para2'>
                        <strong>const</strong> is also used to declare variables. Like variables declared using let, the scope of variables declared using const are limited to their block. const is used when the variable being declared will not change, and variables created this way cannot be changed.
                    </p>
                    <p className='para3'>
                        <strong>ES6 classes</strong> are a cleaner way to write constructor (a "type" of objects).
                    </p>
                    <p className='para4'>
                        <strong>import</strong> and <strong>export</strong> are used to bring other files into the one being worked on. It allows some code to be written in a file and used in another, which helps keep things neater.
                    </p>
                    <p className='para5'>
                        <strong>JSX</strong> is a way to write in an HTML-like syntax, which is then compiled into JavaScript snippets.
                    </p>
                    <p className='para6'>
                        <strong>this.props.x</strong> is used to define custom properties that a class can have. <strong>this</strong> is the class, <strong>props</strong> refers to property, <strong>x</strong> is the property name. 
                    </p>
                </div>
            </div>
        );
    }
}

export default TextBlock;