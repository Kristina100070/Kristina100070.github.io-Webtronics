import Styles from './styles.module.scss'
import content from '../../content'
import Image from 'next/image'
import { useState } from 'react'
import question from 'public/icons/question.svg'
import CardQuestion from 'components/ui/CardQuestion'

const Questions = () => {
    const [array, setArray] = useState(content.questions)
    const handleModal = (id: number) => {
      
      
        setArray(
          array.map((bt) => {
            console.log(id === bt.id);
            if (id === bt.id) {
              return { ...bt, open: !bt.open }
            }
            return { ...bt, open: false }
          }),
        )
      }
    return (
      <div className={Styles.question} id={content.nav[3].id}>
       <h2>{content.questions_title}</h2>
      <div className={Styles.question__container}>
        <div className={Styles.question__image}>
          <p>{content.questions_subtitle}</p>
          {/*change image or make CANVAS */}
        <Image src={question} alt='question' />
        </div>
       
       
        <div className={Styles.question__list}>
          {array.map((item) => (
            <CardQuestion item={item} key={item.id} onClick={handleModal}/>
          ))}
        </div>
      </div>
        
      
      </div>  
    )
}
export default Questions
