import React from 'react';
import './style.scss';
const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className='page-title'>
        <h1>Contact</h1>
        <div className='page-subtitle'>
          <h4>Get in Touch</h4>
        </div>
      </div>
      <div className='container'>
        <div id='gmap' className='contact-map'>
          <iframe
            title='address'
            src='https://maps.google.com/maps?q=Ký túc xá khu B tòa C1&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed'
            frameBorder='0'
            style={{ apsborder: '0' }}
            allowFullScreen=''
          ></iframe>
        </div>
        <div className='row'>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-mobile' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>Phone Numbers</h4>
                <p>
                  <a href='tel:0869 123 020'>0869 123 020</a> -{' '}
                  <a href='tel:0797 07 10 97'>0797 07 10 97</a>
                </p>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-envelope-o' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>Email</h4>
                <p>
                  <a href='mailto:vietxuandev@gmail.com'>
                    vietxuandev@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-map-marker' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>Address</h4>
                <p>
                  Dorm B, Vietnam national university Ho Chi Minh city, Di An,
                  Binh Duong.
                </p>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-facebook' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>Facebook</h4>
                <p>
                  <a
                    href='https://www.facebook.com/VietXuanDev'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    fb.com/VietXuanDev
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-instagram' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>Instagram</h4>
                <p>
                  <a
                    href='https://www.instagram.com/vietxuandev/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    instagram.com/vietxuandev
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=' col-xs-12 col-sm-6 '>
            <div className='info-block-w-icon'>
              <div className='ci-icon'>
                <i className='fa fa-globe' aria-hidden='true'></i>
              </div>
              <div className='ci-text'>
                <h4>Website</h4>
                <p>
                  <a
                    href='http://vietxuandev.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    vietxuandev.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
