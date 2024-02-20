# PWA-Text-Editor

## Description

This is an app where the user can create notes or code snippets with or without an internet connection and be able to reliably retrieve it later.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

URL: https://pwa-text-editor-5zmg.onrender.com

## Usage

With this text editor web application, when the user opents the application in their editor, they will see a client server folder structure.
![image](https://github.com/NatalieYaspo/PWA-Text-Editor/assets/149972640/309a3bdd-e9ab-4aa4-8a5d-da54df211205)

When the user runs `npm run start` from the root directory, the application will start up the backend and serve the client.
![image](https://github.com/NatalieYaspo/PWA-Text-Editor/assets/149972640/228095e6-a153-4a52-ba57-ccbdfa07920d)

When the user runs the application from their terminal, the JavaScript files will have been bundled using webpack.
When the webpack plugins have been run, the user will find that they have a generated HTML file, service worker, and a manifest file.
![image](https://github.com/NatalieYaspo/PWA-Text-Editor/assets/149972640/2c82f910-7a36-42d8-8062-ae51b64274e5)

When the user uses next-gen JavaScript in my application, the text editor still functions in the browser without errors.
When the text editor is opened, the user will find that IndexedDB has immediately created a database storage.
When the user enters content and subsequently click off of the DOM window, the content in the text editor is saved with IndexedDB.
![image](https://github.com/NatalieYaspo/PWA-Text-Editor/assets/149972640/355655ae-dd53-4ed5-84ee-199eb45ba698)

When the text editor is opened after closing it, the content in the text editor has been retrieved from our IndexedDB.

When the Install button is selected, the web application is downloaded as an icon to the user's desktop.
When the web application is loaded, there is a registered service worker using workbox.
![image](https://github.com/NatalieYaspo/PWA-Text-Editor/assets/149972640/ddbd085c-4cb7-4fb3-9b4c-c3f767df3198)

When the user registers a service worker, the user will have a static asset pre-cached upon loading along with subsequent pages and static assets.
![image](https://github.com/NatalieYaspo/PWA-Text-Editor/assets/149972640/7f00b89b-cbeb-40e5-ba8a-c6c7b0bb08bb)

![image](https://github.com/NatalieYaspo/PWA-Text-Editor/assets/149972640/7f63040b-76c2-43a9-9994-9530005783d4)

When the user deploys to Render, they will have proper built scripts for a webpack application.

## Credits

Starter Code: 
- https://git.bootcampcontent.com/UNC-Charlotte/UNCC-VIRT-FSF-FT-12-2023-U-LOLC

Developer:
- Natalie Yaspo

Collaborators:
- Le, Roger via Zoom on 20 Feb, 2024

## License

MIT
