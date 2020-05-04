import { LitElement, html, css, CSSResult, TemplateResult, customElement } from 'lit-element';

@customElement('test-element')
export class TestElement extends LitElement {
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
