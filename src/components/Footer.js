import React from 'react';
import img1 from '../assets/images/share.PNG'
import img2 from '../assets/images/rel-1.PNG'
import img3 from '../assets/images/rel-2.PNG'

const Footer = () => {
  return (
    <>
      <div className="icons icons2">
        <ul>
          <li className="num">10</li>
          <li><i class="fas fa-heart fa-2x"></i></li>
          <li><i class="fas fa-lightbulb fa-2x"></i></li>
          <li><i class="fas fa-hat-wizard fa-2x"></i></li>
          <li><i class="fas fa-shopping-bag fa-2x"></i></li>
        </ul>
      </div>
      <div className="share">
        <span>Share this Story</span>
        <ul className="icons">
          <li><i class="fab fa-facebook-f fa-2x"></i></li>
          <li><i class="fab fa-twitter fa-2x"></i></li>
          <li><i class="fab fa-instagram fa-2x"></i></li>
          <li><i class="far fa-envelope fa-2x"></i></li>
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

        
        <div className="join">JOIN HACKER NOON</div>
        <div className="create">Create your free account to unlock your custom reading experience.</div>
      </div>

      <footer>
        <div className="footer-tags">
          <div className="footer-tag"><strong>Help</strong></div>
          <div className="footer-tag"><strong>About</strong></div>
          <div className="footer-tag"><strong>Start Writing</strong></div>
          <div className="footer-tag"><strong>Sponsor:</strong></div>
          <div className="footer-tag">Brand As Author</div>
          <div className="footer-tag">Sitewide Billboard</div>
          <div className="footer-tag">Ad by tag</div>
          <div className="footer-tag">Newsletter</div>
          <div className="footer-tag">Noonies</div>
        </div>
        <div className="footer-tags footer-tags2">
          <div className="footer-tag">Contact Us</div>
          <div className="footer-tag">Terms</div>
          <div className="footer-tag">Privacy</div>
          <div className="footer-tag">Cookies</div>
          <div className="footer-tag">Stories Published Yesterday</div>
          <div className="footer-tag">Leaderboard</div>
          <div className="footer-tag">Contributor's Club</div>
          <div className="footer-tag">Chrome Extension</div>
        </div>
        <div className="footer-social-links">
          <ul className="icons f-icons">
            <li><i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-twitter "></i></li>
            <li><i class="fab fa-instagram"></i></li>
            <li><i class="far fa-envelope"></i></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer;