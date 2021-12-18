import { useForm } from 'react-hook-form'

import './Contact.scss'

const Contact = ({ theme }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onFormSubmit = data => {
    console.log(data)
  }

  return (
    <main className={'app_main ' + theme}>
      <h1>Contact</h1>

      <section className={'app_contact ' + theme}>
        <form
          className={'app_form ' + theme}
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <div className='app_form_group'>
            <label htmlFor='inputName'>Nom & Prénom *</label>
            <input
              type='text'
              id='inputName'
              name='inputName'
              {...register('inputName', {
                required: 'Veuillez saisir votre nom',
                minLength: {
                  value: 3,
                  message: 'Veuillez saisir un nom un peu plus long'
                }
              })}
              className={errors.inputName ? 'error' : ''}
              placeholder='ex: Dupont Karine'
            />
            {errors.inputName && (
              <p className='app_form_error'>{errors.inputName.message}</p>
            )}
          </div>

          <div className='app_form_group'>
            <label htmlFor='inputEmail'>Mail *</label>
            <input
              type='email'
              id='inputEmail'
              name='inputEmail'
              {...register('inputEmail', {
                required: 'Veuillez saisir votre adresse e-mail',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Adresse e-mail invalide'
                }
              })}
              className={errors.inputEmail ? 'error' : ''}
              placeholder='ex: dupont.karine@orange.fr'
            />
            {errors.inputEmail && (
              <p className='app_form_error'>{errors.inputEmail.message}</p>
            )}
          </div>

          <div className='app_form_group'>
            <label htmlFor='inputTelephone'>Téléphone</label>
            <input
              type='tel'
              id='inputTelephone'
              name='inputTelephone'
              {...register('inputTelephone', {
                pattern: {
                  value: /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i,
                  message: 'N° de téléphone invalide'
                }
              })}
              className={errors.inputTelephone ? 'error' : ''}
              placeholder='ex: 06 54 32 21 09'
            />
            {errors.inputTelephone && (
              <p className='app_form_error'>{errors.inputTelephone.message}</p>
            )}
          </div>

          <div className='app_form_group'>
            <label htmlFor='inputSubject'>Objet *</label>
            <input
              type='text'
              id='inputSubject'
              name='inputSubject'
              {...register('inputSubject', {
                required: 'Veuillez saisir le sujet',
                minLength: {
                  value: 3,
                  message: 'Veuillez saisir un sujet un peu plus long'
                }
              })}
              className={errors.inputSubject ? 'error' : ''}
              placeholder="ex: Demande d'informations"
            />
            {errors.inputSubject && (
              <p className='app_form_error'>{errors.inputSubject.message}</p>
            )}
          </div>

          <div className='app_form_group'>
            <label htmlFor='inputMessage'>Message *</label>
            <textarea
              id='inputMessage'
              name='inputMessage'
              {...register('inputMessage', {
                required: 'Veuillez saisir votre message',
                minLength: {
                  value: 10,
                  message: 'Veuillez saisir un message un peu plus long'
                }
              })}
              className={errors.inputMessage ? 'error' : ''}
              rows='8'
              placeholder='Bonjour,'
            ></textarea>
            {errors.inputMessage && (
              <p className='app_form_error'>{errors.inputMessage.message}</p>
            )}
          </div>

          <div className='app_form_group'>
            <label htmlFor='inputAgreement' className='checkbox'>
              <input
                type='checkbox'
                id='inputAgreement'
                name='inputAgreement'
                {...register('inputAgreement', {
                  required: 'Veuillez cocher cette case'
                })}
                className={errors.inputAgreement ? 'error' : ''}
              />
              En soumettant ce formulaire, j'accepte que les informations
              saisies soient exploitées dans le cadre de la demande et de la
              relation commerciale qui peut en découler.
            </label>
            {errors.inputAgreement && (
              <p className='app_form_error'>{errors.inputAgreement.message}</p>
            )}
          </div>

          <div className='app_form_group app_form_submit'>
            <button>Envoyer</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Contact
