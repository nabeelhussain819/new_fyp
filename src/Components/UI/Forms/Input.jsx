import React from "react";
import Error from "../../Utils/Messages/Error";

function Input({title, type, name, placeholder, hook, errors, hasIcon, icon,...rest}) {
  return (
    <div className="input-box">
        <div class="form-floating">
                                              
    <input  {...rest}
            class="fancybox-share__input"
            type={type}
            name={name}
            placeholder={placeholder}
            {...hook}/>
                                                
                                               
                                            </div>
         
      
    </div>
  );
}

export default Input;
