import Styles from './styles.module.scss'

interface ButtonArrowProps { 
  onClick: () => void  
  back: boolean
}
export const ButtonArrow: React.FC<ButtonArrowProps> = ({onClick, back}) => {
  return (
    <button className={Styles.button} onClick={onClick}>
      <div className={Styles.button_bg}>
        <div className={`${Styles.button_blur} ${back && Styles.button_revert}`} />
      </div>
  </button>
  )
}