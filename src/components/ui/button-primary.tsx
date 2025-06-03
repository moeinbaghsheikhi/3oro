"use client";
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonPrimaryVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150",
      },
      size: {
        default: "h-11 px-6 py-2 text-base",
        sm: "h-10 rounded-md px-4 text-sm",
        lg: "h-12 rounded-md px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonPrimaryVariants> {
  asChild?: boolean
}

const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonPrimaryVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
ButtonPrimary.displayName = "ButtonPrimary"

export { ButtonPrimary, buttonPrimaryVariants }
