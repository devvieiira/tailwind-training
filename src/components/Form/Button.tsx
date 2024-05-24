import type { ComponentProps } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const button = tv({
	base: [
		"rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm",
		"focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2",
		"active:opacity-80",
	],

	variants: {
		variant: {
			primary: "bg-violet-600 text-white hover:bg-violet-700",
			outline: "border border-zinc-300 text-zinc-900 hover:bg-zinc-100",
			ghost: "rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

const Button = ({ variant, className, ...props }: ButtonProps) => {
	return <button {...props} className={button({ variant, className })} />;
};

export default Button;
