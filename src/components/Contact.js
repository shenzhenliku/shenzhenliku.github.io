import React, { useState } from 'react'
import axios from 'axios'
const Contact = props => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = async () => {
    const data = {
      emailTo: 'michael@baselinesoftware.io',
      subjectText: `${message}`,
      bodyText: `${name} - ${email}`,
    }

    const headers = {
      'x-api-key': 'HJOGiZbjaX82G1zIDPAca9HqBgcSFMlu7gXh8GAg',
      'Content-Type': 'application/json',
    }

    const url =
      'https://4ekmf2ijy5.execute-api.us-west-2.amazonaws.com/default/email_sender'

    const res = await axios.post(url, data, {
      headers: headers,
    })
    if (res.status === 200) {
      alert('Message succesfully sent')
    } else {
      alert('Something went wrong please try again later.')
    }
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <section id="contact">
      <div className="inner">
        <section>
          {/* <form> */}
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows="6"
            ></textarea>
          </div>
          <ul className="actions">
            <li onClick={async () => await sendEmail()}>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li
              onClick={() => {
                setName('')
                setEmail('')
                setMessage('')
              }}
            >
              <input type="reset" value="Clear" on />
            </li>
          </ul>
          {/* </form> */}
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="#">michael@baselinesoftware.io</a>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>Phone</h3>
              <span>+1 909 996 7632</span>
              <br />
              <span>+86 185 6626 7159</span>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>Address</h3>
              <span>
                Somewhere in China/USA
                {/* <br />
              Nashville, TN 00000
              <br />
              United States of America */}
              </span>
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}

export default Contact
