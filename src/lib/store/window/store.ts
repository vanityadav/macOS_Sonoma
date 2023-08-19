import { writable } from 'svelte/store';
import type { Apps, Windows } from './types';

type InitialState = {
	element: HTMLDivElement | null;
	zIndex: number;
	userSelectNone: boolean;
	activeWindow: Apps;
	windows: Windows;
};

const initialState: InitialState = {
	element: null,
	zIndex: 1,
	userSelectNone: true,
	activeWindow: 'HOME',
	windows: {
		HOME: { screen: 'windowed' },
		CONTACT: { screen: 'closed' },
		ABOUT: { screen: 'closed' },
		PROJECTS: { screen: 'closed' }
	}
};

const windows = writable(initialState);

export default windows;
