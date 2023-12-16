
import React from 'react'
import Header from '../HomePage/Header.js';
import PageHeader from './PageHeader';
import Footer from '../HomePage/Footer.js';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";

function Page() {
    const { addItem } = useCart();
    const shooter = [
        {
            "id": 1,
            "title": "Overwatch 2",
            "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
            "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
            "game_url": "https://www.freetogame.com/open/overwatch-2",
            "genre": "Shooter",
            "pre_price": "35",
            "price": "24",
            "platform": "PC (Windows)",
            "publisher": "Activision Blizzard",
            "developer": "Blizzard Entertainment",
            "release_date": "2022-10-04",
            "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
        },
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
            "id": 4,
            "title": "Fortnite",
            "thumbnail": "https://www.freetogame.com/g/57/thumbnail.jpg",
            "short_description": "A free-to-play, standalone mode of Epic Game's Fortnite. ",
            "game_url": "https://www.freetogame.com/open/fortnite-battle-royale",
            "genre": "Shooter",
            "pre_price": "45",
            "price": "35",
            "platform": "PC (Windows)",
            "publisher": "Epic Games",
            "developer": "Epic Games",
            "release_date": "2017-09-26",
            "freetogame_profile_url": "https://www.freetogame.com/fortnite-battle-royale"
        },
        {
            "id": 5,
            "title": "Halo Infinite",
            "thumbnail": "https://www.freetogame.com/g/515/thumbnail.jpg",
            "short_description": "For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer.",
            "game_url": "https://www.freetogame.com/open/halo-infinite",
            "genre": "Shooter",
            "pre_price": "33",
            "price": "20",
            "platform": "PC (Windows)",
            "publisher": "Xbox Game Studios",
            "developer": "343 Industries",
            "release_date": "2021-11-15",
            "freetogame_profile_url": "https://www.freetogame.com/halo-infinite"
        },
        {
            "id": 6,
            "title": "Dark Orbit",
            "thumbnail": "https://www.freetogame.com/g/380/thumbnail.jpg",
            "short_description": "A browser-based 3D space-combat MMO with a massive playerbase!",
            "game_url": "https://www.freetogame.com/open/darkorbit",
            "genre": "Shooter",
            "pre_price": "30",
            "price": "23",
            "platform": "Web Browser",
            "publisher": "Bigpoint",
            "developer": "Bigpoint",
            "release_date": "2006-12-11",
            "freetogame_profile_url": "https://www.freetogame.com/darkorbit"
        },
        {
            "id": 7,
            "title": "Crossout",
            "thumbnail": "https://www.freetogame.com/g/5/thumbnail.jpg",
            "short_description": "A post-apocalyptic MMO vehicle combat game! ",
            "game_url": "https://www.freetogame.com/open/crossout",
            "genre": "Shooter",
            "pre_price": "30",
            "price": "25",
            "platform": "PC (Windows)",
            "publisher": "Targem",
            "developer": "Gaijin",
            "release_date": "2017-05-30",
            "freetogame_profile_url": "https://www.freetogame.com/crossout"
        },
        {
            "id": 8,
            "title": "World of Warships",
            "thumbnail": "https://www.freetogame.com/g/9/thumbnail.jpg",
            "short_description": "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
            "game_url": "https://www.freetogame.com/open/world-of-warships",
            "genre": "Shooter",
            "pre_price": "28",
            "price": "20",
            "platform": "PC (Windows)",
            "publisher": "Wargaming",
            "developer": "Wargaming",
            "release_date": "2015-07-02",
            "freetogame_profile_url": "https://www.freetogame.com/world-of-warships"
        },
        {
            "id": 9,
            "title": "Valorant",
            "thumbnail": "https://www.freetogame.com/g/466/thumbnail.jpg",
            "short_description": "Test your mettle in Riot Games’ character-based FPS shooter Valorant.",
            "game_url": "https://www.freetogame.com/open/valorant",
            "genre": "Shooter",
            "pre_price": "35",
            "price": "27",
            "platform": "PC (Windows)",
            "publisher": "Riot Games",
            "developer": "Riot Games",
            "release_date": "2020-06-02",
            "freetogame_profile_url": "https://www.freetogame.com/valorant"
        },
        {
            "id": 10,
            "title": "Apex Legends",
            "thumbnail": "https://www.freetogame.com/g/23/thumbnail.jpg",
            "short_description": "A free-to-play strategic battle royale game featuring 60-player matches and team-based play. ",
            "game_url": "https://www.freetogame.com/open/apex-legends",
            "genre": "Shooter",
            "pre_price": "25",
            "price": "18",
            "platform": "PC (Windows)",
            "publisher": "Electronic Arts",
            "developer": "Electronic Arts",
            "release_date": "2019-02-04",
            "freetogame_profile_url": "https://www.freetogame.com/apex-legends"
        },
        {
            "id": 11,
            "title": "World of Warships",
            "thumbnail": "https://www.freetogame.com/g/9/thumbnail.jpg",
            "short_description": "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
            "game_url": "https://www.freetogame.com/open/world-of-warships",
            "genre": "Shooter",
            "pre_price": "25",
            "price": "15",
            "platform": "PC (Windows)",
            "publisher": "Wargaming",
            "developer": "Wargaming",
            "release_date": "2015-07-02",
            "freetogame_profile_url": "https://www.freetogame.com/world-of-warships"

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
                            <Link className="is_active" to="/shooter">Shooter</Link>
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
                            <Link to="/cards">Cards</Link>
                        </li>
                    </ul>
                </ul>

                <div className="row trending-box ">
                    {shooter.map((item) => (
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
function Shooter() {
    return (
        <CartProvider>
            <Header />
            <PageHeader />
            <Page />
            <Footer />
        </CartProvider>
    )
}

export default Shooter;