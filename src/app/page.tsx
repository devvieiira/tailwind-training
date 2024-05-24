import { InputControl, InputPrefix, InputRoot } from "@/components/Input";
import SettingsTabs from "@/components/SettingsTabs";
import { Mail } from "lucide-react";

import * as FileInput from "@/components/Form/FileInput";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";

export default function Home() {
	return (
		<>
			<h1 className="text-3xl font-bold text-zinc-900">Settings</h1>

			<SettingsTabs />

			<div className="mt-6 flex flex-col">
				<div className="flex justify-between items-center border-b border-zinc-200 pb-5">
					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
						<span className="text-sm text-zinc-500">
							Update your photo and personal details here.
						</span>
					</div>
					<div className="flex items-center gap-2">
						<button
							type="button"
							className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							type="submit"
							form="settings"
							className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
						>
							Save
						</button>
					</div>
				</div>
				<form
					action=""
					id="settings"
					className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
				>
					<div className="grid grid-cols-form gap-3">
						<label
							htmlFor="firstName"
							className="text-sm font-medium text-zinc-700"
						>
							Name
						</label>
						<div className="grid gap-6 grid-cols-2">
							<InputRoot>
								<InputControl id="firstName" defaultValue="Kauã" />
							</InputRoot>

							<InputRoot>
								<InputControl defaultValue="Vieira" />
							</InputRoot>
						</div>
					</div>
					<div className="grid grid-cols-form gap-3 pt-5">
						<label
							htmlFor="email"
							className="text-sm font-medium text-zinc-700"
						>
							Email address
						</label>
						<InputRoot>
							<InputPrefix>
								<Mail className="h-5 w-5 text-zinc-500" />
							</InputPrefix>
							<InputControl
								id="email"
								type="email"
								defaultValue="kaua.vieira.empresa@gmail.com"
							/>
						</InputRoot>
					</div>
					<div className="grid grid-cols-form gap-3 pt-5">
						<label
							htmlFor="photo"
							className="text-sm font-medium text-zinc-700"
						>
							Your photo
							<span className="text-sm mt-0.5 font-normal text-zinc-500 block">
								This will be displayed on your profile.
							</span>
						</label>

						<FileInput.Root className="flex items-start gap-5">
							<FileInput.ImagePreview />
							<FileInput.Trigger />
							<FileInput.Control />
						</FileInput.Root>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label htmlFor="role" className="text-sm font-medium text-zinc-700">
							Role
						</label>
						<InputRoot>
							<InputControl id="role" type="text" defaultValue="CTO" />
						</InputRoot>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label
							htmlFor="country"
							className="text-sm font-medium text-zinc-700"
						>
							Country
						</label>
						<Select placeholder="Select a country...">
							<SelectItem value="BR" text="Brazil" />
						</Select>
						<div />
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label
							htmlFor="timezone"
							className="text-sm font-medium text-zinc-700"
						>
							Timezone
						</label>
						<Select placeholder="Select a timezone...">
							<SelectItem
								value="utc8"
								text="Pacific Standard Time (UTC-08:00)"
							/>
							<SelectItem
								value="utc3"
								text="America São Paulo Time (UTC-03:00)"
							/>
						</Select>
						<div />
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label htmlFor="bio" className="text-sm font-medium text-zinc-700">
							Bio
							<span className="text-sm mt-0.5 font-normal text-zinc-500 block">
								Write a short introduction.
							</span>
						</label>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label
							htmlFor="projects"
							className="text-sm font-medium text-zinc-700"
						>
							Portfolio projects
							<span className="text-sm mt-0.5 font-normal text-zinc-500 block">
								Share a few snippets of your work.
							</span>
						</label>
						<FileInput.Root>
							<FileInput.Trigger />
							<FileInput.FileList />
							<FileInput.Control multiple />
						</FileInput.Root>
					</div>

					<div className="flex items-center justify-end gap-2 pt-5">
						<button
							type="button"
							className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
