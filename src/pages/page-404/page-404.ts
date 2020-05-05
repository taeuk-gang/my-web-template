import { LitElement, html, TemplateResult, customElement } from 'lit-element';
import { styles } from './page-404.style';

@customElement('page-404')
export class Page404 extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  protected render(): TemplateResult {
    return html`
      <div id="page404" class="${styles}">
        404 Page
      </div>
    `;
  }
}
