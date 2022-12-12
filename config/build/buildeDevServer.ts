import type { Configuration as DevServerConfig } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): DevServerConfig => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
