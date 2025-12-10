import React from "react";
import { profile } from "../data";
import {
	GithubIcon,
	LinkedinIcon,
	MailIcon,
	ChevronDown,
	DownloadIcon,
} from "./Icons";

const Hero: React.FC = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex flex-col justify-center items-center relative pt-20 overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[100px]" />
				<div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[100px]" />
			</div>

			<div className="z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
				{/* Profile Image / Avatar */}
				<div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-800/80 shadow-2xl animate-fade-in-up mb-4 overflow-hidden group">
					{/* Using UI Avatars as a placeholder. Replace src with your actual photo path (e.g., /me.jpg) */}
					<img
						src={`public/image/IMG_6326.JPG`}
						alt={profile.name}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
					<div className="absolute inset-0 rounded-full shadow-inner shadow-black/20"></div>
				</div>

				<div className="inline-block animate-fade-in-up delay-100">
					<span className="bg-slate-900/80 text-emerald-400 border border-emerald-500/30 px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-lg shadow-emerald-900/20 backdrop-blur-sm">
						{profile.title}
					</span>
				</div>

				<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white animate-fade-in-up delay-200 leading-tight">
					Hello, I'm <br />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
						{profile.name}
					</span>
				</h1>

				<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300 font-light">
					{profile.tagline}
				</p>

				<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-500 pt-6">
					<a
						href={profile.resumeUrl}
						download
						className="flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95">
						<DownloadIcon className="w-5 h-5" />
						<span>Download Resume</span>
					</a>

					<div className="flex gap-3">
						<a
							href={`mailto:${profile.email}`}
							className="p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1"
							aria-label="Email">
							<MailIcon className="w-5 h-5" />
						</a>
						<a
							href={`https://${profile.linkedin}`}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1"
							aria-label="LinkedIn">
							<LinkedinIcon className="w-5 h-5" />
						</a>
						{profile.github && (
							<a
								href={`https://${profile.github}`}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1"
								aria-label="GitHub">
								<GithubIcon className="w-5 h-5" />
							</a>
						)}
					</div>
				</div>
			</div>

			<div
				className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer"
				onClick={() =>
					document
						.getElementById("resume")
						?.scrollIntoView({ behavior: "smooth" })
				}>
				<ChevronDown className="w-8 h-8" />
			</div>
		</section>
	);
};

export default Hero;
