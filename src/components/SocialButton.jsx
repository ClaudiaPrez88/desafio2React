
import Button from 'react-bootstrap/Button';

import React from 'react'

export const SocialButton = ({icon1,icon2,icon3}) => {
  return (
    <div className='botones-social'>
        <Button variant="outline-dark"><i className={icon1}></i></Button>
        <Button variant="outline-dark"><i className={icon2}></i></Button>
        <Button variant="outline-dark"><i className={icon3}></i></Button>
    </div>
  )
}
