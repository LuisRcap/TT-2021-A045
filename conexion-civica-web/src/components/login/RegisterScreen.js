import React from 'react';
import { Link } from 'react-router-dom';
/* import validator from 'validator'; */
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const [ values, handleInputChange ] = useForm({
        name: 'Daniel',
        email: 'dany@gmail.com',
        password: '123456',
        password2: '123456'
      });
      
    const { name, email, password, password2 } = values;

    const msgError = false

    const handleRegister = (e) => {
        e.preventDefault();
        
      }

    return (
        <>
          <h3 className='auth__title'>Registrarse</h3>
    
          <form onSubmit={ handleRegister }>
    
            {
              msgError &&
              (
                <div className='auth__alert-error'>
                  { msgError }
                </div>
              )
            }
            <input
              type='text'
              placeholder='Nombre'
              name="name"
              className='auth__input'
              autoComplete='off'
              value={ name }
              onChange={ handleInputChange }
            />
    
            <input
              type='text' 
              placeholder='Email'
              name='email'
              className='auth__input'
              autoComplete='off'
              value={ email }
              onChange={ handleInputChange }
            />
    
            <input
              type='password' 
              placeholder='Contraseña'
              name='password'
              className='auth__input'
              value={ password }
              onChange={ handleInputChange }
            />
    
            <input
              type='password' 
              placeholder='Confirmar Contraseña'
              name='password2'
              className='auth__input'
              value={ password2 }
              onChange={ handleInputChange }
            />
    
            <button
              type='submit'
              className='btn btn-primary btn-block mb-5'
            >
              Registrar
            </button>
    
            <Link 
              to="/auth/login"
              className='link'
            >
              ¿Ya estás registrado?
            </Link>
    
          </form>
        </>
      )
}

export default RegisterScreen;