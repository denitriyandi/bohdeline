Ext.define('CrudExt.view.jenisAnyam.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Jenis Anyam',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.jenisAnyamEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('jenisAnyamForm')
		];
		this.callParent(arguments);
	}

});