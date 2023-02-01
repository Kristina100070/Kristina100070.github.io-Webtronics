import Styles from './styles.module.scss'
import content from '../../content'

import CardTech from 'components/ui/CardTech'


const Tech = () => {
    
    return (
      <div className={Styles.tech} id={content.nav[1].id}>
        <h2>{content.tech_title}</h2>
        <p>{content.tech_subtitle}</p>
        <div className={Styles.tech__container}>
            
      {content.tech_cards.map((item) => (
         <CardTech item={item} />
      ))}
        </div>
      </div>  
    )
}
export default Tech