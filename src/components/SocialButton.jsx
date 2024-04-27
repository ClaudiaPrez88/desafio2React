
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import Button from 'react-bootstrap/Button';

import React from 'react'

export const SocialButton = () => {
  return (
    <div className='boton-social'>
        <Button variant="outline-dark"><FontAwesomeIcon icon={faFacebook} /></Button>
        <Button variant="outline-dark"><FontAwesomeIcon icon={faGithub} /></Button>
        <Button variant="outline-dark"><FontAwesomeIcon icon={faLinkedin} /></Button>
    </div>
  )
}
