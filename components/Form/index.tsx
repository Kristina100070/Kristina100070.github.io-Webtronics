import Styles from './styles.module.scss'
import content from '../../content'
import { useForm, Controller } from "react-hook-form"
import { Input } from 'components/ui/Input'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from 'components/ui/Button'

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Это обязательное поле'),
    phone: yup.string().min(11, 'Это поле должно содержать не менее 11 символов').max(32, 'Это поле должно содержать не более 32 символов').required(),
    email: yup.string().email('Введи почту в правильном формате "email@email.com"').required('Это обязательное поле'),
  })
  const { register, handleSubmit, control, formState: { errors, isValid }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    reset();
  }
  return (
    <div className={Styles.form} id={content.nav[4].id}>
      <div className={Styles.form_bg}>
        <div className={Styles.form_blur}>
          <h2>{content.form_title}</h2>
          <p>{content.form_subtitle}</p>
          <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
          <Input register={register} placeholder='Name' name='name' required error={errors.name?.message} />
          <Input register={register} placeholder='Phone' name='phone' required error={errors.phone?.message} />
          <Input register={register} placeholder='E-mail' name='email' required error={errors.email?.message} />
          <Button type='submit' value='Send' width='497px' disabled={!isValid} />
        </form>
        </div>
      </div>
    </div>
    )
}
export default Form
