const theme = {
	space: ["0", "0.125rem", "0.25rem" ,"0.5rem", "1rem" , "2rem" , "4rem", "8rem" , "16rem"],
	colors: {
		background: '#ff0000',
		text: '#000',
		primary: '#f39037',
		secondary: '#ccc',
		accent: '#509cb7',
		asda: '#efefef',
		aaaaa: [
			'rgb(51, 51, 51)',
			'rgb(22, 22, 33)',
			'#444',
			'#111',
			'#333',
			'#444',
		]
	},
	fonts: {
		body: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
		monospace: `"Mono Lisa", Monaco, monospace` /* Check out https://monolisa.dev for Mono Lisa font */,
	},
	fontSizes: {
		xl: '4rem',
		lg: '2rem',
		md: '1rem',
		sm: '0.9rem',
		xs: '0.75rem',
	},
	fontWeights: {
		heading: 'bold',
		body: 'normal',
	},
	textStyles: {
		heading: {
			fontSize: 'xl',
			fontWeight: 'heading',
		},
		body: {
			fontSize: 'md',
			fontWeight: 'body',
		},
	},
};

export default theme;
