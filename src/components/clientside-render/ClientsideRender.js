import Component from '../../core/Component';
import template from './clientside-render.html';
import style from './clientside-render.css';

export default class ClientsideRender extends Component {
    render(text) {
        this.el.html(template(text));
    }
}
