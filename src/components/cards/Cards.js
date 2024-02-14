"use client"
import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'

import CardsCss from "./Cards.module.css"

const Cards = ({item, index}) => {

    const [ isOpen, setIsOpen ] = useState(false);

//     const [isExpanded, setExpanded] = useState(false)
//     const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

//   return (
//     <>
//         <div className={CardsCss.card}>
//             <img className={CardsCss.cardImage} src={item.image} alt='displaypic'/>
//             <div className={CardsCss.cardBody}>
//                 <h2 className={CardsCss.cardBodyH2}>{item.heading}</h2>
//                 <p className={CardsCss.cardBodyPara}>{item.paragraph}</p>
//                 <p className={CardsCss.cardBodyPara} {...getCollapseProps()}>{item.show}</p>
//                 <button className={CardsCss.cardBodyButton}
//                     {...getToggleProps({onClick: () => setExpanded((prevExpanded) => !prevExpanded),
//                     })}>
//                     {isExpanded ? 'Show Less' : 'Read More'}
//                 </button>
//             </div>
//         </div>
//     </>
//   )

    return (
        <>
            <div className={CardsCss.card}>
                <img className={CardsCss.cardImage} src={item.image} alt='displaypic'/>
                <div className={CardsCss.cardBody}>
                    <h2 className={CardsCss.cardBodyH2}>{item.heading}</h2>
                    <p className={CardsCss.cardBodyPara}>{isOpen ? `${item.paragraph} ${item.show}` : `${item.paragraph}`}</p>
                    <button className={CardsCss.cardBodyButton} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Show Less" : "Read More"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cards;
