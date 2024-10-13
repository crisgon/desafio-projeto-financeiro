import type { Meta, StoryObj } from "@storybook/react";

import MenuComponent from ".";
import { useEffect, useRef, useState } from "react";

const meta = {
  title: "Components/Menu",
  component: MenuComponent,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "full",
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof MenuComponent>;

export const Menu: Story = {
  args: {
    children: (
      <>
        <MenuComponent.MenuItem
          handleClick={() => console.log("clicou no item")}
          active
        >
          Início
        </MenuComponent.MenuItem>
        <MenuComponent.MenuItem
          handleClick={() => console.log("clicou no item")}
        >
          Transferências
        </MenuComponent.MenuItem>
        <MenuComponent.MenuItem
          handleClick={() => console.log("clicou no item")}
          disabled
        >
          Investimentos
        </MenuComponent.MenuItem>
        <MenuComponent.MenuItem
          handleClick={() => console.log("clicou no item")}
        >
          Outros serviços
        </MenuComponent.MenuItem>
      </>
    ),
  },
};