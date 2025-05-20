import { mfeConfigs } from './config';

export function getMfeUrl(name: string): string {
  const config = mfeConfigs[name];
  if (!config) throw new Error(`MFE config not found for ${name}`);

  const isLocalhost = window.location.hostname === 'localhost';
  return isLocalhost ? config.localUrl : config.prodUrl;
}
