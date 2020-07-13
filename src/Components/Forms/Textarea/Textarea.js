import React from 'react';

const Textarea = (props) => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <textarea className={formControl} {...props} />
        </div>
    );
}

export default Textarea;