// src/components/ui/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../components/ui/input';
import '../index.css';
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type:{ control:"text"},
    placeholder:{control:"text"},
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder:"Email or phone number",
    type:"text",
  },
};

export const Password: Story = {
  args: {
   placeholder:"Password",
   type:"password"
  },
};
export const Email: Story = {
  args: {
   placeholder:"Email",
   type:"email"
  },
};

export const Disabled: Story = {
  args: {
    placeholder:"Disabled input",
    type:"text",
    disabled:true,
  },
};


