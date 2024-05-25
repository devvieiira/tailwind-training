"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "./Form/Button";

export const ChangeButton = () => {
	const { resolvedTheme, setTheme } = useTheme();
	const handleThemes = () => {
		if (resolvedTheme === "light") {
			setTheme("dark");
		}

		if (resolvedTheme === "dark") {
			setTheme("light");
		}
	};

	const changeIcon = () => {
		if (resolvedTheme === "dark") {
			return <Moon className="h-5 w-5" />;
		}

		return <Sun className="h-5 w-5" />;
	};
	return (
		<Button
			variant="ghost"
			className="text-zinc-900 dark:text-zinc-100"
			onClick={handleThemes}
		>
			{changeIcon()}
		</Button>
	);
};
