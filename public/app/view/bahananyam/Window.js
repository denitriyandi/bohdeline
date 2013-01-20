Ext.define('CrudExt.view.bahanAnyam.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Epoxy',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.bahanAnyamEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('bahanAnyamForm')
		];
		this.callParent(arguments);
	}

});