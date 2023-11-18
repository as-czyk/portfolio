import React, { useState } from 'react';
import { Switch, SwitchProps } from '@mui/material';
import './Switch.scss'; 


interface SwitchComp {
    initialActive?: boolean;
    onToggle?: (active: boolean) => void;
}

export const SwitchComp = (props: SwitchProps) => {
    return (
        <Switch {...props} />
    );
};
