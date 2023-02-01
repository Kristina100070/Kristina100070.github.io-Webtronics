import Styles from './styles.module.scss'
import content from '../../content'
import lineDotted from 'public/icons/line-dotted.svg'
import line from 'public/icons/line.svg'
import front from 'public/icons/front.svg'
import Image from 'next/image'
import CardMentor from 'components/ui/CardMentor'

const About = () => {
    
    return (
      <div id={content.nav[0].id}>
        <h2>{content.about_title}</h2>
        <div className={Styles.about}>
          <div className={Styles.about__container}>
            <h3>{content.about_subtitle}</h3>
            <div className={Styles.about__line}>
              <Image src={lineDotted} alt='-' />
              <Image src={line} alt='-' />
              <Image src={lineDotted} alt='-' />
            </div>
            <div className={Styles.about__mentors}>
              {content.about_mentors.map((item) => (
             <CardMentor item={item} />
            ))}
            </div>
           </div >
          <div>
            <p>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
            <Image src={front} alt='front' className={Styles.about__frontend} />
          </div>
        </div>
      </div>  
    )
}
export default About