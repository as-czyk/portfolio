import React, { useState } from "react";
import { Switch, SwitchProps } from "@mui/material";
import "./Switch.scss";

interface SwitchComp extends SwitchProps {
  initialActive?: boolean;
  onToggle?: (active: boolean) => void;
  labelOn?: JSX.Element | string
  labelOff?: JSX.Element | string
}

export const SwitchComp = (props: SwitchComp) => {
  const { initialActive = false, onToggle, labelOn = "", labelOff = "" } = props;

  const [isChecked, setIsChecked] = useState(initialActive);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (onToggle) {
      onToggle(event.target.checked);
    }
  };

  return (
    <div className="switch">
      <Switch
        {...props}
        sx={{
          "&.MuiSwitch-root .MuiSwitch-switchBase": {
            color: "var(--secondary)",
          },
          "&.MuiSwitch-root .Mui-checked": {
            color: "var(--action)",
          },
          "&.MuiSwitch-root .MuiSwitch-track": {
            backgroundColor: "var(--textColor)",
          },
        }}
        onChange={handleChange}
      />
      <label style={{fontSize: '2rem'}}>{isChecked ? labelOn : labelOff}</label>
    </div>
  );
};
