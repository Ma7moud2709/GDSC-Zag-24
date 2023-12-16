
import React from 'react'
import Header from '../HomePage/Header.js';
import PageHeader from './PageHeader';
import Footer from '../HomePage/Footer.js';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";

function Page() {
    const { addItem } = useCart();
    const mmorgp = [
        {
            "id": 18,
            "title": "Eternal Fury",
            "thumbnail": "https://www.freetogame.com/g/455/thumbnail.jpg",
            "short_description": "A free-to-play ARPG from R2 Games!",
            "game_url": "https://www.freetogame.com/open/eternal-fury",
            "genre": "MMORPG",
            "pre_price": "20",
            "price": "15",
            "platform": "Web Browser",
            "publisher": "R2 Games",
            "developer": "R2 Games",
            "release_date": "2019-05-21",
            "freetogame_profile_url": "https://www.freetogame.com/eternal-fury"
        },
        {
            "id": 19,
            "title": "RuneScape",
            "thumbnail": "https://www.freetogame.com/g/433/thumbnail.jpg",
            "short_description": "A popular 3D browser MMORPG boasting a huge player base and 15 years of content.",
            "game_url": "https://www.freetogame.com/open/runescape",
            "genre": "MMORPG",
            "pre_price": "15",
            "price": "20",
            "platform": "PC (Windows), Web Browser",
            "publisher": "Jagex",
            "developer": "Jagex",
            "release_date": "2001-01-04",
            "freetogame_profile_url": "https://www.freetogame.com/runescape"
        }
    ];
    return (
        <div className="section trending">
            <div className="container">
                <ul className="trending-filter">
                    <ul className="trending-filter">
                        <li>
                            <Link to="/shop">Show All</Link>
                        </li>
                        <li>
                            <Link to="/shooter">Shooter</Link>
                        </li>
                        <li>
                            <Link to="/strategy">Strategy</Link>
                        </li>
                        <li>
                            <Link to="/racing">Racing</Link>
                        </li>
                        <li>
                            <Link className="is_active" to="/mmorgp">MMORGP</Link>
                        </li>
                        <li>
                            <Link to="/cards">Cards</Link>
                        </li>
                    </ul>
                </ul>

                <div className="row trending-box ">
                    {mmorgp.map((item) => (
                        <div className="animate__animated animate__fadeInRight wow col-lg-3 col-md-6 align-self-center mb-30 trending-items" key={item.id}>
                            <div className="item" id={item.genre}>
                                <div className="thumb">
                                    <Link to=""><img src={item.thumbnail} alt="" className='img-fluid' /></Link>
                                    <span className="price"><em>${item.pre_price}</em>${item.price}</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">{item.genre}</span>
                                    <h4>{item.title}</h4>
                                    <button className='btn mt-2 rounded-3' onClick={() => addItem(item)} >Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
function Mmorgp() {
    return (
        <CartProvider>
            <Header />
            <PageHeader />
            <Page />
            <Footer />
        </CartProvider>
    )
}

export default Mmorgp;