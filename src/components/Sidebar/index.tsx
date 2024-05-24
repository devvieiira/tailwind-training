import {
	BarChart,
	CheckSquare,
	Cog,
	Flag,
	Home,
	LifeBuoy,
	Search,
	SquareStack,
	Users,
} from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Profile from "./Profile";
import UsedSpaceWidget from "./UsedSpaceWidget";

const Sidebar = () => {
	return (
		<aside className="border-r flex flex-col gap-6 border-zinc-200 px-5 py-8">
			<Logo />
			<InputRoot>
				<InputPrefix>
					<Search className="h-5 w-5 text-zinc-500" />
				</InputPrefix>
				<InputControl placeholder="Search" />
			</InputRoot>

			<nav className="space-y-0.5">
				<NavItem title="Home" icon={Home} />
				<NavItem title="Dashboard" icon={BarChart} />
				<NavItem title="Projects" icon={SquareStack} />
				<NavItem title="Tasks" icon={CheckSquare} />
				<NavItem title="Reporting" icon={Flag} />
				<NavItem title="Users" icon={Users} />
			</nav>

			<div className="mt-auto flex flex-col gap-6">
				<nav className="space-y-0.5">
					<NavItem title="Support" icon={LifeBuoy} />
					<NavItem title="Settings" icon={Cog} />
				</nav>
				<UsedSpaceWidget />
				<div className="h-px bg-zinc-200" />

				<Profile />
			</div>
		</aside>
	);
};

export default Sidebar;
