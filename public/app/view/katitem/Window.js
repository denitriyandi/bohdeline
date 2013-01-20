Ext.define('CrudExt.view.katItem.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Kategori Item',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.katItemEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('katItemForm')
		];
		this.callParent(arguments);
	}

});