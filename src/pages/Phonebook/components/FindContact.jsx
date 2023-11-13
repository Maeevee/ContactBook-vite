// import React, { useState } from 'react'
import PropTypes from 'prop-types';

const FindContact = ({search, handleInputChange}) => {
  return (
    <input onChange={handleInputChange} value={search} placeholder='Enter name'/>
  )
}

FindContact.propTypes = {
  search: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default FindContact
