Ext.define('CrudExt.view.item.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Item',
	width           : 800,
	height          : 545,	
	autoShow        : true,
	modal           : true,
	alias           : 'widget.itemEdit',
	initComponent   : function(){
		this.items = [
        		Ext.widget('itemForm')	                	             
		];
		this.callParent(arguments);
	}
});