import { LogOut } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";

const Profile = () => {
	return (
		<div className="flex items-center gap-3">
			<div className="h-10 w-10 relative">
				<Image src={logo} className="rounded-full" alt="Profile Image" fill />
			</div>
			<div className="flex truncate flex-col">
				<span className="text-sm font-semibold text-zinc-700">Kauã Vieira</span>
				<span className="text-sm text-zinc-500 truncate">
					kaua.vieira.empresa@gmail.com
				</span>
			</div>
			<button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
				<LogOut className="h-5 w-5 text-zinc-500" />
			</button>
		</div>
	);
};

export default Profile;
