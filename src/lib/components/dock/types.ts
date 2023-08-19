import type { Apps } from '$lib/store/window/types';

export type DockRoutes = {
	tag: 'div';
	src: string;
	label: Apps;
};
export type DockLinks = {
	tag: 'a';
	href: string;
	src: string;
	label: string;
};
