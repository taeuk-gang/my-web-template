import { LitElement, html, css, CSSResult, TemplateResult, customElement } from 'lit-element';

@customElement('page-404')
export class Page404 extends LitElement {
  static get styles(): CSSResult {
    return css`
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  protected render(): TemplateResult {
    return html`
      <main>
        404 Page
      </main>
    `;
  }
}
