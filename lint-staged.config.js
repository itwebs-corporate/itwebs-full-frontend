export default {
  './src/**/*.{js,jsx,ts,tsx}': ['pnpm lint:fix', 'pnpm format'],
  '**/*.{json,css,scss,md,webmanifest}': ['pnpm format'],
};
