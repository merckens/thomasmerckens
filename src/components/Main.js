import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
          <p>My name is Thomas and I’m passionate about international business strategy, management, and finance, especially in East Asian markets. With over 5 years of experience living and working across China, Japan, and Korea, I have focused on developing myself as a globally minded individual, both personally and professionally.</p>
          <p>Currently situated in New York City, I am looking for a position where I can use my cosmopolitan perspective, business acumen, and interpersonal skills to drive business growth.</p>
          <p>I am passionate about helping companies navigate today’s complex global markets through strategic new market entry, business development, and international financial operations. I have worked with diverse teams across the world, in public and private sectors, and across industries, including consulting, logistics, education, and journalism. I also speak and write Korean, Mandarin Chinese, and Japanese at an advanced-fluent level.</p>
          <p>I graduated with a B.A. in East Asian Studies from Princeton University and recently earned my MBA from Yonsei University in Seoul, South Korea under a full government-funded scholarship.</p>
          <p>When not working, I enjoy reading at cafes, going to the gym, and playing on my PS4. I also volunteer with New York Cares on a variety of projects and am learning data analytics in Python and R in my spare time.</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <h3>EDUCATION</h3>
          <ul>
            <li>Yonsei</li>
            <li>Princeton</li>
          </ul>
          
          <h3>PROFESSIONAL</h3>
          <ul>
            <li>CJ Logistics</li>
            <li>Seoul Metro</li>
            <li>Dong-A Ilbo</li>
            <li>Gengo</li>
            <li>U.S. Department of State</li>
            <li>Taurus Education</li>
          </ul>

          <h3>ADDITIONAL PROJECTS</h3>
          <ul>
            <li>New York Cares</li>
            <li>KMS</li>
            <li>North Korean Defectors</li>
            <li>FKAF Grant</li>
          </ul>
          {close}
        </article>

        <article
          id="blog"
          className={`${this.props.article === 'blog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blog</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <p>Coming soon!</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
