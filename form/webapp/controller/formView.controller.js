sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
  
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,JSONModel) {
        "use strict";

            return Controller.extend("com.manish.form.controller.formView", {
            onInit: function () {

            },

            onPress: function(evt){
                MessageToast.show('Cancel kar diya ;)')
            },

            // onSubmit: function(oEvent){
                // let firstname=this.byId("fname").getValue();
                // let mname=this.byId("mname").getValue();
                // let lname=this.byId("lname").getValue();
                // let Rno=this.byId("rno").getValue();
                // let Hbday=this.byId("DP8").getValue();
                // let mno=this.byId("cid").getValue();
                // let gender=this.byId("gid").getSelected();
                // let stream=this.byId("Branch").getValue();
                // console.log('input data=', firstname, mname,lname,Rno, Hbday, mno, gender,stream );
                // MessageToast.show(`name=${firstname} Lastname= ${lname} Roll no=${Rno} DOB =${Hbday}`);

                onSubmit: function(){
                   let oSatyaSir={
                     naam:"sanjana khoeval", caste:"khatik", midName:"Manish", mailId:"sanjana.1@gmail.com",
                     SerialNum:"UI20EC40", gender:"female", branch:"Data science Engineering", bday : "2 June 2001", Number:9887
                    }

                    let oModel= new sap.ui.model.json.JSONModel();
                    oModel.setData(oSatyaSir);
                    this.getView().byId("SimpleFormChange354wideDual").setModel(oModel);
                }
        });
    });
