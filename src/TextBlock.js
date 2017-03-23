import React, {Component} from 'react';

class TextBlock extends Component {
    render() {
        return (
            <div className='text'>
              <h2 className='textHeading'>Feynman Prompts</h2>
              <div className='paragraphs'>
                <p className='para1'>
                    let is a way to declare variables. It is used for variables that will be changed in the future. The variable is limited to the block in which it is declared.
                </p>
                <p className='para2'>
                    const is also used to declare variables. Like variables declared using let, the scope of variables declared using const are limited to their block. const is used when the variable being declared will not change, and variables created this way cannot be changed.
                </p>
                {/*}<p className='para3'></p>*/}
                </div>
            </div>
        );
    }
}

export default TextBlock;