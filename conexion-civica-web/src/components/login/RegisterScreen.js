import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );

  const [ values, handleInputChange ] = useForm({
    name: 'Daniel',
    email: 'dany@gmail.com',
    password: '123456',
    password2: '123456'
  });


    
  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();    

    if(isFormValid()) {
      dispatch( startRegisterWithEmailPasswordName( email, password, name ) );
    }
  }

  const isFormValid = () => {
    
    if( name.trim().length === 0 ){
      dispatch( setError( 'El nombre es obligatorio' ) );
      return false;
    } else if( !validator.isEmail( email ) ) {
      dispatch( setError( 'El email es inválido' ) );
      return false;
    } else if( password !== password2 || password.length < 5 ) {
      dispatch( setError( 'Las contraseñas no coinciden o son inválidas' ) );
      return false;
    }

    dispatch( removeError() );
    return true;

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