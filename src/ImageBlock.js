import React, {Component} from 'react';

class ImageBlock extends Component {
    render() {
        return (
            <div className='image'>
              <figure>
                <img src='https://i.redd.it/pu7kpjvtl1ny.jpg' alt='Lake Kirkpatrick, Queenstown, New Zealand'/>
                <figcaption className='caption'>Lake Kirkpatrick, Queenstown, New Zealand. Image credit: <a href='https://www.reddit.com/user/south_of_home'>/u/south_of_home on Reddit</a></figcaption>
              </figure>
            </div>
        );
    }
}

export default ImageBlock
