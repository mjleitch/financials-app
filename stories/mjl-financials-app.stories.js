import { html } from 'lit-html';
import '../src/mjl-financials-app.js';

export default {
  title: 'MjlFinancialsApp',
  component: 'mjl-financials-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <mjl-financials-app
      style="--mjl-financials-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </mjl-financials-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
