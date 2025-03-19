![Webpack-app-starter](https://socialify.git.ci/darshangaikwad4114/Webpack-app-starter/image?language=1&logo=https%3A%2F%2Fskillicons.dev%2Ficons%3Fi%3Dwebpack&name=1&pattern=Solid&theme=Light)

# Webpack App Starter

The Webpack App Starter is a boilerplate for JavaScript applications. It includes development dependencies like Babel, CSS loaders, HTML Webpack Plugin, and Sass compiler. The project uses axios for API requests. To use, clone the repository, install dependencies, customize configurations, and start the development server. Contributions are welcome following the guidelines in the readme. The project is under the MIT License.

## Features

- Modern ES6+ JavaScript with Babel transpilation
- SCSS compilation
- Responsive development server with hot reloading
- Production build optimization
- Asset management (images, fonts, etc.)
- Environment variable support via .env
- Code quality tools (ESLint, Prettier)
- Bundle analysis capabilities

## Devlopment Dependencies

- **@babel/preset-env**: Babel preset for compiling modern JavaScript syntax to older versions.
- **babel-loader**: Webpack loader for transpiling JavaScript files using Babel.
- **css-loader**: Webpack loader for loading CSS files.
- **dotenv-webpack**: Webpack plugin for loading environment variables from .env file.
- **eslint**: JavaScript linting utility.
- **prettier**: Code formatter.
- **html-webpack-plugin**: Webpack plugin for generating HTML files with injected bundles.
- **mini-css-extract-plugin**: Webpack plugin for extracting CSS into separate files.
- **sass**: Sass compiler for transforming Sass files to CSS.
- **sass-loader**: Webpack loader for loading Sass files.
- **style-loader**: Webpack loader for injecting CSS styles into the DOM.
- **webpack**: Module bundler for JavaScript applications.
- **webpack-bundle-analyzer**: Webpack plugin for analyzing bundle sizes.
- **webpack-cli**: Command-line interface for running Webpack commands.
- **webpack-dev-server**: Development server for serving Webpack bundles.

## Dependencies

- **axios**: Promise-based HTTP client for making API requests.

#

## Getting Started

To use this project, follow these steps:

1. Clone the repository to your local machine.
   `git clone https://github.com/darshangaikwad4114/Webpack-app-starter.git`
2. Install the required dependencies by running `npm install` or `yarn install`.
3. Customize the configuration files according to your project requirements.
4. Start the development server by running `npm start` or `yarn start`.
5. Open your browser and navigate to `http://localhost:3000` (or the specified port).
6. Begin developing your JavaScript application using the provided environment.

## Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Creates a production build
- `npm run lint` - Runs ESLint to check code quality
- `npm run format` - Formats code with Prettier
- `npm run analyze` - Analyzes bundle size with webpack-bundle-analyzer

## Configuration

To configure the Webpack App Starter, follow these steps:

1. Open the project's root directory.
2. Locate the `webpack.config.js` file.
3. Open the `webpack.config.js` file in a text editor.
4. Modify the configuration options according to your project requirements.
5. Environment variables can be set in the `.env` file.

## Contributing 

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure that the project builds successfully.
3. Write tests to cover your changes, if applicable.
4. Submit a pull request with a clear description of your changes and their purpose.

## License

This project is licensed under the [MIT License](LICENSE).
