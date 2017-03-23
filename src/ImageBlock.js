import React, {Component} from 'react';

class ImageBlock extends Component {
    render() {
        return (
            <div className='image'>
              <figure>
                <img src={this.props.url} alt={this.props.alt}/>
                <figcaption className='caption'>{this.props.caption}</figcaption>
              </figure>
            </div>
        );
    }
}

export default ImageBlock
