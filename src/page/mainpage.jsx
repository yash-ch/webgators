import Carousel from './../components/carousel';

function MainPage() {
    return(
        <div style={{backgroundImage : `url(${process.env.PUBLIC_URL + '/Media/Background/B-2.jpg'})`, height:"150%", backgroundRepeat: "repeat", backgroundSize:"cover"}}>
            <div style={{height: "60px", width : "100vw", marginTop:"-40px"}}>
                <p style={{paddingTop:"10px", marginLeft:"20px", fontSize: "40px", color:"white", fontFamily: 'Lilita One'}}>NOT SPOTIFY</p>
            </div>
            <Carousel/>
        </div>
    );
}

export default MainPage;