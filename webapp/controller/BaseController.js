sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ui5uitemplate1.controller.GaseController", {
            //onInit: function () {

            //}







            
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
