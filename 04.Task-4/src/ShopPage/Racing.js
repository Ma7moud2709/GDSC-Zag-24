
import React from 'react'
import Header from '../HomePage/Header.js';
import PageHeader from './PageHeader';
import Footer from '../HomePage/Footer.js';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";

function Page() {
    const { addItem } = useCart();
    const racing = [
        {
            "id": 21,
            "title": "Kartrider: Drift",
            "thumbnail": "https://www.freetogame.com/g/546/thumbnail.jpg",
            "short_description": "A free-to-play multiplayer online racing game set in the Kartrider franchise.",
            "game_url": "https://www.freetogame.com/open/kartrider-drift",
            "genre": "Racing",
            "pre_price": "35",
            "price": "30",
            "platform": "PC (Windows)",
            "publisher": "Nexon America Inc.",
            "developer": "Nexon Korea Corporation",
            "release_date": "2023-01-10",
            "freetogame_profile_url": "https://www.freetogame.com/kartrider-drift"
        },
        {
            "id": 22,
            "title": "Riding Club",
            "thumbnail": "https://www.freetogame.com/g/93/thumbnail.jpg",
            "short_description": "An online competitive horse riding game inspired by traditional equestrian disciplines. ",
            "game_url": "https://www.freetogame.com/open/riding-club-championships",
            "genre": "Racing",
            "pre_price": "24",
            "price": "20",
            "platform": "PC (Windows)",
            "publisher": "Artplant",
            "developer": "Artplant",
            "release_date": "2016-09-27",
            "freetogame_profile_url": "https://www.freetogame.com/riding-club-championships"
        },
        {
            "id": 23,
            "title": "Forza Motorsport 6",
            "thumbnail": "https://www.freetogame.com/g/121/thumbnail.jpg",
            "short_description": "A free-to-play MMO racing game that comes from makers of one of the most popular video game racing series ever. ",
            "game_url": "https://www.freetogame.com/open/forza-motorsport-6-apex",
            "genre": "Racing",
            "pre_price": "40",
            "price": "30",
            "platform": "PC (Windows)",
            "publisher": "Microsoft",
            "developer": "Turn 10",
            "release_date": "2015-09-15",
            "freetogame_profile_url": "https://www.freetogame.com/forza-motorsport-6-apex"
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
                            <Link className="is_active" to="/racing">Racing</Link>
                        </li>
                        <li>
                            <Link to="/mmorgp">MMORGP</Link>
                        </li>
                        <li>
                            <Link to="/cards">Cards</Link>
                        </li>
                    </ul>
                </ul>

                <div className="row trending-box ">
                    {racing.map((item) => (
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
function Racing() {
    return (
        <CartProvider>
            <Header />
            <PageHeader />
            <Page />
            <Footer />
        </CartProvider>
    )
}

export default Racing;