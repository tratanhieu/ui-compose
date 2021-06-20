import React from "react";
import { Button } from "../../../../src";

export default {
  title: "Button",
  component: Button,
};

export const Default = (): React.ReactNode => {
  return <Button type="primary">Ok</Button>;
};

export const Primary = (): React.ReactNode => {
  return <Button type="primary">Primary</Button>;
};

export const Test = (): React.ReactNode => {
  return "Ok";
};
