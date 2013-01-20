Ext.define('CrudExt.view.katAksesoris.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Kategori Aksesoris',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.katAksesorisEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('katAksesorisForm')
		];
		this.callParent(arguments);
	}

});