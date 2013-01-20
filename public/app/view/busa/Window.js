Ext.define('CrudExt.view.busa.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Busa',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.busaEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('busaForm')
		];
		this.callParent(arguments);
	}

});