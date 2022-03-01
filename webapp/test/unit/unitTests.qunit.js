/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ui5_ui_template_1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
