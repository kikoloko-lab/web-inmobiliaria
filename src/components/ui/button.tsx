import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-forest text-cream hover:bg-forest-dark shadow-lg hover:shadow-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-forest bg-transparent text-forest hover:bg-forest hover:text-cream",
        secondary:
          "bg-gold text-forest-dark hover:bg-gold-dark shadow-lg hover:shadow-xl font-semibold",
        ghost: "text-forest hover:bg-forest/10",
        link: "text-forest underline-offset-4 hover:underline",
        gold: "bg-gradient-to-r from-gold to-gold-light text-forest-dark hover:from-gold-dark hover:to-gold shadow-lg hover:shadow-xl font-semibold",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-md",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
