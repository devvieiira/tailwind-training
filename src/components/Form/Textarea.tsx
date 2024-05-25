import type { ComponentProps } from "react";

type TextareaProps = ComponentProps<"textarea">;
const Textarea = (props: TextareaProps) => {
	return (
		<textarea
			className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100 dark:bg-zinc-800 dark:border-zinc-700 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:placeholder-zinc-400 dark:text-zinc-100"
			{...props}
		/>
	);
};

export default Textarea;
