/*global QUnit*/

sap.ui.define([
	"commanish/form/controller/formView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("formView Controller");

	QUnit.test("I should test the formView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
