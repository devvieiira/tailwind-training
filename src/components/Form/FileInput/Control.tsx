"use client";
import type { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";

type ControlProps = ComponentProps<"input">;
export const Control = ({ multiple = false, ...props }: ControlProps) => {
	const { id, onFilesSelected } = useFileInput();

	const handleFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files?.length) {
			return;
		}

		const files = Array.from(e.target.files);

		onFilesSelected(files, multiple);
	};
	return (
		<input
			type="file"
			className="sr-only"
			onChange={handleFileSelected}
			id={id}
			{...props}
		/>
	);
};
