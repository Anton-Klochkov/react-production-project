import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfig } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerConfig => {
  return {
    port: options.PORT,
    open: true,
    historyApiFallback: true,
  };
};
