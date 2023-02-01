import About from 'components/About'
import Footer from 'components/Footer'
import Form from 'components/Form'
import Gallery from 'components/Gallery'
import Questions from 'components/Questions'
import Review from 'components/Review'
import StartScreen from 'components/StartScreen'
import Steps from 'components/Steps'
import Tech from 'components/Tech'
import { BgEffectCircle } from 'components/ui/BgEffectCircle'
import Header from '../Header'
import style from './Landing.module.scss'

const Landing = () => {

    
    return (
<div className={style.wrapper_bg}>
     <BgEffectCircle />
    <div className={style.wrapper}>
        <Header />
        <StartScreen />
        <About />
        <Tech />
        <Steps />
        <Questions />
        <Review />
        <Gallery />
        <Form />
        
    </div>
    <Footer />
</div>
    )
}
export default Landing