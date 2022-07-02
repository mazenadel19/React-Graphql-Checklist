module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": 0,
        "react/prop-types": 0,
        "no-unused-vars":1
    },
    "settings": {
        "react": {
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
        }
    }
}
