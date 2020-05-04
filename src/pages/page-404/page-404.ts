import { LitElement, html, TemplateResult, customElement } from 'lit-element';
import { styles } from './page-404.style';

@customElement('page-404')
export class Page404 extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  protected render(): TemplateResult {
    return html`
      <main class="${styles}">
        404 Page
      </main>
    `;
  }
}
