module.exports = {
	extends: [
		'airbnb-base', 
		'plugin:prettier/recommended',
		'prettier/react'
	],
	plugins: [
		'jest'
	],
	rules: {
		'no-param-reassign': 0,
		'arrow-body-style': 0,
		'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
	},
	env: {
    'jest/globals': true
  }
};