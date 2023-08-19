export type Apps = 'HOME' | 'CONTACT' | 'PROJECTS' | 'ABOUT';
export type AppScreen = 'minimized' | 'fullscreen' | 'fullscreenWindowed' | 'windowed' | 'closed';

export type Windows = {
	[x in Apps]: {
		screen: AppScreen;
	};
};
export type AppLabels = {
	[x in Apps]: string[];
};
