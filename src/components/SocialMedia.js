import React, { Component } from 'react';

class SocialMedia extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="share">
        <div class="fb-share-button" data-href="http://www.iseergb.com/" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.iseergb.com%2F&amp;src=sdkpreparse"><img className="fb-share" src="images/fb_share.jpeg" alt="Share"></img></a></div>
        <div class="fb-quote"></div>
        <a class="twitter-share-button" href={"https://twitter.com/intent/tweet?text=" + this.props.message + "&hashtags=coloreyes,colorblindtest&url=http://www.iseergb.com/"} data-size="large">Tweet</a>
      </div>
    );
  }
}

export default SocialMedia;
