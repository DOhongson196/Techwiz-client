import { SimpleSlider } from '../../../components/Slider';
import SlideItem from './SlideItem';
import images from '../../../assets/images';

function HomeBanner() {
  return (
    <div className="flex justify-between items-center mx-auto w-full">
      {/* slider */}
      <div className="w-full h-full">
        <SimpleSlider autoplay infinite fade>
          <SlideItem src={images.slide1} />
          <SlideItem src={images.slide3} />
          <SlideItem src={images.slide2} />
        </SimpleSlider>
      </div>
    </div>
  );
}

export default HomeBanner;
