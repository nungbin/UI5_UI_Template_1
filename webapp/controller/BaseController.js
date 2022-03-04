sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("ui5uitemplate1.controller.GaseController", {
            onInit: function () {
                alert("onInit, BaseController");
            },








            goView1: function(oEvent) {
                //alert("Hi");
                this.getOwnerComponent().getRouter().navTo("View1");
            },

            goView2: function(oEvent) {
                //alert("Hi");
                this.getOwnerComponent().getRouter().navTo("View2", {
                    id: 1
                });
            }
        });
    });
