import React, { useEffect, useState } from "react";
// import { profile } from "../data";

const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
				isScrolled
					? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4"
					: "bg-transparent py-6"
			}`}>
			<div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
				<a
					href="#home"
					className="text-xl font-bold text-white tracking-tight hover:text-emerald-400 transition-colors">
					HaqimiHarun<span className="text-emerald-500">.dev</span>
				</a>

				{/* Desktop Menu */}
				<ul className="hidden md:flex gap-8">
					<li>
						<a
							href="#home"
							className="text-sm font-medium text-slate-400 hover:text-white hover:underline decoration-emerald-500 decoration-2 underline-offset-4 transition-all">
							Home
						</a>
					</li>
					<li>
						<a
							href="#resume"
							className="text-sm font-medium text-slate-400 hover:text-white hover:underline decoration-emerald-500 decoration-2 underline-offset-4 transition-all">
							Resume
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className="text-sm font-medium text-slate-400 hover:text-white hover:underline decoration-emerald-500 decoration-2 underline-offset-4 transition-all">
							Projects
						</a>
					</li>
					<li>
						<a
							href="#gallery"
							className="text-sm font-medium text-slate-400 hover:text-white hover:underline decoration-emerald-500 decoration-2 underline-offset-4 transition-all">
							Gallery
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
							Contact
						</a>
					</li>
				</ul>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="md:hidden text-white focus:outline-none"
					aria-label="Toggle menu">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						{isMobileMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
					isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}>
				<ul className="px-6 pt-4 pb-6 space-y-4 bg-slate-950/95 backdrop-blur-md border-t border-slate-800">
					<li>
						<a
							href="#home"
							onClick={handleLinkClick}
							className="block text-sm font-medium text-slate-400 hover:text-white hover:translate-x-2 transition-all">
							Home
						</a>
					</li>
					<li>
						<a
							href="#resume"
							onClick={handleLinkClick}
							className="block text-sm font-medium text-slate-400 hover:text-white hover:translate-x-2 transition-all">
							Resume
						</a>
					</li>
					<li>
						<a
							href="#projects"
							onClick={handleLinkClick}
							className="block text-sm font-medium text-slate-400 hover:text-white hover:translate-x-2 transition-all">
							Projects
						</a>
					</li>
					<li>
						<a
							href="#gallery"
							onClick={handleLinkClick}
							className="block text-sm font-medium text-slate-400 hover:text-white hover:translate-x-2 transition-all">
							Gallery
						</a>
					</li>
					<li>
						<a
							href="#contact"
							onClick={handleLinkClick}
							className="block text-sm font-medium text-emerald-400 hover:text-emerald-300 hover:translate-x-2 transition-all">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
