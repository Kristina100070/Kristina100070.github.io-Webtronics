import Styles from './styles.module.scss'
import Image from 'next/image'

interface CardQuestionProps {
    item: {
        title: string,
        subtitle: string,
        id: number,
        open: boolean,
    }
    onClick: (arg0: number) => void
  }
const CardQuestion: React.FC<CardQuestionProps> = ({item, onClick}) => {
    
    return (
<div key={item.id} className={`${Styles.card__border} ${!item.open && Styles.card__border_active}`}>
    <div className={`${Styles.card__bg} ${!item.open && Styles.card__bg_active}`}>
        <div className={Styles.card__blur}>
            <button onClick={() => onClick(item.id)} className={Styles.card__button}>{item.open && <div />}</button>
            <h4>{item.title}</h4>
            {item.open && <p>{item.subtitle}</p>}
        </div>
    </div>
</div>
    )
}
export default CardQuestion