module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true // Allows for the parsing of JSX
		}
	},
	plugins: [
		'@typescript-eslint',
		'react-hooks'
	],
	settings: {
		react: {
			version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"semi": [2, "never"],
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "off", // Checks effect dependencies
		"quotes": [2, "single", "avoid-escape"], "@typescript-eslint/no-var-requires": 0,
		"@typescript-eslint/ban-ts-comment": 0,
		"object-curly-spacing": ["error", "always"],
		//turned off proptypes as Typescript handles prop validation
		"react/prop-types": "off"
	}
}