import { LitElement, html, css, CSSResult, TemplateResult, customElement } from 'lit-element';

@customElement('page-home')
export class PageHome extends LitElement {
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
      Home Page
    </div>
    `;
  }
}
