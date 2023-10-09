import React from "react";
import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
}
const buttonVariants = cva(
  "border-2 px-10 py-2 md:py-1 md:px-5 rounded-full font-bold mt-4",
  {
    variants: { variant: { default: "text-white" } },
  }
);

const Button = ({
  className,
  variant,
  type,
  size,
  text,
  children,
  ...props
}) => {
  return (
    <button  className={cn(buttonVariants({ variant, className }))}>
     {text}
      {/* <Link to="/signup"> {text}</Link> */}
    </button>
  );
};

export default Button;

// className="border-2 px-10 py-2 md:py-1 md:px-5 rounded-full text-white font-bold mt-4"
