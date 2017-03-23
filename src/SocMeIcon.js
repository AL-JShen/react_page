import React, {Component} from 'react';

class SocMeIcon extends Component {
    render() {
        return (
            <div className='mediaIcon'>
                <a href={this.props.linkURL}>
                    <img src={this.props.imgURL} alt={this.props.imgALT}/>
                </a>
                <figcaption>{this.props.caption}</figcaption>
            </div>
        );
    }
}

export default SocMeIcon;