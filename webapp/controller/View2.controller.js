sap.ui.define([
    "./BaseController",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, MessageToast) {
        "use strict";

        return BaseController.extend("ui5uitemplate1.controller.View2", {
            onInit: function () {
                // this is the "super" call
                // same happens if you call super() on es6 classes
                BaseController.prototype.onInit.apply(this, arguments);

                alert("onInit, View2 Controller");
            },


            //goView1: function(oEvent) {
            //    //alert("Hi");
            //    this.getOwnerComponent().getRouter().navTo("View1");
            //}
        });
    });
