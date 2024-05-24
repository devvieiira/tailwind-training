"use client";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

interface SelectProps extends SelectPrimitive.SelectProps {
	children: React.ReactNode;
	placeholder?: string;
}

export const Select = ({ children, placeholder, ...props }: SelectProps) => {
	return (
		<SelectPrimitive.Root {...props}>
			<SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
				<SelectPrimitive.Value
					placeholder={placeholder}
					className="text-black"
				/>
				<SelectPrimitive.Icon>
					<ChevronDown className="h-5 w-5 text-zinc-500" />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>

			<SelectPrimitive.Portal>
				<SelectPrimitive.Content
					side="bottom"
					position="popper"
					sideOffset={8}
					className="z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] shadow-md overflow-hidden"
				>
					<SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	);
};
