import './sliderHome.css';

const SliderHome = ({ children }) => {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {children}
        {children}
      </div>
    </div>
  );
};

export default SliderHome;