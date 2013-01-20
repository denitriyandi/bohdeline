Ext.define('CrudExt.view.warna.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Warna',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.warnaEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('warnaForm')
		];
		this.callParent(arguments);
	}

});