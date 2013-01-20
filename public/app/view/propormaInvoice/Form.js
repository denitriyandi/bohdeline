Ext.define('CrudExt.view.performaInvoice.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.performaInvoiceForm',
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
                /*name: 'id_AO',
                xtype:'combobox',
                fieldLabel: 'Acceptence Order',
                valueField: 'id_AO',
                displayField: 'id_AO',
                store:'AcceptenceOrders',
                queryMode:'local',
                typeAhead:true   */
                name: 'id_AO',
                xtype:'combobox',
                fieldLabel: 'Acceptance Order',
                valueField: 'id_AO',
                displayField: 'id_AO',
                store:'AcceptenceOrders',
                queryMode:'local',
                typeAhead:true  
            },{
                fieldLabel: 'Tanggal',
                xtype: 'datefield',
                name: 'tanggal_pi'

            },{
                fieldLabel: 'ID PI',
                xtype:'combobox',                
                valueField: 'id_PI',
                displayField: 'id_PI',
                //store:'AcceptenceOrder',
                queryMode:'local',
                typeAhead:true    
            },{
                xtype: 'datefield',
                fieldLabel: 'Tanggal PI',
                name: 'tanggal_pi'
            },{                
                fieldLabel: 'Diskon',
                name: 'diskon'
            },{
                xtype: 'datefield',
                fieldLabel: 'Shipment Conf',
                name: 'shipment_Conf_date'
            },{                
                fieldLabel: 'Container Type',
                name: 'Contyner_type'
            }
		];
		this.buttons = [
                    {
                        text: 'Simpan',
                        action: 'save',
                        itemId: 'simpan',
                        iconCls: 'save'
                    },
                    {
                        text: 'Batal',
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


