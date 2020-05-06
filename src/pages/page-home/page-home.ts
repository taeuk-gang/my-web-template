import { html, TemplateResult, customElement } from 'lit-element';
import { MobxLitElement } from '@adobe/lit-mobx';
import { styles } from './page-home.style';
import { Router } from '@vaadin/router';
import Counter from '../../stores/conter';

@customElement('page-home')
export class PageHome extends MobxLitElement {
  private counter = Counter;

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  protected render(): TemplateResult {
    return html`
    <div id="pageHome" class="${styles}">
      <h1>Home Page</h1>

      <p>Count is ${this.counter.count}</p>
      <br />
      <button @click=${this.incrementCount}>Add</button>
    </div>
    `;
  }

  protected incrementCount(): void {
    this.counter.increment();
    Router.go(`/test`);
}
}
