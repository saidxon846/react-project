import React from "react";
import "./index.css";
import img from './assets/ccc.png'
import imge from './assets/aaa.png'
import imga from './assets/ddd.png'
import image from './assets/fff.png'
import imige from './assets/imig.png'
import saidxon from './assets/sssss.png'
import ddd from './assets/image.png'







const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <h1 className="logo">
            <span className="logo-icon">bb</span> bliss
          </h1>
        </div>

        <nav className="navbar-center">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="navbar-right">
          <a href="#" className="login">Login / Register</a>
          <span className="icons">
            <i className="search-icon">🔍</i>
            <i className="cart-icon">🛒</i>
          </span>
          <span className="price">$0.00</span>
        </div>



      </header>


      <section className="hero">
        <div className="hero-content">
          <h1>
            AVIATOR <br />
            VERRES ICEBERG <br />
            CLASSES
          </h1>

          <p>
            Looked up one of the more obscure latin words
          </p>

          <button className="hero-btn">
            SHOP ALL GLASSES
          </button>
        </div>


        <div className="hero-image">
          <img src={imige} alt="glasses model" />
        </div>

        <div className="hero-curve"></div>



      </section>



      <section className="about">
        <div className="about-yellow">


          <div className="about-glasses">
            <img src={image} alt="glasses" />
          </div>

          <div className="about-right">
            <h5>WHAT WE'RE ABOUT</h5>
            <h1>SEE THE WORLD<br />DIFFERENTLY</h1>
            <p>
              We make everyday life look and feel ten times better. How?
              Click on the links below to see for yourself.
            </p>
            <button className="hero-btn">SHOP NOW</button>
          </div>

        </div>

        <div className="about-bottom">
          <div className="about-left">
            <img src={imga} alt="model" />
            <h3>10 YEARS OF VISION</h3>
            <p>REMINISCE WITH US</p>
          </div>

          <div className="about-small-img">
            <img src={imge} alt="glasses" />
            <h4>FIND THE BEST FIT FOR YOUR FACE</h4>
            <span>TAKE ME TO THE GUIDE</span>
          </div>
        </div>
      </section>

      <section className="products-header">

        <h2>FEATURED PRODUCTS</h2>
        <p>
          For our ten-year anniversary, we're re-envisioning our best-selling styles.
        </p>

        <section className="products">
          <div className="product-card">
            <img src={imge} alt="glass" />
            <span className="category">Men</span>
            <h3>Burberry Eyeglasses Look</h3>
            <div className="colors">
              <span className="dot gray"></span>
              <span className="dot black"></span>
            </div>
            <p className="price">$23.90</p>
          </div>

          <div className="product-card">
            <span className="sale">-20%</span>
            <img src={imge} alt="glass" />
            <span className="category">Women</span>
            <h3>Full Rim Metal Eyeglasses</h3>
            <div className="colors">
              <span className="dot gray"></span>
              <span className="dot beige"></span>
              <span className="dot pink"></span>
            </div>
            <p className="old-price">$35.90</p>
            <p className="price">$28.72</p>
          </div>

          <div className="product-card">
            <img src={imge} alt="glass" />
            <span className="category">Art</span>
            <h3>Armani Exchange AX4029</h3>
            <div className="colors">
              <span className="dot gray"></span>
              <span className="dot brown"></span>
              <span className="dot pink"></span>
            </div>
            <p className="price">$29.00</p>
          </div>

          <div className="product-card">
            <img src={imge} alt="glass" />
            <span className="category">Art</span>
            <h3>Oakley Crosslink Eyeglasses</h3>
            <div className="colors">
              <span className="dot red"></span>
              <span className="dot black"></span>
              <span className="dot orange"></span>
              <span className="dot blue"></span>
            </div>
            <p className="price">$29.00</p>
          </div>
        </section>

      </section>


      <section className="split-hero">
        {/* LEFT */}
        <div className="split-left">
          <h1>
            GORDON-GLASSES <br />
            TRUE MODERN CLASSICS.
          </h1>

          <p>
            One morning, when Gregor Samsa woke from troubled dreams,
            he found himself transformed in his bed into a horrible vermin.
            He lay on his armour-like.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">SHOP NOW</button>
            <button className="btn-dark">VIEW MORE</button>
          </div>

          <div className="dots"></div>
        </div>

        {/* RIGHT */}
        <div className="split-right">
          <img src={ddd} alt="models" />
        </div>
      </section>



      <section className="features">
        <div className="feature-item">
          <div className="icon">👓</div>
          <h3>BEST MATERIALS</h3>
          <p>Condimentum a rhoncus.</p>
        </div>

        <div className="feature-item">
          <div className="icon">🛠️</div>
          <h3>CARL ZEISS LENSES</h3>
          <p>Tellus aliquet eget imperdiet.</p>
        </div>

        <div className="feature-item">
          <div className="icon">📱</div>
          <h3>MODERN DESIGN</h3>
          <p>Condimentum tempus tristique.</p>
        </div>

        <div className="feature-item">
          <div className="icon">📐</div>
          <h3>ALL SIZES</h3>
          <p>Taciti nam scelerisque nunc.</p>
        </div>
      </section>









      <section className="oobliss-collection">
        <div className="oobliss-content">
          <h2 className="oobliss-title">WHY BUY OOBLISS?</h2>
          <h1 className="oobliss-subtitle">COLLECTION OF 2020.</h1>
          <p className="oobliss-description">
            We're an independent eyewear brand committed to creating
            high quality, handmade eyewear inspired by the people,
            places, and stories of California.
          </p>
          <button className="oobliss-btn">VIEW COLLECTION</button>
        </div>

        <div className="oobliss-image-container">
          {/* Rasm manzilini o'zingizga moslang, masalan ddd yoki yangi import */}
          <img src={ddd} alt="Collection 2020" className="oobliss-main-img" />

          {/* Rasmdagi o'sha oqish-shaffof kvadrat qatlam */}
          <div className="oobliss-overlay-box"></div>
        </div>
      </section>








      <section className="blog-section">
        <h2 className="blog-main-title">DESIGN BLOG</h2>

        <div className="blog-container">
          {/* BLOG 1 */}
          <div className="blog-card">
            <div className="blog-image-wrapper">
              <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format&fit=crop" alt="blog1" />
              <div className="blog-date-badge">
                <span className="day">18</span>
                <hr />
                <span className="month">DEC</span>
              </div>
            </div>
            <div className="blog-info">
              <h3 className="blog-title">NULLAM ULLAMCORPER NISL QUIS ORNARE MOLESTIE</h3>
              <div className="blog-meta">
                <span className="blog-icon">💬 0</span>
                <span className="blog-category">Sub Category 1</span>
              </div>
              <p className="blog-description">
                Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl...
              </p>
              <button className="blog-read-more">READ MORE</button>
            </div>
          </div>

          {/* BLOG 2 */}
          <div className="blog-card">
            <div className="blog-image-wrapper">
              <img src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=500&auto=format&fit=crop" alt="blog2" />
              <div className="blog-date-badge">
                <span className="day">19</span>
                <hr />
                <span className="month">DEC</span>
              </div>
            </div>
            <div className="blog-info">
              <h3 className="blog-title">TURPIS AT ELEIFEND LEO MI ELIT AENEAN...</h3>
              <div className="blog-meta">
                <span className="blog-icon">💬 0</span>
                <span className="blog-category">Sub Category 1</span>
              </div>
              <p className="blog-description">
                Turpis at eleifend leo mi elit Aenean porta ac sed faucibus. Nunc urna Morbi fringilla vitae orci convallis...
              </p>
              <button className="blog-read-more">READ MORE</button>
            </div>
          </div>

          {/* BLOG 3 */}
          <div className="blog-card">
            <div className="blog-image-wrapper">
              <img src="https://images.unsplash.com/photo-1509100194014-d49809396daa?q=80&w=500&auto=format&fit=crop" alt="blog3" />
              <div className="blog-date-badge">
                <span className="day">20</span>
                <hr />
                <span className="month">DEC</span>
              </div>
            </div>
            <div className="blog-info">
              <h3 className="blog-title">MORBI CONDIMENTUM MOLESTIE NAM ENIM ODIO...</h3>
              <div className="blog-meta">
                <span className="blog-icon">💬 0</span>
                <span className="blog-category">Sub Category 1</span>
              </div>
              <p className="blog-description">
                Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur elit ipsum. Enim ipsum hendrerit Suspendisse turpis...
              </p>
              <button className="blog-read-more">READ MORE</button>
            </div>
          </div>
        </div>
      </section>







      <section className="video-section">
        <div className="video-overlay">
          <div className="video-text-content">
            <h5>GET TO KNOW US</h5>
            <h1>WATCH THE TENS STORY <br /> IN JUST 77 SECONDS</h1>

            {/* Play tugmasi (bosganda videoni ochish uchun link) */}
            <a
              href="https://www.youtube.com/watch?v=nbSwqkNKgjs"
              target="_blank"
              rel="noopener noreferrer"
              className="play-button"
            >
              <div className="play-icon">▶</div>
            </a>
          </div>
        </div>

        {/* Fon uchun video yoki rasm */}
        <div className="video-background">
          <img src={ddd} alt="Background" /> {/* ddd - rasm import qilingan bo'lishi kerak */}
        </div>
      </section>




      <section className="testimonials">
        <h2 className="testimonials-title">TESTIMONIALS</h2>
        <div className="testimonial-content">
          <p className="testimonial-text">
            “ What a great way to get just the design I was looking for! The process
            is easy to understand and manage. I had a hard time choosing a final
            design because I received so many great options. I will certainly come
            back for future needs. ”
          </p>
          <div className="testimonial-author">
            <span className="author-name">GENOVEVA LEANNON</span>
            <span className="author-role"> — CEO HYPE</span>
          </div>
        </div>
      </section>










      <footer className="main-footer">
        <div className="footer-container">
          {/* Column 1: Contact */}
          <div className="footer-column">
            <h3>CONTACT US</h3>
            <ul className="contact-info">
              <li>📍 451 Wall Street, UK, London</li>
              <li>📞 Phone: (+998) 50 800 75 10</li>
              <li>✉️ demo@demo.com</li>
            </ul>
          </div>

          {/* Column 2: My Account */}
          <div className="footer-column">
            <h3>MY ACCOUNT</h3>
            <ul>
              <li><a href="#">The board</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 3: Product */}
          <div className="footer-column">
            <h3>PRODUCT</h3>
            <ul>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Addresses</a></li>
              <li><a href="#">Account details</a></li>
            </ul>
          </div>

          {/* Column 4: Blog */}
          <div className="footer-column">
            <h3>DESIGN BLOG</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Forums</a></li>
              <li><a href="#">Builders Showcase</a></li>
              <li><a href="#">How-To Guides</a></li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="footer-column newsletter">
            <h3>SIGN UP FOR EMAIL</h3>
            <p>Send me Oobliss news, updates and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address..." />
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>Copyright © 2020 - <span className="highlight">Oobliss</span>. All rights reserved.</p>
          <div className="payment-methods">
            {/* You can replace these with actual icon components or images */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Electron.svg" alt="Visa Electron" />
          </div>
        </div>
      </footer>






    </>
  );
};

export default Navbar;