import { LitElement, html, css, CSSResult, TemplateResult, customElement } from 'lit-element';

@customElement('page-main')
export class PageMain extends LitElement {
  static get styles(): CSSResult {
    return css`
    `;
  }

  protected render(): TemplateResult {
    return html`
      <main>
        TESTs12
      </main>
    `;
  }
}
