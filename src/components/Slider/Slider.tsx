// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import OnboardingDescription, {
  Image_Location_Position,
} from '../OnboardingDescription/OnboardingDescription';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      //간격
      slidesPerView={1}
      //보여질 컨텐츠 수
      navigation
      // 화살표 유무
    >
      <SwiperSlide>
        <OnboardingDescription
          description={
            '길면 어떻게 될까어떻게 될까어떻게 될까어떻게 될까어떻게 될까어떻게 될까?'
          }
          image={
            'http://res.heraldm.com/content/image/2015/01/19/20150119001097_0.jpg'
          }
          imgLocation={Image_Location_Position.RIGHT}
        />
      </SwiperSlide>
      <SwiperSlide>Slide 2Slide 1Slide 1Slide 1Slide 1Slide 1</SwiperSlide>
      <SwiperSlide>
        Slide 3Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1
      </SwiperSlide>
      <SwiperSlide>Slide 4Slide 1Slide 1Slide 1Slide 1Slide 1</SwiperSlide>
      ...
    </Swiper>
  );
};
