import { createRestAPIClient } from "../../src/index.js";
import { SessionPoolImpl } from "../services/index.js";

globalThis.admin = createRestAPIClient({
  url: globalThis.__misc__.url,
  accessToken: globalThis.__misc__.adminToken.accessToken,
});

globalThis.sessions = new SessionPoolImpl(
  globalThis.__misc__.tokens,
  globalThis.__misc__.url,
  globalThis.__misc__.instance,
);
