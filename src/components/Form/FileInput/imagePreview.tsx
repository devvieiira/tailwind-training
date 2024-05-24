"use client";

import { User } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";
import { useFileInput } from "./Root";

export const ImagePreview = () => {
	const { files } = useFileInput();

	const previewURL = useMemo(() => {
		if (files.length === 0) {
			return null;
		}

		return URL.createObjectURL(files[0]);
	}, [files]);

	if (previewURL === null) {
		return (
			<div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full">
				<User className="w-8 h-8 text-violet-500" />
			</div>
		);
	}

	return (
		<div className="h-16 w-16 rounded-full relative">
			<Image
				src={previewURL}
				alt=""
				className="object-cover rounded-full"
				fill
			/>
		</div>
	);
};
