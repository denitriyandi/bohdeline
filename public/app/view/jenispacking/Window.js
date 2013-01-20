Ext.define('CrudExt.view.jenisPacking.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Jenis Packing',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.jenisPackingEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('jenisPackingForm')
		];
		this.callParent(arguments);
	}

});