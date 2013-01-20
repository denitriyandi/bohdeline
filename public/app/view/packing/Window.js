Ext.define('CrudExt.view.packing.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Packing',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.packingEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('packingForm')
		];
		this.callParent(arguments);
	}

});