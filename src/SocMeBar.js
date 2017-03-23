import React, {Component} from 'react';
import SocMeIcon from './SocMeIcon';

class SocMeBar extends Component {
    render() {
        return (
            <div className='mediaBar'>
                <SocMeIcon linkURL={'https://github.com/AL-JShen'} imgURL={'https://www.shareicon.net/data/512x512/2015/09/28/108830_media_512x512.png'} imgALT={'Github'} caption={'Github'}/>
                <SocMeIcon linkURL={'https://www.facebook.com/'} imgURL={'https://d13yacurqjgara.cloudfront.net/users/409/screenshots/1136293/hexagon-facebook.png'} imgALT={'Facebook'} caption={'Facebook'}/>
                <SocMeIcon linkURL={'https://twitter.com/?lang=en'} imgURL={'https://d13yacurqjgara.cloudfront.net/users/409/screenshots/1136357/hexagon-twitter_1x.png'} imgALT={'Twitter'} caption={'Twitter'}/>
                <SocMeIcon linkURL={'https://www.linkedin.com/uas/login'} imgURL={require('../assets/linkedin-0.png')} imgALT={'LinkedIn'} caption={'LinkedIn'}/>
            </div>
        );
    }
}

export default SocMeBar;