// src/components/ui/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '../components/ui/textarea';
import '../index.css';
const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder:{control:"text"},
    disabled: { control: 'boolean' },
    rows:{ control:"number"}
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder:"message",
    rows:4,
  },
};
export const Disabled: Story = {
  args: {
    placeholder:"message disabled",
    disabled:true,
  },
};

