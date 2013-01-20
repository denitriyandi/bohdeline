Ext.define('CrudExt.view.jenisBahanMentahCushion.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Jenis Bahan Mentah Cushion',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.jenisBahanMentahCushionEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('jenisBahanMentahCushionForm')
		];
		this.callParent(arguments);
	}

});