Ext.define('CrudExt.view.orderConfirmation.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.orderConfirmationForm',
	requires        : [
                            'Ext.form.Field'
                        ],
	defaultType     : 'textfield',	
	buttonAlign     : 'center',	
	style           : 'background-color: #fff;',
	border          : false,    
    defaults: {
        width: 220,
        labelWidth: 90
    },
	initComponent   : function(){
		this.items = [    
            {
                name : 'id_pi',
                fieldLabel: 'ID PI',
                xtype:'combobox',                
                valueField: 'id_pi',
                displayField: 'id_pi',
                store:'PropormaInvoices',
                queryMode:'local',
                typeAhead:true    
            },{
                xtype: 'datefield',
                fieldLabel: 'Tanggal',
                name: 'tanggal',
                format : 'Y-m-d'
            }
		];
		this.buttons = [
                    {
                        text: 'Simpan',
                        action: 'save',
                        itemId: 'simpan',
                        iconCls: 'save'
                    }
		];
		this.callParent(arguments);
	}
});


