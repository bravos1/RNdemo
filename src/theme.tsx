import {extendTheme} from 'native-base';

export const CustomTheme = extendTheme({
	components: {
		Text: {
			baseStyle: {
				color: 'white',
			},
			defaultProps: {
				size: 'lg',
			},
			sizes: {
				xl: {fontSize: '64px'},
				lg: {fontSize: '32px'},
				md: {fontSize: '16px'},
				sm: {fontSize: '12px'},
			},
		},
		Button: {
			baseStyle: {
				w: 200,
				rounded: 50,
			},
		},
	},
});
