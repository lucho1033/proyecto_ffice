// eslint-disable-next-line no-unused-vars
import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className= "main-content">
      <section>
        <h1>Iniciar Sesión</h1>
        <input type="text" id="textoMarcaAgua"  placeholder="Correo electrónico, teléfono o Skype"/>
        <div>
          <div className='preguntaCuenta'>
            <h3>¿No tiene una cuenta?</h3>
            <a href="Cree una">Cree una.</a> 
          </div>
          <div>
          <a href="acceso">¿No puede acceder a su cuenta?</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
