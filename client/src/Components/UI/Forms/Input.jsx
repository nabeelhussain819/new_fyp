import React from "react";
import Error from "../../Utils/Messages/Error";

function Input({title, type, name, placeholder, hook, errors, hasIcon, icon,...rest}) {
  return (
    <div className="input-box">
      <label className="label-text">{title}</label>
      <div className="form-group">
        {icon && <span className={icon}></span>}
        <input
          {...rest}
          className="form-control"
          type={type}
          name={name}
          placeholder={placeholder}
          {...hook}
        />
        <Error message={errors} />
      </div>
    </div>
  );
}

export default Input;
