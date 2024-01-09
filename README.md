# Chrome Extension template

Template for Chrome Extension MV3+ using Vite + Vanilla TypeScript. It is set to have a background worker script and a popup action.

## Types

The chrome types are provided with "chrome-types" package.

## Scripts

- `dev` - run dev server, will open popup entry point in a browser. The chrome namespace will not be available.
- `build` - builds the extension output. Use this to deploy extension, you can also use this folder to load unpacked into your browser in dev mode.

## Manifest

Manifest and extension static assets (like icons) are in the `public` folder. Manifest is in it's 3 version.

## Background script

If you dont need an background worker script then remove `src/background.ts` and remove this entry from `vite.config.ts`'s `input` list: `input: 'popup.html',`
