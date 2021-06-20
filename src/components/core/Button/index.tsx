import React, { FC } from "react";

import { ButtonProps } from "./types";
import { ButtonStyled } from "./styled";

const Button: FC<ButtonProps> = ({ type, children }) => {
  return (
    <ButtonStyled>
      cc {type} + {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  type: "primary",
};

export default Button;
