Ext.define('CrudExt.view.supplier.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit supplier',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.supplierEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('supplierForm')
		];
		this.callParent(arguments);
	}



});