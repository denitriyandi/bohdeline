Ext.define('CrudExt.view.bahanMentahCushion.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Bahan Mentah Cushion',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.bahanMentahCushionEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('bahanMentahCushionForm')
		];
		this.callParent(arguments);
	}

});