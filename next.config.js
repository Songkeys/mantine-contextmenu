/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('@ducanh2912/next-pwa').default({ dest: 'public', disable: true });
const { version: PACKAGE_VERSION } = require('./package.json');

module.exports = async () => {
  const { downloads } = await fetch('https://api.npmjs.org/downloads/point/last-month/mantine-contextmenu')
    .then((res) => res.json())
    .catch(() => ({ downloads: 0 }));

  /**
   * @type {import('next').NextConfig}
   */
  const config = {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true },
    env: {
      GITHUB_PAGES: String(process.env.GITHUB_PAGES === 'TRUE' || false).toUpperCase(),
      PACKAGE_VERSION,
      INITIAL_NPM_DOWNLOADS: String(downloads),
    },
  };

  if (process.env.GITHUB_PAGES) config.basePath = '/mantine-contextmenu';

  return withPWA(config);
};
