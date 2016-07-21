import $ from 'jquery-slim';

import RegistrationForm from './components/registration-form/RegistrationForm';
import ClientsideRender from './components/clientside-render/ClientsideRender';

$(document).ready(() => {

    new RegistrationForm('.registration-form');
    (new ClientsideRender('#render-here')).render('Hello world');

});