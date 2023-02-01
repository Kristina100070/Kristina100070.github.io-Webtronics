import Styles from './styles.module.scss'
import Logo from '../ui/Logo'
import NavElement from '../ui/NavElement'
import content from '../../content'
import Image from 'next/image'
import inIcon from 'public/icons/in.svg'
import twIcon from 'public/icons/tw.svg'
import glIcon from 'public/icons/gl.svg'
import fbIcon from 'public/icons/fb.svg'
import Link from 'next/link'

const Footer = () => {
    
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer__wrapper}>
                <div className={Styles.footer__blur}>
                    <div className={Styles.footer__content}>
                    <div>
                         <Logo />
                         <p className={Styles.footer__adress}>{content.adress}</p>
                    </div>
                    <div className={Styles.footer__nav}>
                        <h5>Company</h5>
                        <nav>
                            {content.nav_footer.map((item) => (
                                <NavElement item={item} />
                            ))}
                        </nav>
                    </div>
                    <div>
                        <h5>Social media</h5>
                        <div>
                            <Link href='https://www.facebook.com/' target='_blank'>
                                <Image src={fbIcon} alt={'fb'} />
                            </Link>
                            <Link href='https://gitlab.com/' target='_blank'>
                                <Image src={glIcon} alt={'gitlab'} />
                            </Link>
                            <Link href='https://twitter.com/' target='_blank'>
                                <Image src={twIcon} alt={'tw'} />
                            </Link>
                            <Link href='https://www.linkedin.com/' target='_blank'>
                                <Image src={inIcon} alt={'in'} />
                            </Link>
                        </div>
                    </div>
                    </div>
                   
                
                </div>
                
            </div>
           
        </footer>
    )
}
export default Footer