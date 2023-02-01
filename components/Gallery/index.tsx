import Styles from './styles.module.scss'
import content from '../../content'
import Image from 'next/image'
import dev1 from 'public/images/dev1.png'
import dev2 from 'public/images/dev2.png'
import dev3 from 'public/images/dev3.png'
import dev4 from 'public/images/dev4.png'
import { SubTitle } from 'components/ui/SubTitle'

const Gallery = () => {
    
    return (
        <div className={Styles.gallery} id={content.nav_footer[3].id}>
        <SubTitle value={content.gallery_title} />
            <div className={Styles.gallery__wrapper}>
                <div>
                    <p className={Styles.gallery__text1}>{content.gallery_text1}</p>
                    <Image src={dev4} alt='img' />
                </div>
                <div className={Styles.gallery__wrapper2}>
                    <div className={Styles.gallery__wrapper}> 
                        <Image src={dev1} alt='img' />
                        <div className={Styles.gallery__wrapper2}>
                            <Image src={dev2} alt='img' />
                            <Image src={dev3} alt='img' />
                        </div>
                    </div>
               
                    <p className={Styles.gallery__text2}>{content.gallery_text2}</p>
                </div>     
            </div> 
        </div>
       
    )
}
export default Gallery
