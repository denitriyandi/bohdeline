Ext.define('CrudExt.view.spkAnyam.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.spkAnyamForm',
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
                margin:'5 5 5 5'
            },
            items: [
                {
                    xtype:'fieldset',
                    title: 'OC Detail',
                    collapsible: true,
                    defaultType: 'textfield',
                    height:160,
                    items :[{
                        name: 'id_OC',
                        xtype:'combobox',
                        fieldLabel: 'ID OC',
                        valueField: 'id_OC',
                        displayField: 'id_OC',                        
                        //store:'Suppliers',
                        queryMode:'local',
                        typeAhead:true 
                    },{
                        fieldLabel: 'Buyer',  
                        margin: '0 37 0 0',                      
                        name: 'buyer'                    
                    }]
                },{
                    xtype:'fieldset',
                    title:'Product Detail',
                    collapsible:true,
                    layout:'anchor',
                    width:600,
                    height:160,
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
                                fieldLabel: 'Harga Total',
                                name: 'harga_total',
                                margin: '0 37 0 0'
                            }, {
                                fieldLabel: 'Harga Item',
                                name: 'harga_item'
                            }] 
                        },{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            items: [{
                                fieldLabel: 'Qty',
                                margin: '0 37 0 0',
                                name: 'qty'
                            }, {
                                name: 'satuan',
                                xtype:'combobox',
                                labelWidth: 100,
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
                },{
                    xtype:'fieldset',
                    title: 'SPK Detail',
                    collapsible: true,
                    height:170,
                    defaultType: 'textfield',
                    items :[{
                        fieldLabel: 'No SPK',
                        name: 'no_SPK'
                    },{
                        fieldLabel: 'Tanggal SPK',
                        name: 'tanggal',
                        xtype: 'datefield'
                    },{
                        fieldLabel: 'Tanggal Selesai',
                        name: 'tanggal',
                        xtype: 'datefield'
                    },{
                        name: 'id_pengesub',
                        xtype:'combobox',
                        fieldLabel: 'ID Pengesub',
                        valueField: 'id_pengesub',
                        displayField: 'nama_pengesub',
                        store:'Pengesubs',
                        queryMode:'local',
                        typeAhead:true 
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


