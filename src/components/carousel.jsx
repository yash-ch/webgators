import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import qala from "../Galliyan.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; 
import ".././index.css";

let carouselImagesLocation = [
    "./Media/crousel/c1.jpg",
    "./Media/crousel/c2.jpg",
    "./Media/crousel/c3.jpg",
    "./Media/crousel/carousel1.jpg",
    // "./Media/crousel/carousel2.jpg",
    // "./Media/crousel/carousel3.jpg",
];

let artists = [
    "./Media/Artists/akasa.jpg",
    "./Media/Artists/arijit.jpg",
    "./Media/Artists/arman.jpg",
    "./Media/Artists/neha.jpg",
    "./Media/Artists/sanam.jpg",
    "./Media/Artists/katy perry.webp",
    "./Media/Artists/Shawn -Mendes.jpg",
    "./Media/Artists/Camila-Cabello.jpg"
];

let latestEnglish = [
    "./Media/latest english/ily.jpg",
    "./Media/latest english/let me go.jpg",
    "./Media/latest english/qurantine clean.jpg",
    "./Media/latest english/roar.jpg"

];

function Carousel() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(qala);
    const playingButton = () => {
        if (isPlaying) {
          pause(); // this will pause the audio
          setIsPlaying(false);
        } else {
          play(); // this will play the audio
          setIsPlaying(true);
        }
      };

    return(
        <div>
            <div>
                <p style={{paddingLeft:"20px", color:"white", fontSize:"20px"}}>Top Songs</p>
                {carouselImagesLocation.map((image, index) => {
                    return(
                        <div style={{float:"left", padding:"10px"}} onClick={playingButton} className="card-image">
                            <img src={image} style={{width : "400px", height : "250px",borderRadius:"5px", fontFamily:"Vollkorn"}}/>
                        </div>
                    )
                })
            }
            </div>
            <div>
                <p style={{paddingLeft:"20px", color:"white", fontSize:"20px"}}>Top Artist</p>
                {artists.map((image, index) => {
                    return(
                        <div style={{float:"left", padding:"10px"}} onClick={playingButton} className="card-image">
                            <img src={image} style={{width : "190px", height : "190px", borderRadius:"100px", fontFamily:"Vollkorn"}}/>
                        </div>
                    )
                })
            }
            </div>
            <div>
                <p style={{paddingLeft:"20px", color:"white", fontSize:"20px"}}>Latest English</p>
                {latestEnglish.map((image, index) => {
                    return(
                        <div style={{float:"left", padding:"10px"}} onClick={playingButton} className="card-image">
                            <img src={image} style={{width : "400px", height : "250px",borderRadius:"5px", fontFamily:"Vollkorn"}}/>
                        </div>
                    )
                })
            }
            </div>
            <div style={{marginLeft: "45vw", position: "fixed", bottom:"30px"}}>
                <div className="card-image" onClick={playingButton}>
                    <img src="./gg.webp" width="155px" style={{borderRadius:"10px", marginBottom:"10px"}}/>
                </div>
                <button className="playButton">
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                    <BiSkipPrevious />
                </IconContext.Provider>
                </button>
                {!isPlaying ? (
                <button className="playButton" onClick={playingButton}>
                    <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                    <AiFillPlayCircle />
                    </IconContext.Provider>
                </button>
                ) : (
                <button className="playButton" onClick={playingButton}>
                    <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                    <AiFillPauseCircle />
                    </IconContext.Provider>
                </button>
                )}
                <button className="playButton">
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                    <BiSkipNext />
                </IconContext.Provider>
                </button>
            </div>
        </div>
    );
}

export default Carousel;