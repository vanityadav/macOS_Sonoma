/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ["'Text'", ...defaultTheme.fontFamily.sans]
			},
			backgroundImage: {
				'app-bg': "url('/wallpapers/mac.jpeg')"
			},
			backdropBlur: {
				primary: '30px',
				menu: '50px'
			},
			fontWeight: {
				titleEmphasized: '700', // bold
				title3Emphasized: '600', // semibold
				heading: '700', // bold
				headingEmphasized: '900', // heavy
				bodyEmphasized: '600', // semibold
				calloutEmphasized: '600', // semibold
				subheadingEmphasized: '600', // semibold
				footNoteEmphasized: '600', // semibold
				caption1Emphasized: '500', // medium
				caption2: '500', // medium
				caption2Emphasized: '600' // semibold
			},
			fontSize: {
				largeTitle: '26px',
				title1: '22px',
				title2: '17px',
				title3: '15px',
				headline: '13px',
				body: '13px',
				callout: '12px',
				subHeading: '11px',
				caption: '10px'
			},
			lineHeight: {
				largeTitle: '32px',
				title1: '26px',
				title2: '22px',
				title3: '20px',
				headline: '16px',
				body: '16px',
				callout: '15px',
				subHeading: '14px',
				caption: '13px'
			},
			colors: {
				// system
				red: 'var(--system-red)',
				orange: 'var(--system-orange)',
				yellow: 'var(--system-yellow)',
				green: 'var(--system-green)',
				mint: 'var(--system-mint)',
				teal: 'var(--system-teal)',
				cyan: 'var(--system-cyan)',
				blue: 'var(--system-blue)',
				indigo: 'var(--system-indigo)',
				purple: 'var(--system-purple)',
				pink: 'var(--system-pink)',
				brown: 'var(--system-brown)',
				gray: 'var(--system-gray)',

				// text
				textPrimary: 'rgba(var(--text-primary) , var(--text-primary-alpha))',
				textSecondary: 'rgba(var(--text-primary) , var(--text-secondary-alpha))',
				textTertiary: 'rgba(var(--text-primary) , var(--text-tertiary-alpha))',

				// ui
				headerViewTop: 'rgba(var(--header-view-top) , var(--header-view-top-alpha))',
				headerViewBase: 'rgba(var(--header-view-base) , var(--header-view-base-alpha))',

				menu: 'rgba(var(--menu) , var(--menu-alpha))',

				popover: 'rgba(var(--base-color) , var(--popover-alpha))',

				fullscreen: 'rgba(var(--fullscreen) , var(--fullscreen-alpha))',

				hud: 'rgba(var(--hud) , var(--hud-alpha))',

				selectionFocusedBase: 'rgb(var(--selection-focused))',

				selectionFocusedTop: 'rgba(var(--selection-focused) , var(--selection-focused-top-alpha))',

				selectionUnfocusedTop:
					'rgba(var(--selection-unfocused-top) , var(--selection-unfocused-top-alpha))',

				selectionUnfocusedBase:
					'rgba(var(--selection-unfocused-base) , var(--selection-unfocused-base-alpha))',

				sideBar: 'rgba(var(--base-color) ,var(--side-bar-alpha))',

				titleBar: 'rgba(var(--title-bar) ,var(--title-bar-alpha))',

				tooltip: 'rgba(var(--base-color) ,var(--tooltip-alpha))',

				underWindowBackground: 'rgba(var(--base-color) ,var(--under-window-background-alpha))',

				ultraThick: 'rgba(var(--base-color) ,var(--ultra-thick-alpha) )',
				thick: 'rgba(var(--base-color) ,var(--thick-alpha) )',
				medium: 'rgba(var(--base-color) ,var(--medium-alpha) )',
				thin: 'rgba(var(--base-color) ,var(--thin-alpha) )',
				ultraThin: 'rgba(var(--base-color) ,var(--ultra-thin-alpha) )'
			},
			boxShadow: {
				primary: 'var(--primary-shadow)',
				secondary: 'var(--secondary-shadow)',
				tertiary: 'var(--tertiary-shadow)',
				quaternary: 'var(--quaternary-shadow)',
				window: 'var(--primary-window-inner-shadow)'
			},
			animation: {
				dockIconAni: 'dockIconAni 0.4s cubic-bezier(.09,.42,.77,.71) forwards'
			},
			keyframes: {
				dockIconAni: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				}
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
			}
		}
	},
	plugins: []
};
