module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        /*
        "indent": [
            "error",
            4
        ],*/
        /*"linebreak-style": [
            "error",
            "windows"
        ],*/
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};