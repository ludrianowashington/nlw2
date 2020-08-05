import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/53495653?s=460&u=b9edd9e0693429806281ec1a93823dc551b56164&v=4" alt="Ludriano Washington" />

        <div>
          <strong>Ludriano Washington</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores metodologias de matemática avançada.
            <br /><br />
            Apaixonado por explosões matemáticas e por mudar a vida das pessoas através de suas experiências.
          </p>

      <footer>
        <p>
          Preço/Hora
              <strong>R$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>

    </article>
  )
}

export default TeacherItem;