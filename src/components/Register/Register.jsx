import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

const Register = () => {
  const { register } = useContext(RegisterContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const foundToken = JSON.parse(localStorage.getItem('token'));
      if (foundToken) {
        navigate('/profile');
      }
    }, 2000);
  }, [login]);

  return <div className="container">///////AQUI FORM</div>;
};

export default Register;
