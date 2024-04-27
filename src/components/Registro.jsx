import { SocialButton } from "./SocialButton";
import { Formulario } from "./Formulario";

import React from 'react'

export const Registro = () => {
  return (
    <div>
     <h1>Crea tu cuenta</h1>   
     <SocialButton/>
     <p>Usa tu email para registrarte</p>
     <Formulario/>
    </div>
  )
}
