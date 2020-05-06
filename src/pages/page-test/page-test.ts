import { html, TemplateResult, customElement } from 'lit-element';
import { MobxLitElement } from '@adobe/lit-mobx';
import { styles } from './page-test.style';
import { Router } from '@vaadin/router';
import Counter from '../../stores/conter';

@customElement('page-test')
export class PageTest extends MobxLitElement {
  private counter = Counter;

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  protected render(): TemplateResult {
    return html`
    <div id="pageTest" class="${styles}">
      <h1>TEST Page</h1>
      <p>Count is ${this.counter.count}</p>
      <br />
      <button @click=${this.incrementCount}>Add</button>
    </div>
    `;
  }

  protected firstUpdated(): void {
    this.counter.increment();
  }

  protected incrementCount(): void {
      this.counter.increment();
      Router.go(`/`);
  }
}
