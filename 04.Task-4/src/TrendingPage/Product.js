import React from 'react';
import { Container, Row } from 'reactstrap';
import { CartProvider, useCart } from "react-use-cart";
import Header from '../HomePage/Header';


function Page() {
    const { addItem } = useCart();
    const games = [
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
            "id": 12,
            "title": "Game Of Thrones Winter Is Coming",
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
            "id": 13,
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
            "id": 14,
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
            "id": 15,
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
        },
        {
            "id": 16,
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
            "id": 17,
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
        },
        {
            "id": 18,
            "title": "Warhammer 40,000: Warpforge",
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
        },
        {
            "id": 19,
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
            "id": 20,
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
        },
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
            "title": "Riding Club Championships",
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
            "title": "Forza Motorsport 6: Apex",
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
    const num = Math.floor(Math.random() * 22 + 1);
    return (
        <div>
            <div className="single-product pt-5">
                <Container>
                    <Row>
                        <div className=" col-md-5 left-image animate__animated animate__fadeIn">
                            <img src={games[num].thumbnail} alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h4>{games[num].title}</h4>
                            <span className="price"><em>${games[num].pre_price}</em> ${games[num].price}</span>
                            <p>{games[num].short_description}</p>

                            <button onClick={() => addItem(games[num])} className='btn col-md-4 rounded-pill' style={{ backgroundColor: "#ee626b", color: "white" }}><i className="fa fa-shopping-bag"></i> ADD TO CART</button>
                            <ul>
                                <li><span>Genre:</span> {games[num].genre}</li>
                                <li><span>Developed by:</span>{games[num].developer}</li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <div className="sep"></div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

function Product() {
    return (
        <CartProvider>
            <Header/>
            <Page />
        </CartProvider>
    )
}

export default Product;