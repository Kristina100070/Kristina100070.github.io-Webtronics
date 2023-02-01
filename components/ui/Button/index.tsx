import Styles from './styles.module.scss'

interface ButtonProps {
  value: string
  onClick?: () => void
  width: string
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
  disabled: boolean
}
export const Button: React.FC<ButtonProps> = ({value, onClick, width, type, disabled }) => {
  return <button 
    type={type} 
    className={Styles.button} 
    onClick={onClick} 
    style={{width}}
    disabled={disabled}>
      {value}
    </button>
}