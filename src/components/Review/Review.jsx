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

const Review = () => {
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
            <SwiperSlide>
              <div>
                <div className="block rounded-lg bg-neutral text-neutral-content shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white ">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">
                      Maria Smantha
                    </h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Lorem ipsum dolor sit amet eos adipisci, consectetur
                      adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="block rounded-lg bg-neutral text-neutral-content shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Neque cupiditate assumenda in maiores repudi mollitia
                      architecto.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="block rounded-lg bg-neutral text-neutral-content shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Delectus impedit saepe officiis ab aliquam repellat rem
                      unde ducimus.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="block rounded-lg bg-neutral text-neutral-content shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Delectus impedit saepe officiis ab aliquam repellat rem
                      unde ducimus.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="block rounded-lg bg-neutral text-neutral-content shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Delectus impedit saepe officiis ab aliquam repellat rem
                      unde ducimus.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

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
            <SwiperSlide>
              <div>
                <div className="block rounded-lg bg-neutral text-neutral-content shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white ">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold ">
                      Maria Smantha
                    </h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Lorem ipsum dolor sit amet eos adipisci, consectetur
                      adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="block rounded-lg bg-neutral text-neutral-content shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Neque cupiditate assumenda in maiores repudi mollitia
                      architecto.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="block rounded-lg bg-neutral text-neutral-content shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Delectus impedit saepe officiis ab aliquam repellat rem
                      unde ducimus.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="block rounded-lg bg-neutral text-neutral-content shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Delectus impedit saepe officiis ab aliquam repellat rem
                      unde ducimus.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="block rounded-lg bg-neutral text-neutral-content shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Delectus impedit saepe officiis ab aliquam repellat rem
                      unde ducimus.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

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
