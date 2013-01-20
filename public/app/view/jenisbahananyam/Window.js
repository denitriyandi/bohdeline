Ext.define('CrudExt.view.jenisBahanAnyam.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Jenis Bahan Anyam',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.jenisBahanAnyamEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('jenisBahanAnyamForm')
		];
		this.callParent(arguments);
	}

});