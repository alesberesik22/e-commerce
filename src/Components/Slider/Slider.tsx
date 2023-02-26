import React, {useState} from 'react';
import './Slider.scss'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
    
    return (
        <div className="slider">
            <div className={"slider_container"}>
                {data.map(image => (
                    <img src={image} alt="text"/>
                ))}
            </div>
            <div className={"slider_icons"}>
                <div className={"slider_icon"}>
                    <WestIcon/>
                </div>
                <div className={"slider_icon"}>
                    <EastIcon/>
                </div>
            </div>
        </div>
    );
};

export default Slider;
