import { Search } from "lucide-react";
import type { ComponentProps } from "react";

export interface InputProps {
	className: string;
}

interface InputPrefixProps extends ComponentProps<"div"> {}

export const InputPrefix = (props: InputPrefixProps) => {
	return <div {...props} />;
};

interface InputControlProps extends ComponentProps<"input"> {}

export const InputControl = (props: InputControlProps) => {
	return (
		<input
			className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
			{...props}
		/>
	);
};

export interface InputRootProps extends ComponentProps<"div"> {}

export const InputRoot = (props: InputRootProps) => {
	return (
		<div
			className="flex w-full mx-1 items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
			{...props}
		/>
	);
};
