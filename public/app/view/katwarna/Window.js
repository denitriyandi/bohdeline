Ext.define('CrudExt.view.katWarna.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Kategori Warna',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.katWarnaEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('katWarnaForm')
		];
		this.callParent(arguments);
	}

});