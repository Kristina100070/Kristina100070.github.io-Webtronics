import Styles from './styles.module.scss'
import Image from 'next/image'
interface CardReviewProps {
    item: {
        id: number,
        image: any,
        order: number
    }
  }
const CardReview: React.FC<CardReviewProps> = ({item}) => {
    
    return (
<div className={`${Styles.card__border} ${item.order === 0 && Styles.card__border_active}`}>
    <div className={`${Styles.card__bg} ${item.order === 0 && Styles.card__bg_active}`}>
            <Image src={item.image} alt={item.image} />
    </div>
</div>
    )
}
export default CardReview