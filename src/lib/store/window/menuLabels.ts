import { readable } from 'svelte/store';
import type { AppLabels } from './types';

const labels: AppLabels = {
	HOME: ['File', 'Edit', 'View', 'Go', 'Window', 'Help'],
	ABOUT: ['File', 'Edit', 'View', 'Go', 'Window', 'Help'],
	CONTACT: ['File', 'Edit', 'View', 'Go', 'Window', 'Help'],
	PROJECTS: ['File', 'Edit', 'View', 'Go', 'Window', 'Help']
};

const appMenuLabels = readable(labels);
export default appMenuLabels;
