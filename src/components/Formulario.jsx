
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export const Formulario = ({ onChange, handleErrors }) => {
	const onSubmit = (event) => {
		event.preventDefault();
		console.log(event.target)
		const emailRegex = /^[A-Za-z0-9._%+-]+@[a-z._-]+\.[A-Za-z]{2,}$/;
		const { nombre, correo, password, passwordRepeat } = event.target;

		if (
			!nombre.value ||
			!correo.value ||
			!password.value ||
			!passwordRepeat.value
		) {
			handleErrors('Todos los campos obligatorios');
			return;
		}

		if (!emailRegex.test(correo.value)) {
			handleErrors('Correo Incorrecto');
			return;
		}

		if (password.value != passwordRepeat.value) {
			handleErrors('Las contraseñas no coinciden');
			return;
		}

		handleErrors('Registro exitoso');
	};

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group
				className="mb-3"
				controlId="nombre"
			>
				<Form.Control
					name="nombre"
					type="text"
					placeholder="Nombre"
					onChange={onChange}
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="correo"
			>
				<Form.Control
					name="correo"
					type="email"
					placeholder="Correo"
					onChange={onChange}
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="password"
			>
				<Form.Control
					name="password"
					type="password"
					placeholder="Contraseña"
					onChange={onChange}
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="password2"
			>
				<Form.Control
					name="passwordRepeat"
					type="password"
					placeholder="Verifica contraseña"
					onChange={onChange}
				/>
			</Form.Group>

			<Button
				variant="success"
				type="submit"
			>
				Registrarse
			</Button>
		</Form>
	);
};

Formulario.propTypes = {
	onChange: PropTypes.func,
	handleErrors: PropTypes.func,
};