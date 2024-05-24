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
import Logo from "./Logo";
import NavItem from "./NavItem";
import UsedSpaceWidget from "./UsedSpaceWidget";

const Sidebar = () => {
	return (
		<aside className="border-r flex flex-col gap-6 border-zinc-200 px-5 py-8">
			<Logo />

			<div className="flex w-full mx-1 items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
				<Search className="h-5 w-5 text-zinc-500" />
				<input
					className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
					placeholder="Search"
					type="text"
				/>
			</div>
			<nav className="space-y-0.5">
				<NavItem title="Home" icon={Home} />
				<NavItem title="Dashboard" icon={BarChart} />
				<NavItem title="Projects" icon={SquareStack} />
				<NavItem title="Tasks" icon={CheckSquare} />
				<NavItem title="Reporting" icon={Flag} />
				<NavItem title="Users" icon={Users} />
			</nav>

			<UsedSpaceWidget />
		</aside>
	);
};

export default Sidebar;
