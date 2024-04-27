import { SocialButton } from "./SocialButton";
import { Formulario } from "./Formulario";
import PropTypes from 'prop-types';
import Alerta from "./Alert";
import Card from 'react-bootstrap/Card';

export const Registro = ({onChange,handleErrors,formErrors}) => {
  return (
    <div>
      <Card className="card">
        <h1>Crea tu cuenta</h1>   
        <SocialButton icon1="fa-brands fa-facebook-f" icon2="fa fa-linkedin" icon3="fa fa-github"/>
        <p className="sub">Usa tu email para registrarte</p>
        <Formulario onChange={onChange}
            handleErrors={handleErrors} />
      </Card>
      <Alerta formErrors={formErrors} color={formErrors === 'Registro exitoso' ? 'success' : 'danger'}/>
     
    </div>
  )
};

Registro.propTypes = {
	onChange: PropTypes.func,
	handleErrors: PropTypes.func,
	formErrors: PropTypes.string,
};

