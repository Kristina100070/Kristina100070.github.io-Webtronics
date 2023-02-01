import Styles from './styles.module.scss'
import content from 'content'
import { Button } from 'components/ui/Button'


const StartScreen = () => {
    const isForward = () => {
        console.log('go')
    }
    return (
        <div className={Styles.startScreen}>
            <div className={Styles.startScreen__wrapper}>
                <h1>{content.title_start_1}</h1>
                <p className={Styles.startScreen__subtitle}>{content.subtitle_start}</p>
            </div>
            <div className={Styles.startScreen__wrapper}>
                <Button value={content.button_start} onClick={isForward} width='288px' />
                <h1 className={Styles.startScreen__title}>{content.title_start_2}</h1>
            </div>
            <div className={Styles.startScreen__mark}><h3>{content.title_start_3}</h3></div>

        </div>
    )
}
export default StartScreen