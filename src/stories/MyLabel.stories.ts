// src/components/ui/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '../components/ui/label';
import '../index.css';
const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    children:{
        control:"text",
        description:"text content of label"
    },
    htmlFor:{
        control:"text",
        description:"id of the label"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const userName: Story = {
  args: {
    children:"User Name",
    htmlFor:"userName"
  },
};
export const EmailAddress: Story = {
  args: {
    children:"Email Address",
    htmlFor:"email"
  },
};
export const Password: Story = {
  args: {
    children:"Password",
    htmlFor:"password"
  },
};
export const FirstName: Story = {
  args: {
    children:"First Name",
    htmlFor:"firstname"
  },
};
export const LastName: Story = {
  args: {
    children:"Last Name",
    htmlFor:"lastname"
  },
};
export const PhoneNumber: Story = {
  args: {
    children:"Phone Number",
    htmlFor:"phonenumber"
  },
};




