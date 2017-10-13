'use strict';

class FooterController {
    constructor() {

    }
    formsubmit() {
        this.el;
        this.error = Math.random() > 0.5;
        if (this.error) {
            this.validaColor = "has-success";
            this.validaColorDiv = ["form-control-feedback", "glyphicon", "glyphicon-ok"];
            this.el = "<label class='control-label' for='inputSuccess2'>Registro Exitoso</label>";
        } else {
            this.validaColor = "has-error";
            this.validaColorDiv = ["form-control-feedback", "glyphicon", "glyphicon-remove"];
            this.el = "<label class='control-label' for='inputSuccess2'>inconvenientes con el registro</label>";
        }
    }
}

angular.module('practicaApp')
    .controller('FooterController', FooterController);