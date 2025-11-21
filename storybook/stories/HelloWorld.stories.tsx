import type { Meta, StoryObj } from "@storybook/react";
import { Cascader } from "@lume-ui/cascader";

const meta = {
  title: "Example/HelloWorld",
  component: Cascader,
} as Meta<typeof Cascader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
