import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Modal } from ".";
import { Button } from "../button";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof Modal>;

const Template = (args: any) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        label="Abrir modal"
      />
      <Modal {...args} open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export const WithActions: Story = {
  args: {
    title: "Confirmar ou cancelar?",
    open: true,
    content: (
      <div id="dialog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        architecto tempore, numquam expedita commodi, voluptatum cum reiciendis
        consectetur sapiente aliquam eius soluta et, ipsum quae beatae itaque
        delectus vitae! Eligendi.
      </div>
    ),
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    handleClose: fn(),
    handleConfirm: fn(),
  },
  render: Template,
};

export const WithoutActions: Story = {
  args: {
    title: "Sem ações",
    open: true,
    content: (
      <div id="dialog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        architecto tempore, numquam expedita commodi, voluptatum cum reiciendis
        consectetur sapiente aliquam eius soluta et, ipsum quae beatae itaque
        delectus vitae! Eligendi.
      </div>
    ),
    handleClose: fn(),
    handleConfirm: fn(),
  },
  render: Template,
};
