'use client'
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Offcanvas({
    isOffCanvas,
    handleOffCanvas,
}) {
    return (
        <>
            <div className="fix-area">
                <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <a href="/">
                                        <h3>Global Marketing Solutions Group LLC
</h3>
                                    </a>
                                </div>
                                <div className="offcanvas__close" onClick={handleOffCanvas}>
                                    <button>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                           
                            <div className="d-block d-md-block d-lg-none">
                                <MobileMenu />
                            </div>

                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">585 Grove St Ste 100, Herndon, VA 20170-4791</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="/mailto:info@azent.com"><span className="mailto:sales@gmsgconsulting.com">sales@gmsgconsulting.com </span></a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">Mon-Sat, 9am-7pm (EST)</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="/tel:+11002345909">+1 (888) 352-9206</a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <a href="/contact" className="theme-btn text-center">
                                        <span>get A Quote<i className="fa-solid fa-arrow-right-long" /></span>
                                    </a>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`} onClick={handleOffCanvas} />
        </>

    )
}
