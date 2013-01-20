Ext.define('CrudExt.view.realisasiPengeluaran.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.realisasiPengeluaranForm',
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
                fieldLabel: 'ID Nota',
                xtype:'combobox',                
                valueField: 'id_nota',
                displayField: 'id_nota',
                //store:'AcceptenceOrder',
                queryMode:'local',
                typeAhead:true    
            },{
                fieldLabel: 'Tanggal',
                xtype:'datefield',                
                valueField: 'tanggal',
                displayField: 'tanggal',                
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


