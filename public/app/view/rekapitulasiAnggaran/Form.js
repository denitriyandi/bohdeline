Ext.define('CrudExt.view.rekapitulasiAnggaran.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.rekapitulasiAnggaranForm',
	requires        : [
                            'Ext.form.Field'
                      ],	
	buttonAlign     : 'center',	
	style           : 'background-color: #fff;',
	border          : false,    
    
	initComponent   : function(){
		this.items = [{
            layout: {
                type: 'table',
                columns: 2                
            },
            defaults: {
                margin:'10 10 10 10'
            },
            items: [
                {
                    xtype:'fieldset',
                    title: 'Rekapitulasi Anggaran',
                    collapsible: true,
                    defaultType: 'textfield',
                    height:155,
                    items :[{
                        name: 'id_pengesub',
                        xtype:'combobox',
                        fieldLabel: 'ID Pengesub',
                        valueField: 'id_pengesub',
                        displayField: 'id_pengesub',                        
                        store:'Pengesubs',
                        queryMode:'local',
                        typeAhead:true                        
                    },{
                        fieldLabel: 'Periode',
                        xtype: 'datefield',
                        name: 'periode',
                        format:'Y-m-d'                    
                    },{
                        fieldLabel: 'Sampai',
                        xtype: 'datefield',
                        name: 'tanggal'                    
                    }]
                },{
                    xtype:'fieldset',
                    title: 'Detail Rekapitulasi Anggaran',
                    collapsible: true,
                    defaultType: 'textfield',
                    height:155,
                    items :[{
                        name: 'no_QC',
                        xtype:'combobox',
                        fieldLabel: 'No. QC',
                        valueField: 'no_QC',
                        displayField: 'no_QC',                        
                        //store:'Pengesubs',
                        queryMode:'local',
                        typeAhead:true                        
                    },{
                        fieldLabel: 'Nominal',                        
                        name: 'nominal'                    
                    }]
                }                
            ]
        }];

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


