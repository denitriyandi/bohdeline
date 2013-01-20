Ext.define('CrudExt.view.cushion.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Cushion',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.cushionEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('cushionForm')
		];
		this.callParent(arguments);
	}

});