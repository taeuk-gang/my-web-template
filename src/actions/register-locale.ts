import { registerTranslateConfig, use } from "@appnest/lit-translate";

registerTranslateConfig({
  loader: lang => fetch(`/src/assets/locales/${lang}.json`).then(res => res.json())
});

use(`en`);
