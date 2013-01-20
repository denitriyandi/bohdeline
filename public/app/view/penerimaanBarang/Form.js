Ext.define('CrudExt.view.penerimaanBarang.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.penerimaanBarangForm',
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
                    title: 'PO Detail',
                    collapsible: true,
                    defaultType: 'textfield',
                    height:155,
                    items :[{
                        name: 'id_po',
                        xtype:'combobox',
                        fieldLabel: 'ID PO',
                        valueField: 'id_po',
                        displayField: 'id_po',                        
                        store:'PurchaseOrders',
                        queryMode:'local',
                        typeAhead:true                        
                    }/*,{
                        fieldLabel: 'ID Penerimaan',
                        name: 'id_Penerimaan'                        
                    }*/,{
                        fieldLabel: 'Tanggal Penerimaan',
                        xtype: 'datefield',
                        name: 'tanggal',
                        format:'Y-m-d'                    
                    }/*,{
                        fieldLabel: 'Nama Supplier',
                        name: 'nama_supplier'                        
                    }*/]
                },{
                    xtype:'fieldset',
                    title:'Product Detail',
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
                                name: 'id_kategori',
                                xtype:'combobox',
                                fieldLabel: 'Kategori Product',
                                valueField: 'id_kategori',
                                displayField: 'nama_kategori',
                                margin: '0 20 0 0',
                                triggerAction: 'all',
                                emptyText: 'Pilih kategori..',
                                store:'KatItems',
                                queryMode:'local',
                                typeAhead:true 
                            }, {
                                name: 'id_product',
                                xtype:'combobox',
                                fieldLabel: 'ID Product',
                                valueField: 'id_product',
                                displayField: 'id_product',
                                //store:'Suppliers',
                                queryMode:'local',
                                typeAhead:true 
                            }]
                        },{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            items: [{
                                fieldLabel: 'Qty',
                                margin: '0 130 0 0',
                                width: 160,
                                name: 'qty'
                            }, {
                                name: 'satuan',
                                xtype:'combobox',
                                labelWidth: 80,
                                fieldLabel: 'Satuan',
                                valueField: 'satuan',
                                displayField: 'satuan',
                                //store:'Suppliers',
                                queryMode:'local',
                                typeAhead:true 
                            }] 
                        },{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            items: [{
                                fieldLabel: 'Nama Item', 
                                name: 'nama_item'
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


