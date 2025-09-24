import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {images.map((src, i) => (
         <SwiperSlide
  key={i}
  className="!w-[600px] !h-[600px] flex items-center justify-center bg-black rounded-xl overflow-hidden"
>
  <img
    src={src}
    alt={`project screenshot ${i + 1}`}
    className="w-full h-full object-contain rounded-xl shadow-lg"
  />
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}
