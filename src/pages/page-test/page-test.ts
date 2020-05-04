import { LitElement, html, css, CSSResult, TemplateResult, customElement } from 'lit-element';

@customElement('page-test')
export class PageTest extends LitElement {
  static get styles(): CSSResult {
    return css`
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  protected render(): TemplateResult {
    return html`
    <div>
      TEST Page
    </div>
    `;
  }
}
