import { LitElement, customElement } from 'lit-element';

@customElement('base-layout')
export class BaseLayout extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}
