import Styles from './styles.module.scss'
import Image from 'next/image'

interface CardMentorProps {
    item: {
        name: string,
        staff: string,
        avatar: any,
    }
  }
const CardMentor: React.FC<CardMentorProps>  = ({item}) => {
    
    return (
        <div className={Styles.mentor}>
            <div className={Styles.mentor_bg}>
                <Image src={item.avatar} alt='-' />
            </div>
            <h4>{item.name}</h4>
            <p>{item.staff}</p>
        </div>
    )
}
export default CardMentor