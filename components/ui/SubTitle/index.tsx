import Styles from './styles.module.scss'

interface SubTitleProps { 
  value: string  
}
export const SubTitle: React.FC<SubTitleProps> = ({value}) => {
  return (
    <h2 className={Styles.subtitle}>{value}</h2>
  )
}