import {useState} from "react";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderStyle = {
        height: "100%",
        position: "relative"
    };
    const slideStyle={
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    };
    const leftArrowStyles={
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    };
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    };
    const dotContainerStyles = {
        display: "flex",
        justifyContent: "center"
    }
    const dotStyles={
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px"
    }

    const goToPrevious=()=>{
        const isFirstChild = currentIndex === 0;
        const newIndex= isFirstChild ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const islastChild = currentIndex === slides.length-1;
        const newIndex = islastChild ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    return(
        <div style={sliderStyle}>
            <div style={leftArrowStyles} onClick={goToPrevious}> &#11164; </div>
            <div style={rightArrowStyles} onClick={goToNext}> &#11166; </div>
            <div style={slideStyle}></div>
            <div style={dotContainerStyles}>
                {slides.map((slide,index)=>(
                    <div key={index} 
                        style={dotStyles} 
                        onClick={()=> goToSlide(index)}>
                        &#x25CF;
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ImageSlider;