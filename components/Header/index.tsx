import Styles from './styles.module.scss'
import Logo from '../ui/Logo'
import NavElement from '../ui/NavElement'
import content from '../../content'



const Header = () => {
    
    return (
        <header className={Styles.header}>
            <Logo />
                <nav className={Styles.header__nav}>
                    {content.nav.map((item) => (
                        <NavElement item={item} />
                    ))}
                </nav>
        </header>
    )
}
export default Header