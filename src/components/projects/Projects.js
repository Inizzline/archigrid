"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ProjectCss from "./Projects.module.css"
import { elect, hvac11, pics2, civil, maintenance } from "../../../public/images";
import { useRouter } from 'next/navigation'

export default () => {

    const router = useRouter();

  return (
    <div className={ProjectCss.mainContainer}>
        <div className={ProjectCss.h2Div}>
        <h2 className={ProjectCss.h2}>Our Projects</h2>
        </div>
        <Swiper className={ProjectCss.swiper}
            effect={'coverflow'}
            grabCursor={true}
            spaceBetween={30}
            centeredSlides={true}
            initialSlide={2}
            speed={600}
            preventClicks={true}
            slidesPerView={3}
            coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 350,
            modifier: 1,
            slideShadows: true
        }}
        breakpoints={{
            600: {
                slidesPerView: 3
            },
            600: {
                slidesPerView: 3
            },
            481: {
                slidesPerView: 1
            },
            360: {
                slidesPerView: 1.1,
            },
            280: {
                slidesPerView: 1,
            }
        }}
        pagination={{el: ProjectCss.swiperPagination, clickable: true}}
        modules={[EffectCoverflow, Pagination, Navigation]}
        >
            <SwiperSlide className={ProjectCss.swiperSlide} onClick={()=>router.push("/projects/civilProject")}>
                <Image className={ProjectCss.img} src={civil} height={500} width={500} alt="pics1"/>
                <div className={ProjectCss.title}>
                    <span className={ProjectCss.span}>Civil</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className={ProjectCss.swiperSlide} onClick={()=>router.push("/projects/electricalInsatallationProject")}>
                <Image className={ProjectCss.img} src={elect} height={500} width={500} alt="pics1"/>
                <div className={ProjectCss.title}>
                    <span className={ProjectCss.span}>Electrical Installation</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className={ProjectCss.swiperSlide} onClick={()=>router.push("/projects/mechanicalInstallationProject")}>
                <Image className={ProjectCss.img} src={hvac11} height={500} width={500} alt="pics1"/>
                <div className={ProjectCss.title}>
                    <span className={ProjectCss.span}>Mechanical Installation</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className={ProjectCss.swiperSlide}  onClick={()=>router.push("/projects/oilAndGasProject")}>
                <Image className={ProjectCss.img} src={pics2} height={500} width={500} alt="pics1"/>
                <div className={ProjectCss.title}>
                    <span className={ProjectCss.span}>Oil And Gas</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className={ProjectCss.swiperSlide} onClick={()=>router.push("/projects/maintenanceProject")}>
                <Image className={ProjectCss.img} src={maintenance} height={500} width={500} alt="pics1"/>
                <div className={ProjectCss.title}>
                    <span className={ProjectCss.span}>General Maintenance</span>
                </div>
            </SwiperSlide>
            <div className={ProjectCss.swiperPagination}></div>
    </Swiper>
    </div>
  );
};
