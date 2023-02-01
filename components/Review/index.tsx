import Styles from './styles.module.scss'
import content from '../../content'
import CardReview from 'components/ui/CardReview'
import { useState } from 'react'
import { ButtonArrow } from 'components/ui/ButtonArrow'


const Review = () => {
    const [arrayReview, setArrayReview] = useState(content.review)
    const [activeId, setActiveId] = useState(1)

    const orderByOrderValue = ( a:any, b: any ) => {
        if ( a.order < b.order ){
        return -1;
        }
        if ( a.order > b.order ){
        return 1;
        }
        return 0;
    }
  
    const toFlip = (move: string) => {
        let i = 1
        arrayReview.forEach((curr: any) => {
            if (curr.order === 0) {
                curr.order = 1
                if (move === 'plus') {
                    curr.id === arrayReview.length ? i = 1 : i = curr.id + 1
                }
                else if (move === 'minus') {
                curr.id === 1 ? i = arrayReview.length : i = curr.id - 1
                }
            }
            return curr
        })
        arrayReview.forEach((curr) => {
        if (i === curr.id) {
            curr.order = 0
            setActiveId(curr.id)
        }
        return curr
        })
        setArrayReview([...arrayReview.sort(orderByOrderValue)])
    }

    return (
        <div id={content.nav_footer[1].id}>
        <h2>{content.review_title}</h2>
            <div className={Styles.review}>
                    <div className={Styles.review__settings}>
                        <div className={Styles.settings__result}>
                            <span>{`${activeId}/`}</span>
                            <span>{arrayReview.length}</span>
                        </div>
                        <div className={Styles.settings__buttons}>
                            <ButtonArrow onClick={() => toFlip('minus')} back={false} />
                            <ButtonArrow onClick={() => toFlip('plus')} back />
                        </div>
                    </div>
                    <div className={Styles.review__container}>
                         {arrayReview.map((item, i) => (
                        <div key={i} className={Styles.review__card}>
                            {item.order === 0 && <div className={Styles.review__text}>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </div>}
                            <div className={Styles.review__card}>
                              <CardReview item={item} />
                            </div>
                        </div>
                    ))}
                    </div> 
            </div> 
        </div>
       
    )
}
export default Review
