import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import './style.scss';

interface ButtonCustomProps extends ButtonProps {
  type: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';
  classNameCustomCSS?: string;
  children: string;
  onClick: () => void;
}
const Buttons: React.FC<ButtonCustomProps> = (props: ButtonCustomProps) => {
  const { type, classNameCustomCSS, onClick, children, ...rest } = props;
  return (
    <>
      <Button
        className={`btn-custom ${classNameCustomCSS ? classNameCustomCSS : ''}`}
        type={type}
        onClick={onClick}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
};

export default Buttons;
