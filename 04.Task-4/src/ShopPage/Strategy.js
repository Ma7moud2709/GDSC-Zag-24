
import React from 'react'
import Header from '../HomePage/Header.js';
import PageHeader from './PageHeader';
import Footer from '../HomePage/Footer.js';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";

function Page() {
    const { addItem } = useCart();
    const strategy = [
        {
            "id": 12,
            "title": "Forge of Empires",
            "thumbnail": "https://www.freetogame.com/g/345/thumbnail.jpg",
            "short_description": "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
            "game_url": "https://www.freetogame.com/open/forge-of-empires",
            "genre": "Strategy",
            "pre_price": "23",
            "price": "20",
            "platform": "Web Browser",
            "publisher": "InnoGames",
            "developer": "InnoGames",
            "release_date": "2012-04-17",
            "freetogame_profile_url": "https://www.freetogame.com/forge-of-empires"
        },
        {
            "id": 13,
            "title": "Game Of Thrones Winter",
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
            "id": 14,
            "title": "Elvenar",
            "thumbnail": "https://www.freetogame.com/g/347/thumbnail.jpg",
            "short_description": "A browser based city-building strategy MMO set in the fantasy world of Elvenar.",
            "game_url": "https://www.freetogame.com/open/elvenar",
            "genre": "Strategy",
            "pre_price": "26",
            "price": "20",
            "platform": "Web Browser",
            "publisher": "InnoGames",
            "developer": "InnoGames",
            "release_date": "2015-04-08",
            "freetogame_profile_url": "https://www.freetogame.com/elvenar"
        },
        {
            "id": 15,
            "title": "Goodgame Empire",
            "thumbnail": "https://www.freetogame.com/g/350/thumbnail.jpg",
            "short_description": "A free to play medieval strategy browser game. Build you own castle and create a powerful army! ",
            "game_url": "https://www.freetogame.com/open/goodgame-empire",
            "genre": "Strategy",
            "pre_price": "29",
            "price": "26",
            "platform": "Web Browser",
            "publisher": "Goodgame Studios",
            "developer": "Goodgame Studios",
            "release_date": "2011-08-14",
            "freetogame_profile_url": "https://www.freetogame.com/goodgame-empire"
        },
        {
            "id": 16,
            "title": "Warhaven",
            "thumbnail": "https://www.freetogame.com/g/565/thumbnail.jpg",
            "short_description": "A free-to-play, medieval fantasy PvP game from Nexon.",
            "game_url": "https://www.freetogame.com/open/warhaven",
            "genre": "Strategy",
            "pre_price": "15",
            "price": "10",
            "platform": "PC (Windows)",
            "publisher": "Nexon",
            "developer": "Nexon",
            "release_date": "2023-09-20",
            "freetogame_profile_url": "https://www.freetogame.com/warhaven"
        },
        {
            "id": 17,
            "title": "Waven",
            "thumbnail": "https://www.freetogame.com/g/562/thumbnail.jpg",
            "short_description": "A free-to-play online tactical RPG from Ankama.",
            "game_url": "https://www.freetogame.com/open/waven",
            "genre": "Strategy",
            "pre_price": "29",
            "price": "26",
            "platform": "PC (Windows)",
            "publisher": "Ankama Studio",
            "developer": "Ankama Games",
            "release_date": "2023-08-16",
            "freetogame_profile_url": "https://www.freetogame.com/waven"
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
                            <Link  to="/shooter">Shooter</Link>
                        </li>
                        <li>
                            <Link className="is_active" to="/strategy">Strategy</Link>
                        </li>
                        <li>
                            <Link to="/racing">Racing</Link>
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
                    {strategy.map((item) => (
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
function Strategy() {
    return (
        <CartProvider>
            <Header />
            <PageHeader />
            <Page />
            <Footer />
        </CartProvider>
    )
}

export default Strategy;