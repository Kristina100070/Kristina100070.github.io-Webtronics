import { makeAnchorScroll } from '../../../helpers/makeAnchorScroll'
import Styles from './styles.module.scss'

  interface NavElementProps { 
    item: {
        title: string,
        id: string
    }
  }
const NavElement: React.FC<NavElementProps> = ({ item }) => {
    
    return (
 <div onClick={async () => {
     makeAnchorScroll(`[id='${item.id}']`)
   }}
   className={Styles.header__link}>
    <p>{item.title}</p>
  </div>
    )
}
export default NavElement