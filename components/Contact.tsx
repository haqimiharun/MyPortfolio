import React from "react";
import { profile } from "../data";
import { MailIcon, LinkedinIcon } from "./Icons";

const Contact: React.FC = () => {
	return (
		<section
			id="contact"
			className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
			<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
				<h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
				<p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
					I'm currently open to new opportunities. Whether you have a question
					or just want to say hi, I'll try my best to get back to you!
				</p>

				<div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
					<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
						<a
							href={`mailto:${profile.email}`}
							className="flex flex-col items-center group">
							<div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-emerald-500 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-emerald-900/20">
								<MailIcon className="w-8 h-8" />
							</div>
							<h3 className="text-white font-semibold mb-1">Email Me</h3>
							<p className="text-slate-500 text-sm group-hover:text-emerald-400 transition-colors">
								{profile.email}
							</p>
						</a>

						<div className="w-full h-px md:w-px md:h-16 bg-slate-800"></div>

						<a
							href={`https://${profile.linkedin}`}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center group">
							<div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-blue-900/20">
								<LinkedinIcon className="w-8 h-8" />
							</div>
							<h3 className="text-white font-semibold mb-1">LinkedIn</h3>
							<p className="text-slate-500 text-sm group-hover:text-blue-400 transition-colors">
								Connect professionally
							</p>
						</a>
					</div>

					<div className="mt-12 pt-8 border-t border-slate-800">
						<a
							href={`mailto:${profile.email}?subject=Inquiry from Portfolio`}
							className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95 w-full sm:w-auto">
							Say Hello
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
