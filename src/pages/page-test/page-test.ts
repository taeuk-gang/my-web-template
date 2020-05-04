import { LitElement, html, TemplateResult, customElement } from 'lit-element';
import { styles } from './page-test.style';

@customElement('page-test')
export class PageTest extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  protected render(): TemplateResult {
    return html`
    <div class="${styles}">
      TEST Page
    </div>
    `;
  }
}
