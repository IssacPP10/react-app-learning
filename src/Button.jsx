import React from 'react';
import PropTypes from 'prop-types';

export function Button({ text, name = "Usuario" }) {
  return <button>{text} - {name}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired, // Especifica que `text` debe ser un string obligatorio
};