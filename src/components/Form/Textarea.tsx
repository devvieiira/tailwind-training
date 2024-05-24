import type { ComponentProps } from "react";

type TextareaProps = ComponentProps<"textarea">;
const Textarea = (props: TextareaProps) => {
	return (
		<textarea
			className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
			{...props}
		/>
	);
};

export default Textarea;
