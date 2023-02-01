import Styles from './styles.module.scss'

interface CardStepProps {
    item: {
        id: number,
        number: string,
        title: string,
        text: string,
    }
  }
const CardStep: React.FC<CardStepProps>  = ({item}) => {
    return (
        <div className={`${Styles.step_bg} ${item.id === 2 && Styles.step_mr} ${item.id === 3 && Styles.step_mr2} ${item.id === 5 && Styles.step_mr2}`}>
            <div className={Styles.step}>
                <div className={Styles.step_blur}>
                    <h4>{item.number}</h4>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
                <div 
                    className={`${Styles.step_border} 
                    ${item.id % 2 === 0 && Styles.step_border_left} 
                    ${item.id % 2 !== 0 && Styles.step_border_right}`}>
                    <div className={Styles.step_border_bg}></div>
                </div>
               
            </div>
        </div>
    )
}
export default CardStep