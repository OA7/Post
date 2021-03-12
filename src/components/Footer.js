import React from 'react';
import img1 from '../assets/images/share.PNG'
import img2 from '../assets/images/rel-1.PNG'
import img3 from '../assets/images/rel-2.PNG'

const Footer = () => {
  return (
    <>
      <div className="icons icons2">
        <ul>
          <li>Icons</li>
          <li>Icons</li>
          <li>Icons</li>
          <li>Icons</li>
        </ul>
      </div>
      <div className="share">
        <span>Share this Story</span>
        <ul className="icons">
          <li>Icons</li>
          <li>Icons</li>
          <li>Icons</li>
          <li>Icons</li>
        </ul>
      </div>
      <div className="share-img">
        <img src={img1} alt="share-info" />
      </div>
      <div className="divider">
        <div className="line"></div>
        <p>RELATED</p>
        <div className="rel-topics">
          <div className="topics">
            <img src={img2} alt="related-topics" />
          </div>
          <div className="topics">
            <img src={img3} alt="related-topics" />
          </div>
          <div className="topics topics2">
            <img src={img2} alt="related-topics" />
          </div>
        </div>
      </div>
      <div className="divider divider2">
        <div className="line line2"></div>
        <p>TAGS</p>
        <div className="tags">
          <div className="tag">#react</div>
          <div className="tag">#reactjs</div>
          <div className="tag">#javascript</div>
          <div className="tag">#web-development</div>
          <div className="tag">#website-development</div>
        </div>
        <div className="tags">
          <div className="tag">#loading-screen</div>
          <div className="tag">#reactjs-loading</div>
          <div className="tag">#web-dev</div>
          <div className="tag">#web-monetization</div>
        </div>
      </div>
    </>
  )
}

export default Footer;