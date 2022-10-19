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

const Slider = () => {
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
          description={'Make A Quiz 탭에서 문제를 만들 수 있습니다.'}
          image={'/MakeAQuiz.webp'}
          imgLocation={Image_Location_Position.RIGHT}
          width={300}
          height={400}
          alt={'퀴즈를 만들 수 있는 이미지'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <OnboardingDescription
          description={'다른 유저가 만든 퀴즈를 풀 수 있습니다.'}
          image={'/ChoiceAQuiz.webp'}
          imgLocation={Image_Location_Position.RIGHT}
          width={300}
          height={400}
          alt={'퀴즈를 풀 수 있는 기능 설명 이미지'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <OnboardingDescription
          description={'선택한 퀴즈를 풀 수 있습니다.'}
          image={'/SolveAQuiz.webp'}
          imgLocation={Image_Location_Position.RIGHT}
          width={300}
          height={400}
          alt={'결과를 알 수 있는 이미지'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <OnboardingDescription
          description={'퀴즈의 결과를 확인할 수 있습니다.'}
          image={'/Result.webp'}
          imgLocation={Image_Location_Position.RIGHT}
          width={300}
          height={400}
          alt={'다른 유저가 만든 퀴즈'}
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
export default Slider;
