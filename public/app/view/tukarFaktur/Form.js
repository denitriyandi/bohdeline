Ext.define('CrudExt.view.tukarFaktur.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.tukarFakturForm',
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
                    title: 'Detail Nota',
                    collapsible: true,
                    defaultType: 'textfield',
                    height:155,
                    items :[{
                        fieldLabel: 'ID Invoice',
                        name: 'id_Invoice'                        
                    },{
                        fieldLabel: 'Harga',                        
                        name: 'harga'
                    },{
                        fieldLabel: 'Keterangan',
                        name: 'keterangan'                        
                    }]
                },{
                    xtype:'fieldset',
                    title:'Detail Penerimaan',
                    collapsible:true,
                    layout:'anchor',
                    width:600,
                    height:155,
                    defaults:{
                        anchor: '100%',
                        margin: '0 0 10 0'
                    },
                    items:[{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            items: [{
                                name: 'id_penerimaan',
                                xtype:'combobox',
                                fieldLabel: 'ID Penerimaan',
                                valueField: 'id_penerimaan',
                                displayField: 'id_penerimaan',
                                margin: '0 20 0 0',
                                //store:'Suppliers',
                                queryMode:'local',
                                typeAhead:true 
                            }, {
                                name: 'id_supplier',
                                xtype:'combobox',
                                fieldLabel: 'ID Supplier',
                                valueField: 'id_supplier',
                                displayField: 'nama_supplier',
                                store:'Suppliers',
                                queryMode:'local',
                                typeAhead:true 
                            }]
                        },{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            items: [{
                                fieldLabel: 'No Nota',
                                margin: '0 36 0 0',                                
                                name: 'no_nota'
                            },{
                                fieldLabel: 'Nama Supplier',
                                name: 'nama_supplier'
                            }] 
                        },{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            items: [{
                                fieldLabel: 'Tanggal', 
                                name: 'tanggal',
                                xtype: 'datefield'
                            }]
                        }
                    ]
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


