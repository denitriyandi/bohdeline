Ext.define('CrudExt.view.dataKebutuhan.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.dataKebutuhanForm',
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
                fieldLabel: 'ID OC',
                xtype:'combobox',                
                valueField: 'id_PI',
                displayField: 'id_PI',
                //store:'AcceptenceOrder',
                queryMode:'local',
                typeAhead:true    
            },{
                fieldLabel: 'Jenis Data Kebutuhan',
                xtype:'combobox',                
                valueField: 'jenis_kebutuhan',
                displayField: 'jenis_kebutuhan',
                //store:'AcceptenceOrder',
                queryMode:'local',
                typeAhead:true    
            }
		];
		this.buttons = [
                    {
                        text: 'SET',
                        action: 'save',
                        itemId: 'simpan',
                        iconCls: 'save'
                    },
                    {
                        text: 'PRINT',
                        action: 'cancel',
                        itemId: 'batal',
                        iconCls: 'cancel',
                        handler: function(){
                            this.up('window').close();
                        }
                    }
		];
		this.callParent(arguments);
	}
});


