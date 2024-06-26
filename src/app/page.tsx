import { InputControl, InputPrefix, InputRoot } from "@/components/Input";
import SettingsTabs from "@/components/SettingsTabs";
import {
	Bold,
	Italic,
	Link,
	List,
	ListOrdered,
	Mail,
	Moon,
	Sun,
} from "lucide-react";

import { ChangeButton } from "@/components/ChangeButton";
import Button from "@/components/Form/Button";
import * as FileInput from "@/components/Form/FileInput";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import Textarea from "@/components/Form/Textarea";

export default function Home() {
	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
					Settings
				</h1>
				<ChangeButton />
			</div>

			<SettingsTabs />

			<div className="mt-6 flex flex-col">
				<div className="flex flex-col lg:flex-row justify-between gap-4 lg:items-center border-b border-zinc-200 dark:border-zinc-700 pb-5">
					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
							Personal info
						</h2>
						<span className="text-sm text-zinc-500 dark:text-zinc-400">
							Update your photo and personal details here.
						</span>
					</div>
					<div className="flex items-center gap-2">
						<Button type="button" variant="outline">
							Cancel
						</Button>
						<Button
							type="submit"
							variant="primary"
							form="settings"
							className=""
						>
							Save
						</Button>
					</div>
				</div>
				<form
					action=""
					id="settings"
					className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
				>
					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3">
						<label
							htmlFor="firstName"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Name
						</label>
						<div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
							<InputRoot>
								<InputControl id="firstName" defaultValue="Kauã" />
							</InputRoot>

							<div className="flex flex-col gap-3 lg:block">
								<label
									htmlFor="lastName"
									className="text-sm font-medium text-zinc-700 lg:sr-only"
								>
									Last name
								</label>

								<InputRoot>
									<InputControl id="lastName" defaultValue="Vieira" />
								</InputRoot>
							</div>
						</div>
					</div>
					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
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
					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
						<label
							htmlFor="photo"
							className="text-sm font-medium text-zinc-700"
						>
							Your photo
							<span className="text-sm mt-0.5 font-normal text-zinc-500 block">
								This will be displayed on your profile.
							</span>
						</label>

						<FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
							<FileInput.ImagePreview />
							<FileInput.Trigger />
							<FileInput.Control />
						</FileInput.Root>
					</div>

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
						<label htmlFor="role" className="text-sm font-medium text-zinc-700">
							Role
						</label>
						<InputRoot>
							<InputControl id="role" type="text" defaultValue="CTO" />
						</InputRoot>
					</div>

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
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

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
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

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
						<label htmlFor="bio" className="text-sm font-medium text-zinc-700">
							Bio
							<span className="text-sm mt-0.5 font-normal text-zinc-500 block">
								Write a short introduction.
							</span>
						</label>
						<div className="space-y-3">
							<div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
								<Select placeholder="" defaultValue="normal">
									<SelectItem value="normal" text="Normal Text" />
									<SelectItem value="mrkdwn" text="Markdown Text" />
								</Select>

								<div className="flex items-center gap-1">
									<Button type="button" variant="ghost">
										<Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<ListOrdered
											className="h-4 w-4 text-zinc-500"
											strokeWidth={3}
										/>
									</Button>
								</div>
							</div>
							<Textarea
								id="bio"
								defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
							/>
						</div>
					</div>

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
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
						<Button type="button" variant="outline">
							Cancel
						</Button>
						<Button
							type="submit"
							variant="primary"
							form="settings"
							className=""
						>
							Save
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
