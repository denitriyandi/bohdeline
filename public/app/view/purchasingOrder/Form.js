Ext.define('CrudExt.view.purchasingOrder.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.purchasingOrderForm',
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
                    title: 'OC Detail',
                    collapsible: true,
                    defaultType: 'textfield',
                    height:120,
                    items :[{
                        name: 'id_oc',
                        xtype:'combobox',
                        fieldLabel: 'ID OC',
                        valueField: 'id_oc',
                        displayField: 'id_oc',                        
                        store:'OrderConfirmations',
                        queryMode:'local',
                        typeAhead:true                      
                    },{
                        fieldLabel: 'Tanggal',
                        xtype: 'datefield',
                        name: 'tanggal'                    
                    }]
                },{
                    xtype:'fieldset',
                    title: 'Supplier Detail',
                    collapsible: true,
                    defaultType: 'textfield',
                    height:120,
                    width:600,
                    items :[{
                        name: 'id_supplier',
                        xtype:'combobox',
                        fieldLabel: 'ID Supplier',
                        valueField: 'id_supplier',
                        displayField: 'nama_supplier',                        
                        store:'Suppliers',
                        queryMode:'local',
                        typeAhead:true                      
                    }/*,{
                        fieldLabel: 'Nama Supplier',
                        name: 'nama_supplier'
                    },{
                        fieldLabel: 'Alamat',
                        name: 'alamat'
                    }*/]
                },{
                    xtype:'fieldset',
                    title: 'PO Detail',
                    collapsible: true,
                    height:170,
                    defaultType: 'textfield',
                    items :[/*{
                        fieldLabel: 'ID PO',
                        name: 'id_PO'
                    },*/{
                        fieldLabel: 'Tanggal PO',
                        name: 'tanggal_po',
                        xtype: 'datefield',
                        format: 'Y-m-d'
                    },{
                        fieldLabel: 'Tanggal Selesai',
                        name: 'tanggal_selesai',
                        xtype: 'datefield',
                        format: 'Y-m-d'
                    },{
                        fieldLabel: 'PPN',
                        name: 'ppn'
                    },{
                        fieldLabel: 'Status',
                        name: 'status'
                    }]
                },{
                    xtype:'fieldset',
                    title:'Product Detail',
                    collapsible:true,
                    layout:'anchor',
                    width:600,
                    height:170,
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
                                emptyText: 'Pilih Kategori Produk..',
                                store:'KatItems',
                                queryMode:'local',
                                typeAhead:true 
                            }, {
                                name: 'id_item',
                                xtype:'combobox',
                                fieldLabel: 'Product',
                                valueField: 'id_item',
                                displayField: 'nama_item',
                                store:'Items',
                                emptyText: 'Pilih Produk..',
                                queryMode:'local',
                                typeAhead:true 
                            }]
                        }/*,{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            items: [{
                                fieldLabel: 'Nama Item',
                                margin: '0 37 0 0',
                                name: 'nama_item'
                            }, {
                                fieldLabel: 'Harga Item',
                                name: 'harga_item'
                            }] 
                        }*/,{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            items: [{
                                fieldLabel: 'Qty',
                                margin: '0 37 0 0',
                                name: 'qty'
                            }/*, {
                                fieldLabel: 'Harga Total',
                                name: 'harga_total'
                            }*/]
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


