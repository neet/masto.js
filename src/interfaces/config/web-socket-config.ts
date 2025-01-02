export interface WebSocketConfig {
  getMaxAttempts(): number;
  getHeaders(): Record<string, string>;
  resolvePath(path: string, params?: Record<string, unknown>): URL;
}
