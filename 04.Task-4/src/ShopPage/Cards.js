
import React from 'react'
import Header from '../HomePage/Header.js';
import PageHeader from './PageHeader';
import Footer from '../HomePage/Footer.js';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";

function Page() {
    const { addItem } = useCart();
    const cards = [
        {
            "id": 20,
            "title": "Warhammer 40,000",
            "thumbnail": "https://www.freetogame.com/g/568/thumbnail.jpg",
            "short_description": "A free-to-play CCG set in the Warhammer 40K universe.",
            "game_url": "https://www.freetogame.com/open/warhammer-40000-warpforge",
            "genre": "Card",
            "pre_price": "26",
            "price": "23",
            "platform": "PC (Windows)",
            "publisher": "Everguild Ltd.",
            "developer": "Everguild Ltd.",
            "release_date": "2023-10-19",
            "freetogame_profile_url": "https://www.freetogame.com/warhammer-40000-warpforge"
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
                            <Link to="/mmorgp">MMORGP</Link>
                        </li>
                        <li>
                            <Link className="is_active" to="/cards">Cards</Link>
                        </li>
                    </ul>
                </ul>

                <div className="row trending-box ">
                    {cards.map((item) => (
                        <div className="animate__animated animate__fadeInRight wow  col-lg-3 col-md-6 align-self-center mb-30 trending-items" key={item.id}>
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
function Cards() {
    return (
        <CartProvider>
            <Header/>
            <PageHeader />
            <Page />
            <Footer />
        </CartProvider>
    )
}

export default Cards;