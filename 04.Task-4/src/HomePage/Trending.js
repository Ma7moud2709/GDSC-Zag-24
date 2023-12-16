import React from 'react'
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";
import Header from './Header';


function Page() {
    const { addItem } = useCart();
    const trending = [
        {
            "id": 2,
            "title": "PUBG",
            "thumbnail": "https://www.freetogame.com/g/516/thumbnail.jpg",
            "short_description": "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
            "game_url": "https://www.freetogame.com/open/pubg",
            "genre": "Shooter",
            "pre_price": "40",
            "price": "30",
            "platform": "PC (Windows)",
            "publisher": "KRAFTON, Inc.",
            "developer": "KRAFTON, Inc.",
            "release_date": "2022-01-12",
            "freetogame_profile_url": "https://www.freetogame.com/pubg"
        },
        {

            "id": 12,
            "title": "Game Of Thrones ",
            "thumbnail": "https://www.freetogame.com/g/340/thumbnail.jpg",
            "short_description": "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
            "game_url": "https://www.freetogame.com/open/game-of-thrones-winter-is-coming",
            "genre": "Strategy",
            "pre_price": "35",
            "price": "30",
            "platform": "Web Browser",
            "publisher": "GTArcade",
            "developer": "YOOZOO Games ",
            "release_date": "2019-11-14",
            "freetogame_profile_url": "https://www.freetogame.com/game-of-thrones-winter-is-coming"
        },
        {
            "id": 3,
            "title": "Call Of Duty",
            "thumbnail": "https://www.freetogame.com/g/452/thumbnail.jpg",
            "short_description": "A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.",
            "game_url": "https://www.freetogame.com/open/call-of-duty-warzone",
            "genre": "Shooter",
            "pre_price": "35",
            "price": "28",
            "platform": "PC (Windows)",
            "publisher": "Activision",
            "developer": "Infinity Ward",
            "release_date": "2020-03-10",
            "freetogame_profile_url": "https://www.freetogame.com/call-of-duty-warzone"
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

    ]

    return (
        <div>
            {/* <!-- ***** Trending Area Start ***** --> */}

            <div className="section trending">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>Trending</h6>
                                <h2>Trending Games</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <Link to="/shop">View All</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row trending-box">
                        {trending.map((item) => (
                            <div className="col-lg-3 col-md-6">
                                <div className="item wow bounceInLeft" data-wow-duration="1.5s">
                                    <div className="thumb">
                                        <Link to="/shop"><img src={item.thumbnail} alt="" /></Link>
                                        <span className="price">${item.price}</span>
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
                    {/* <!-- ***** Trending Area End ***** --> */}
                </div>
            </div>
        </div>
    )
}

function Trending() {
    return (

        <CartProvider>
            <Header/>
            <Page />
        </CartProvider>
    )
}

export default Trending;