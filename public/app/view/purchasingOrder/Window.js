Ext.define('CrudExt.view.purchasingOrder.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit purchasingOrder',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.purchasingOrderEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('purchasingOrderForm')
		];
		this.callParent(arguments);
	}

});