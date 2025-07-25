// import Link from "next/link"

// export default function Footer4() {
//     return (
//         <>

//             <footer className="footer-section footer-bg">
//                 <div className="shape-1">
//                     <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
//                 </div>
//                 <div className="shape-2">
//                     <img src="/assets/img/footer-shape-3.png" alt="shape-img" />
//                 </div>
//                 <div className="container">
//                     <div className="client-wrapper">
//                         <div className="client-thumb wow fadeInUp" data-wow-delay=".3s">
//                             <img src="/assets/img/client.png" alt="img" />
//                             <h6><span>15k+</span>Active Customer</h6>
//                         </div>
//                         <a href="/contact" className="theme-btn hover-white wow fadeInUp" data-wow-delay=".5s">
//                             Get A Quote
//                             <i className="fa-solid fa-arrow-right-long" />
//                         </a>
//                     </div>
//                     <div className="footer-widgets-wrapper pb-0 pt-0">
//                         <div className="footer-style-2">
//                             <div className="row">
//                                 <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
//                                     <div className="single-footer-widget">
//                                         <div className="widget-head">
//                                             <a href="/">
//                                                 <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
//                                             </a>
//                                         </div>
//                                         <div className="footer-content">
//                                             <p>
//                                                 Phasellus ultricies aliquam volutpat
//                                                 ullamcorper laoreet neque, a lacinia
//                                                 curabitur lacinia mollis
//                                             </p>
//                                             <div className="social-icon d-flex align-items-center">
//                                                 <a href="#"><i className="fab fa-facebook-f" /></a>
//                                                 <a href="#"><i className="fab fa-twitter" /></a>
//                                                 <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
//                                                 <a href="#"><i className="fa-brands fa-youtube" /></a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
//                                     <div className="single-footer-widget">
//                                         <div className="widget-head">
//                                             <h3>Quick Links</h3>
//                                         </div>
//                                         <ul className="list-area">
//                                             <li>
//                                                 <a href="/about">
//                                                     <i className="fa-solid fa-chevron-right" />
//                                                     Infotech About
//                                                 </a>
//                                             </li>
//                                             <li>
//                                                 <a href="/service">
//                                                     <i className="fa-solid fa-chevron-right" />
//                                                     Our Services
//                                                 </a>
//                                             </li>
//                                             <li>
//                                                 <a href="/news">
//                                                     <i className="fa-solid fa-chevron-right" />
//                                                     Our Blogs
//                                                 </a>
//                                             </li>
//                                             <li>
//                                                 <a href="/faq">
//                                                     <i className="fa-solid fa-chevron-right" />
//                                                     FAQ’S
//                                                 </a>
//                                             </li>
//                                             <li>
//                                                 <a href="/contact">
//                                                     <i className="fa-solid fa-chevron-right" />
//                                                     Contact Us
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-4 col-lg-4 col-md-6 ps-lg-4 wow fadeInUp" data-wow-delay=".5s">
//                                     <div className="single-footer-widget style-margin">
//                                         <div className="widget-head">
//                                             <h3>Contact Info</h3>
//                                         </div>
//                                         <div className="footer-content">
//                                             <p>4517 Washington. mg Manchester, Kentucky 39495</p>
//                                             <div className="contact-info-area-2">
//                                                 <div className="contact-info-item-2">
//                                                     <div className="icon">
//                                                         <i className="fa-regular fa-clock" />
//                                                     </div>
//                                                     <div className="content">
//                                                         <h6>Opening Hours: </h6>
//                                                         <p> Mon - Sat: 10.00 AM - 4.00 PM</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="contact-info-area-2">
//                                                 <div className="contact-info-item-2">
//                                                     <div className="icon">
//                                                         <i className="fas fa-phone-alt" />
//                                                     </div>
//                                                     <div className="content">
//                                                         <h6>Phone Call: </h6>
//                                                         <a href="#">208-6666-0112, 308-5555-0113</a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".7s">
//                                     <div className="single-footer-widget">
//                                         <div className="widget-head">
//                                             <h3>Download App</h3>
//                                         </div>
//                                         <div className="footer-content">
//                                             <p>
//                                                 Suscipit ipsum id justo malesuada fermentum. Donec ut sem varius, congue ligula vel
//                                             </p>
//                                             <div className="apps-image d-flex align-items-center">
//                                                 <a href="#"><img src="/assets/img/play-store.png" alt="store-img" /></a>
//                                                 <a href="#"><img src="/assets/img/app-store.png" alt="store-img" /></a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="footer-bottom style-2 style-4">
//                     <div className="container">
//                         <div className="footer-wrapper d-flex align-items-center justify-content-between">
//                             <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
//                                 © All Copyright {new Date().getFullYear()} by <a href="/">Infotech</a>
//                             </p>
//                             <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
//                                 <li>
//                                     <a href="/contact">
//                                         Terms &amp; Condition
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="/contact">
//                                         Privacy Policy
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <a href="#" id="scrollUp" className="scroll-icon">
//                         <i className="far fa-arrow-up" />
//                     </a>
//                 </div>
//             </footer>

//         </>
//     )
// }
