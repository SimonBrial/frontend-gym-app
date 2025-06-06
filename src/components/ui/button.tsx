import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-transparent w-full px-0 text-primary-foreground hover:bg-primary/90 ",
        destructive:
          "bg-red-500 text-white active:bg-red-500/90 hover:bg-red-500/90 w-full",
        outline:
          "border border-white bg- sm-hover:bg-white/50 active:bg-white/50 text-white w-full",
        secondary: "text-white bg-red-700 hover:bg-slate-700/80 border-none",
        ghost: "hover:bg-transparent hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
        principal:
          "bg-principal text-slate-900 hover:bg-principal/90 w-full rounded-md py-[8px] px-[16px]",
        navItem:
          "hover:bg-slate-700 rounded-lg w-full flex items-center justify-start",
        activeNavItem:
          "rounded-none rounded-r-lg w-full flex items-center justify-start border-l-2 border-l-principal bg-slate-800",
        addUser:
          "text-principal flex gap-1 hover:bg-principal/10 transition-all hover:cursor-pointer",
        userAction:
          "text-white bg-slate-800 text-lg sm-hover:text-principal active:text-principal transition-all",
        registerNav: "rounded-full border border-red-500 w-full text",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
