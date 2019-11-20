import { html } from 'lit-element';
import { BaseView } from './base-view.js';

class NotFoundView extends BaseView {
  render() {
    return html`
      <h1>Invalid</h1>
      <p>
        Please check your URL.
      </p>
    `;
  }

  constructor() {
    super();
    console.log('notfoundview');
    location.href='/assets/error/error404.html';
  }
}

customElements.define('not-found-view', NotFoundView);
