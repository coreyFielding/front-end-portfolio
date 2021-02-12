import React, {useEffect, useRef} from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"
import './styles.scss'

SwiperCore.use([Pagination]);

const SlideType = {
    EDUCATION: "education",
    EXPERIENCE: "experience",
    SKILLS: "skills",
}

const Card = ({children}) => (
        <div className="w-48 h-76 rounded-lg bg-white px-2 py-1 mx-4 my-20 shadow-ribbon">
            {children}
        </div>
)

const EducationSlide = ({items}) => {
    return (
        <div className="flex flex-row justify-center h-96">
            {
                items.map((item, index) => (
                    <Card key={index}>
                        <div className="grid justify-center mt-5">
                            <h2 className="text-lg mb-2 font-semibold">{item.degree_study}</h2>
                            <span className="text-xs">{item.institute_name}</span>
                            <span className="text-xs">{item.attended}</span>
                            <h2 className="text-2xl text-center text-primary font-semibold">{item.degree_grade}</h2>
                        </div>
                    </Card>
                ))
            }
        </div>
    )
}
const ExperienceSlide = (): JSX.Element => (
    <div className="swiper-slide"></div>
)
const SkillsSlide = (): JSX.Element => (
    <div className="swiper-slide"></div>
)

const SwiperContainer = ({slides}): JSX.Element => {
    const slideComponents = new Map<string, React.ComponentType<any>>([
        [SlideType.EDUCATION, EducationSlide],
        [SlideType.EXPERIENCE, ExperienceSlide],
        [SlideType.SKILLS, SkillsSlide]
    ])
    return (
        <Swiper
            pagination={{clickable: true,
                renderBullet: (index, className) => {
                return '<span class="' + className + '">' + (`${slides[index].type.charAt(0).toUpperCase() + slides[index].type.slice(1)}`) + '</span>'
                }}} className="h-96 p-4">

            <div className="swiper-pagination"></div>
            {
                slides && slides.map((slide, index) => {
                        if (slideComponents.has(slide?.type)) {
                            const Component = slideComponents.get(slide.type)
                            return (
                                <SwiperSlide key={index}>
                                    <Component key={slide.id} items={slide.items} />
                                </SwiperSlide>
                            )
                        }
                    }
                )
            }
        </Swiper>
    )
}
interface IResumeBlockProps {
    education: any
    experience: any
    skills: any
}
export default ({education, experience, skills}: IResumeBlockProps) => {
    const slides = [education, experience, skills]

    return (
        <section>
            <div className="w-full">
                <div className="py-10 sm:py-10 sm:pb-0">
                    <h2 className="text-primary text-center">Resume</h2>
                </div>
                <div className="w-2/6 mx-auto">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <SwiperContainer slides={slides} />
                        </div>
                    </div>
                    <div className="mb-5">
                        <span className="w-40 py-2 rounded-full border-2 border-teal hover:bg-teal">
                            <a href="#" download="#" className="text-sm text-black px-3">Download Resume</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}