import React, { useState } from "react";
import "./checkbox.scss";

const Checkbox = props => {
  const [checked, setChecked] = useState(props.checkedValue);

  return (
    <label class="checkbox">
      {props.label}
      <input
        type="checkbox"
        defaultChecked={checked}
        onClick={event => {
          let newCheckedValue = event.target.checked;
          setChecked(newCheckedValue);
          props.itemClickHandler(props.value, props.label, newCheckedValue);
        }}
      />
      <span class="checkmark"></span>
    </label>
  );
};

export default Checkbox;
