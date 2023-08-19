import mail from '$lib/assets/dock/mail.svg';
import home from '$lib/assets/dock/home.svg';
import about from '$lib/assets/dock/about.svg';
import resume from '$lib/assets/dock/resume.svg';
import projects from '$lib/assets/dock/projects.svg';
import messenger from '$lib/assets/dock/messenger.svg';
import type { DockLinks, DockRoutes } from './types';

const dockRoutes: DockRoutes[] = [
	{ tag: 'div', src: home, label: 'HOME' },
	{ tag: 'div', src: about, label: 'ABOUT' },
	{ tag: 'div', src: projects, label: 'PROJECTS' },
	{ tag: 'div', src: messenger, label: 'CONTACT' }
];
const dockLinks: DockLinks[] = [
	{ tag: 'a', href: '/Vanit Yadav CV.pdf', src: resume, label: 'RESUME' },
	{
		tag: 'a',
		href: "mailto:vanityadav08@gmail.com?subject=Let's chat about my website&body=Hi Vanit,%0A %0AI would like you to ....",
		src: mail,
		label: 'MAIL'
	}
];

export { dockRoutes, dockLinks };
