import Styles from './styles.module.scss'
import content from '../../content'
import Image from 'next/image'
import CardStep from 'components/ui/CardStep'
import arrow from 'public/icons/arrow.svg'

const Steps = () => {
    
    return (
        <div id={content.nav[2].id}>
        <h2>{content.steps_title}</h2>
        
        <div className={Styles.steps}>

            <div className={Styles.vertical}>
               
                
                {Array(6).fill(0).map( (item, index) => (<>
                    <div className={Styles.vertical__dot} key={index}>
                   <Image src={arrow} alt='arrow' />
                </div>
                </>))}
            </div>
            <div className={Styles.steps__container}>
                {content.steps.map((item) => (
                    <CardStep item={item} />
                ))}
            </div>
        </div>
        </div>  
    )
}
export default Steps