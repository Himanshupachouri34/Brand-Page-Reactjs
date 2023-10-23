import Button from '../Button/Button'
import Styles from './ContactForm.module.css'
import { MdMessage } from 'react-icons/md'
import { BiPhone } from 'react-icons/bi'
import { AiFillMail } from 'react-icons/ai'
import { useState } from 'react'


function ContactForm() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [text , setText] = useState('')

  

  const onViaCallSubmit = () => {
    setTimeout (() => {
      alert ("Our Customer Care No. is 180101010")
    },1000)
    
  }

  const onSubmit = (event) => {
    event.preventDefault()
    alert(`Hello! ${name} Your Response is Submitted!` )
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
  }

  return (
    <section className={Styles.container}>
      <div className={Styles.contact_form}>

        <div className={Styles.topBtn}>
          <Button
          
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
          
          onClick = {onViaCallSubmit}
            text="VIA CALL"
            icon={<BiPhone fontSize="24px" />}
          />
        </div>
        <Button
            isOutline = {true}
            text="VIA Email "
            icon={<AiFillMail fontSize="24px" />}
          />

          <form onSubmit = {onSubmit}>
            <div className= {Styles.form_control} >
            <label htmlFor="name">Name</label>
            <input type="text" />
            </div>

            <div className= {Styles.form_control} >
            <label htmlFor="email">E-Mail</label>
            <input type="email" />
            </div>

            <div className= {Styles.form_control} >
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
            </div>

            <div style={{display: "flex", justifyContent: "end"}}>
              <Button text="Submit"/>
            </div>
            
          </form>
      </div>
      <div className={Styles.contact_img}>
        <img src="/public/service.svg"   />
      </div>
    </section>
  )
}

export default ContactForm