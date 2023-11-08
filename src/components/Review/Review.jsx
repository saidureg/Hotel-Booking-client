import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const reviews = useReviews();
  return (
    <div className="max-w-screen-xl mx-auto my-12">
      <section className="text-white">
        <div className="mx-auto text-center md:max-w-2xl lg:max-w-5xl  bg-slate-700  p-2 mb-4 rounded mt-28">
          <h3 className="mb-6 text-3xl font-bold text-[#ffcf00]">
            Testimonials
          </h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0">
            Embark on a Journey of Heartwarming Tales, Genuine Reviews, and
            Memorable Adventures Shared by Our Cherished Guests. Be Inspired,
            Stay Informed, and Embellish Your Next Unforgettable Stay!
          </p>
        </div>

        <div className="md:hidden">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={30}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                {" "}
                <ReviewCard key={idx} review={review}></ReviewCard>{" "}
              </SwiperSlide>
            ))}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>

        <div className="hidden md:block">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={30}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 10,
              stretch: 20,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                {" "}
                <ReviewCard key={idx} review={review}></ReviewCard>{" "}
              </SwiperSlide>
            ))}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Review;
