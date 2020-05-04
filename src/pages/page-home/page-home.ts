import { LitElement, html, TemplateResult, customElement } from 'lit-element';
import { styles } from './page-home.style';

@customElement('page-home')
export class PageHome extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  protected render(): TemplateResult {
    return html`
    <div id="pageHome" class="${styles}">
      Home Page
    </div>
    `;
  }
}
