import React from "react";

const Menu = () => (
  <div class="box-nav">
    <div class="container">
      <div class="row">
        <div class="center">
          <a id="touch-menu" class="mobile-menu" href="#">
            <span class="icon-menu-button-of-three-horizontal-lines"></span>
          </a>
          <nav class="top-menu">
            <ul class="menu">
              <li class="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
                <ul>
                  <li>
                    <a href="#">Laundry Service</a>
                  </li>
                  <li>
                    <a href="#">Dry Cleaning</a>
                  </li>
                  <li>
                    <a href="#">Leather & Suede Cleaning</a>
                  </li>
                  <li>
                    <a href="#">Wedding Gown Cleaning & Preservation</a>
                  </li>
                  <li>
                    <a href="#">Tailoring & Alterations</a>
                  </li>
                  <li>
                    <a href="#">Pillow Refurbishing</a>
                  </li>
                  <li>
                    <a href="#">Linen, Upholstery, & Area Rug Cleaning</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="price.html">Prices</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
                <ul>
                  <li>
                    <a href="blog.html">Blog Classic</a>
                  </li>
                  <li>
                    <a href="blog-card.html">Blog Post Card</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single post</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
              <li>
                <a href="contact.html">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
