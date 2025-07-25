
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'

export default function Hero1() {
    return (
        <>
            <section className="hero-section fix hero-1 bg-cover" style={{ backgroundImage: 'url("assets/img/hero/hero-bg.jpg")' }}>
                <div className="text-transparent">
                    <h2>Technology</h2>
                </div>
                <div className="line-shape">
                    <img src="/assets/img/hero/line-shape.png" alt="shape-img" />
                </div>
                <div className="dot-shape">
                    <img src="/assets/img/hero/dot-shape.png" alt="shape-img" />
                </div>
                <div className="frame-shape">
                    <img src="/assets/img/hero/frame.png" alt="shape-img" />
                </div>
                <div className="mask-shape wow fadeInRight" data-wow-delay=".7s">
                    <img src="/assets/img/hero/mask-shape.png" alt="shape-img" />
                </div>
                <div className="container pb-5">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-8">
                            <div className="hero-content">
                                <h6 className="wow fadeInUp" data-wow-delay=".2s">Fast Internet Connection </h6>
                                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                                Provide you Quality Internet Providers
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                Providing top-quality internet service with reliable speeds, exceptional customer support, and affordable plans, ensuring seamless connectivity for all users.</p>
                                <div className="hero-button">
                                    <a href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                                        Learn More
                                        
                                    </a>
                                    <a href="/contact" className="btn border-2 border-black py-3 px-4" data-wow-delay=".8s">
                                        Contact Us
                                        
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>

        </>
    )
}
