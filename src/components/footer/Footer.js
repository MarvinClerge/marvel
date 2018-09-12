import React from 'react'
import './../../css/footer.css'

const Footer = (props) => {
  return(
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-top'>
          <div className='footer-image'>
            <img
              src='https://terrigen-cdn-dev.marvel.com/content/prod/2x/mm-promos-modules-featured-half-1.jpg'
              width='100%'
              height='100%'
            />
          </div>
          <div className='footer-top-text'>
            <p>MARVEL MASTERCARD®</p>
            <p>Earn Unlimited Cashback</p>
            <button className='nav-signin-button'>
              LEARN MORE
            </button>
            <p>Terms and Conditions Apply. Ⓒ 2018 MARVEL</p>
          </div>
        </div>


        <div className='footer-bottom'>
          <div className='footer-bottom-links'>
            <p>ABOUT MARVEL</p>
            <p>ADVERTISING</p>
            <p>HELP/FAQS</p>
            <p>MARVELHQ.COM</p>
            <p>CAREERS</p>
            <p>REDEEM DIGITAL COMICS</p>
            <p>INTERNSHIPS</p>
          </div>

          <div className='footer-bottom-feature'>
            <div className='footer-feature-item'>
              <img
                src='https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvel_insider-topnav-logo-large2x.png'
                width='54.625px'
                height='24.58px'
              />
              <div>
                <p>MARVEL INSIDER</p>
                <p>Get Rewarded for Being a Marvel Fan</p>
              </div>
            </div>

            <div className='footer-feature-item'>
              <img
                src='https://terrigen-cdn-dev.marvel.com/content/prod/2x/mastercard-crop_0-footer-v3.png'
                width='54.625px'
                height='34.406px'
              />
              <div>
                <p>MARVEL MASTERCARD®</p>
                <p>6 Card Designs—Unlimited Cashback</p>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-end'>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Your California Privacy Rights</p>
          <p>Children's Online Privacy Policy</p>
          <p>License Agreement</p>
          <p>Interest-Based Ads</p>
          <p>Marvel Insider Terms</p>
          <p>©2018 MARVEL</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
