import Styles from './styles.module.scss'

interface InputProps { 
  error: any
  placeholder: string
  register: any
  required:boolean
  name: string
}

export const Input: React.FC<InputProps> = ({ register, required, name, placeholder, error }) => {

  
  return (
    <div className={Styles.input__wrapper}>
    <div className={`${Styles.input} ${error && Styles.input_error}`}>
      <div className={Styles.input_bg}>
        <div className={`${Styles.input_blur} ${error && Styles.input_blur_error}`}>
          <input {...register(name)} placeholder={placeholder} required />
        </div>
      </div>
    </div>
    <p>{error}</p>
    </div>
  )
}