import $ from 'jquery-slim';

export default class Component {

    constructor(selector) {
        this.el = $(selector);
    }

}