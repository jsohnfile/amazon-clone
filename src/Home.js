import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                
                <div className="home__row">
                    <Product id="12321341" title="The Lean Startup: How Constant Innovation Creates Radically SUccessful Businesses Paperback" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
                    <Product id="49538094" title="Cuisinart SM-50TQ Stand Mixer, Turquoise" price={199.95} rating={4} image="https://m.media-amazon.com/images/I/51x5TWsDQUL._AC_UL320_.jpg"/>
                </div>
                
                <div className="home__row">
                    <Product id="4901242" title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver" price={359.99} image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY436_FMwebp_QL65_.jpg" rating={4}/>
                    <Product id="2048274" title="HP 15-dy1036nr 10th Gen Intel Core i5-1035G1, 15-Inch FHD Laptop, Natural Silver" price={599.99} image="https://m.media-amazon.com/images/I/71WSt8D7KFL._AC_UY436_FMwebp_QL65_.jpg" rating={5}/>
                    <Product id="5329687" title="NVIDIA GEFORCE RTX 2080 Ti Founders Edition" price={1899.45} image="https://m.media-amazon.com/images/I/514km+ZccrL._AC_UY436_FMwebp_QL65_.jpg" rating={5}/>

                </div>
               
                <div className="home__row">
                    <Product title="Dell XPS 15 7590 Laptop 15.6 inch, 4K UHD OLED InfinityEdge, 9th Gen Intel Core i7-9750H, NVIDIA GeForce GTX 1650 4GB GDDR5, 256GB SSD, 16GB RAM, Windows 10 Home, XPS7590-7572SLV-PUS, 15-15.99 inches" price={1690.43} image="https://m.media-amazon.com/images/I/91WgL3IbNIL._AC_UY436_FMwebp_QL65_.jpg" rating={4}/>

                </div>
            
            
            
            </div>

        </div>
    )
}

export default Home