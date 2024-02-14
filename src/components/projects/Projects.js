"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import ProjectCss from "./Projects.module.css"
import { pics1, pics2, pics3, pics4 } from '../../../public/images'

const Projects = () => {

    const [newItems, setNewItems] = useState([{
        image: "/images/img/pics1.png",
        title: "Name Slider",
        desc: "Desc",
        isActive: false
    },{
        image: "/images/img/pics2.png",
        title: "Name Slider",
        desc: "Desc",
        isActive: false
    },{
        image: "/images/img/pics3.png",
        title: "Name Slider",
        desc: "Desc",
        isActive: false
    },{
        image: "/images/img/pics4.png",
        title: "Name Slider",
        desc: "Desc",
        isActive: false
    }])

    const [current, setCurrent] = useState(0);

    let thumbnailClasses = [ProjectCss.carousel]
    thumbnailClasses.push(ProjectCss.next)

    const nextClick = () => {
        let i = current;
        if(current >= newItems.length -1) {
            i = 0
        } else {
            i = i +1
        }
        
        console.log(thumbnailClasses)
        console.log(i);
        setNewItems(item=> {
            item[i].isActive = true
            return[
                ...item,
            ]
        })
        thumbnailClasses.push(i == 0)
        setCurrent(i)
    }

    const prevClick = () => {
        let i = current;
        if(current <= 0) {
            i = newItems.length -1
        } else {
            i = i -1
        }
        console.log(i);
        setCurrent(i)
    }

    console.log(thumbnailClasses)
    
  return (
    <div className={ProjectCss.mainContainer}>
      <div className={ProjectCss.carousel}>
      {/* List Items */}
        <div className={ProjectCss.list}>
            <div className={ProjectCss.item}>
                <Image className={ProjectCss.img} height={500} width={500} src={newItems[current].image} alt="First Pic"/>
                <div className={ProjectCss.content}>
                    <div className={ProjectCss.author}>Ini</div>
                    <div className={ProjectCss.title}>DESIGN SLIDER</div>
                    <div className={ProjectCss.topic}>ANIMAL</div>
                    <div className={ProjectCss.desc}>
                        You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
                    </div>
                    <div className={ProjectCss.buttonDiv}>
                        <button className={ProjectCss.btn}>SEE MORE</button>
                        <button className={ProjectCss.btn}>SEE MORE</button>
                    </div>
                </div>
            </div>
            <div className={ProjectCss.item}>
                <Image className={ProjectCss.img} height={100} width={100} src={pics2} alt="First Pic"/>
                <div className={ProjectCss.content}>
                    <div className={ProjectCss.author}>Ini</div>
                    <div className={ProjectCss.title}>MAGNET SLIDER</div>
                    <div className={ProjectCss.topic}>PLANT</div>
                    <div className={ProjectCss.desc}>
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </div>
                    <div className={ProjectCss.buttonDiv}>
                        <button className={ProjectCss.btn}>SEE MORE</button>
                        <button className={ProjectCss.btn}>SEE MORE</button>
                    </div>
                </div>
            </div>
            <div className={ProjectCss.item}>
                <Image className={ProjectCss.img} height={100} width={100} src={pics3} alt="First Pic"/>
                <div className={ProjectCss.content}>
                    <div className={ProjectCss.author}>Ini</div>
                    <div className={ProjectCss.title}>AMEBO SLIDER</div>
                    <div className={ProjectCss.topic}>HUMAN</div>
                    <div className={ProjectCss.desc}>
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className={ProjectCss.buttonDiv}>
                        <button className={ProjectCss.btn}>SEE MORE</button>
                        <button className={ProjectCss.btn}>SEE MORE</button>
                    </div>
                </div>
            </div>
            <div className={ProjectCss.item}>
                <Image className={ProjectCss.img} height={100} width={100} src={pics4} alt="First Pic"/>
                <div className={ProjectCss.content}>
                    <div className={ProjectCss.author}>Ini</div>
                    <div className={ProjectCss.title}>TECH DESIGN SLIDER</div>
                    <div className={ProjectCss.topic}>TECHNOLOGY</div>
                    <div className={ProjectCss.desc}>
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                    </div>
                    <div className={ProjectCss.buttonDiv}>
                        <button className={ProjectCss.btn}>SEE MORE</button>
                        <button className={ProjectCss.btn}>SEE MORE</button>
                    </div>
                </div>
            </div>
        </div>
        {/* Thumbnail Images */}
        <div className={ProjectCss.thumbnail}>
        {
            newItems.map((item)=> {
                return(
                    <div className={ProjectCss.thumbnail}>
                        <Image className={ProjectCss.img} height={100} width={100} src={item.image} alt="First Pic"/>
                        <div className={ProjectCss.content}>
                            <div className={ProjectCss.title}>{item.title}</div>
                            <div className={ProjectCss.desc}>{item.desc}</div>
                        </div>
                    </div>
                )
            })
        }
            
            <div className={ProjectCss.item}>
                <Image className={ProjectCss.img} height={100} width={100} src={pics3} alt="First Pic"/>
                <div className={ProjectCss.content}>
                    <div className={ProjectCss.title}>Name Slider</div>
                    <div className={ProjectCss.desc}>Desc</div>
                </div>
            </div>
            <div className={ProjectCss.item}>
                <Image className={ProjectCss.img} height={100} width={100} src={pics4} alt="First Pic"/>
                <div className={ProjectCss.content}>
                    <div className={ProjectCss.title}>Name Slider</div>
                    <div className={ProjectCss.desc}>Desc</div>
                </div>
            </div>
            <div className={ProjectCss.item}>
                <Image className={ProjectCss.img} height={100} width={100} src={pics1} alt="First Pic"/>
                <div className={ProjectCss.content}>
                    <div className={ProjectCss.title}>Name Slider</div>
                    <div className={ProjectCss.desc}>Desc</div>
                </div>
            </div>
        </div>
        {/* Arrow Buttons */}
        <div className={ProjectCss.arrows}>
            <button onClick={prevClick} className={ProjectCss.arrowBtn}>⇽</button>
            <button onClick={nextClick} className={ProjectCss.arrowBtn}>⇾</button>
        </div>
        {/* Timer Animation */}
        <div className={ProjectCss.timer}></div>
      </div>
    </div>
  )
}

export default Projects;
