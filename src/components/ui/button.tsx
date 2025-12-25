import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
// import type { ReactNode } from "react"



const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium animation-style disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed  gap-2',

  {
    variants: {
      variant: {
      default: "bg-primary text-background font-semibold hover:bg-primary-foreground active:scale-[0.95]",
        secondary: "bg-background text-primary font-semibold border border-primary hover:bg-border active:bg-border active:scale-[0.95]",
        outline: "bg-background font-semibold text-primary border border-primary hover:bg-accent-foreground hover:bg-border hover:text-primary active:bg-primary active:text-background active:scale-[0.95]",
        ghost: "text-primary font-semibold hover:bg-border  active:scale-[0.95]",
        link: "font-semibold underline-offset-4 hover:underline text-primary hover:bg-border active:bg-border active:scale-[0.95]",
        success: "bg-success text-background  active:scale-[0.95] font-semibold",
        danger:"bg-danger text-background active:scale-[0.95] font-semibold "



      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
