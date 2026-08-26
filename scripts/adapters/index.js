import * as openrouter from './openrouter.js';
import * as litellm from './litellm.js';
import * as publicPage from './public-page.js';
import * as lmAssistBrowser from './lm-assist-browser.js';

export const ADAPTERS = {
  [openrouter.id]: openrouter,
  [litellm.id]: litellm,
  [publicPage.id]: publicPage,
  [lmAssistBrowser.id]: lmAssistBrowser,
};

export function adapterFor(provider) {
  const name = provider.automation?.adapter || provider.automation?.method;
  const a = ADAPTERS[name];
  if (!a) throw new Error(`No adapter "${name}" for provider ${provider.id}`);
  return a;
}
