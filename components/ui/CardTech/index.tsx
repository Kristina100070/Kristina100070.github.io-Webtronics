import style from './styles.module.scss'
import Image from 'next/image'
interface CardTechProps {
    item: {
        name: string,
        image: any,
    }
  }
const CardTech: React.FC<CardTechProps> = ({item}) => {
    
    return (
<div className={style.card__border}>
    <div className={style.card__bg}>
        <div className={style.card__blur}>
            <Image src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
        </div>
    </div>
</div>
    )
}
export default CardTech