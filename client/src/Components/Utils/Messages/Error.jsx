import React from "react";
import PropTypes from "prop-types";

function Error({ message }) {
  return message && <p className="text-danger m-1">{message}</p>;
}

Error.defualtProps = {
  errors: false,
};

Error.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
};

export default Error;
