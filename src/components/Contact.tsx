import React from 'react'
import emailjs from '@emailjs/browser';

interface FormDataProps {
  name: string;
  email: string;
  content?: string;
}

const currentDate = new Date();

export function Contact() {
  const [formData, setFormData] = React.useState<FormDataProps>({ name: '', email: '', content: ''});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEmailSent, setIsEmailSent] = React.useState(false);
  const [hasErrorInSend, setHasErrorInSent] = React.useState(false);
  const [canSend, setCanSend] = React.useState(true);

  const form = React.useRef() as any;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    e.preventDefault();

    const result = await emailjs.sendForm('service_7r94jpt', 'template_pd9rhmy', form.current, 'yYu3wEbaKRGsNXPv6');
    if (result.status !== 200) setHasErrorInSent(true);

    setIsEmailSent(true);
    setIsLoading(false);
    localStorage.setItem('lastDaySent', String(currentDate.getDate()))
  }

  function avoidSpamming() {
    const storedDay = Number(localStorage.getItem('lastDaySent'));
    if (Number(storedDay) === currentDate.getDate()) setCanSend(false);
  }

  React.useEffect(() => {
    avoidSpamming();
  }, [])

  return (
    <div className='mr-5 ml-5'>
			<div className='title-header'>
				<div className='text-[52px] mt-20 leading-[3.5rem] first-title'>
					<span>Bora construir algo</span> <br />
					<span>massa juntos?</span>
				</div>
				<span className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-3 text-[20px] second-title font-semibold'>
          Estou sempre à disposição para um café  e código. Manda
          aí um e-mail que a gente discute tudo de bom que a tecnologia
          tem para nos oferecer ;)
				</span>
			</div>

      <div className='about-body mt-[7rem] text-center'>
				<span className='about-body-title text-[40px] font-medium'>Contato</span> < br />

        <form className='md:flex md:flex-col mt-3' onSubmit={handleSubmit} ref={form}>
          <div className='flex flex-col md:flex-row md:gap-10 md:justify-center'>
            <input
              type='email'
              placeholder='E-mail'
              className='p-2 rounded-lg mb-3 md:mb-0'
              required
              name='email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
            <input
              type='text'
              name='name'
              placeholder='Nome'
              className='p-2 rounded-lg'
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
          </div>
          <textarea
            name='content'
            placeholder='Escreva alguma coisa para mim...'
            className='mt-3 p-2 rounded-lg w-full md:w-[462px] mx-auto'
            rows={4}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}/>

          <button
            className='bg-[#213d48] w-[100px] h-[35px] text-white rounded-lg mt-3 mx-auto font-semibold enabled:hover:bg-sky-700 disabled:opacity-40'
            disabled={isLoading || hasErrorInSend || isEmailSent || !canSend}>
            Enviar
          </button>
      </form>

      {hasErrorInSend ? <p className='mt-2 text-red-500'>Não foi possível enviar. Tente novamente mais tarde. </p> : null}
      {isEmailSent ? <p className='mt-2 text-lime-500'>Eu vô vê e te aviso '-' </p> : null}
      {!canSend && !isEmailSent ? <p className='mt-2 text-lime-500'>Sua mensagem já foi enviada. Falo contigo assim que possível ;) </p> : null}
      </div>
    </div>
  )
}
