/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => (
  <header>
    <h1 className="text-center">{title}</h1>
  </header>
)
Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header
