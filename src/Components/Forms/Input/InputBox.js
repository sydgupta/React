import React from 'react';

const InputBox = (props) => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <input className={formControl} {...props} />
        </div>
    );
}

export default InputBox;