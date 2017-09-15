import React, { Component } from 'react';

class SocialMedia extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="share">
        <span>Share on</span>
        <div class="fb-share-button" data-href="http://www.iseergb.com/" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.iseergb.com%2F&amp;src=sdkpreparse"><img className="sm-share" src="images/facebook.png" alt="Share"></img></a></div>
        <div><a class="twitter-share-button" href={"https://twitter.com/intent/tweet?text=" + this.props.message + "&hashtags=coloreyes,colorblindtest&url=http://www.iseergb.com/"} data-size="large"><img className="sm-share" src="images/twitter.png" alt="Twitter"></img></a></div>
        <div className="sm-join"><span>Join our color blind community on Facebook </span><a target="_blank" href="https://www.facebook.com/groups/colorblindusa/"><img className="fb-join" src="images/joinus.png" alt="Join us"></img></a></div>
      </div>
    );
  }
}

export default SocialMedia;
