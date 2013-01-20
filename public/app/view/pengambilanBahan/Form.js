Ext.define('CrudExt.view.pengambilanBahan.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.pengambilanBahanForm',
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
                    title: 'Pengeluaran Bahan',
                    collapsible: true,
                    defaultType: 'textfield',
                    height:155,
                    items :[{
                        name: 'id_skb',
                        xtype:'combobox',
                        fieldLabel: 'ID Peng. Bahan',
                        valueField: 'id_skb',
                        displayField: 'id_skb',                        
                        store:'SuratKebutuhanBahans',
                        queryMode:'local',
                        typeAhead:true                        
                    },{
                        fieldLabel: 'Tanggal Keluar',
                        xtype: 'datefield',
                        name: 'tanggal_ambil',
                        format:'Y-m-d'                    
                    }]
                },{
                    xtype:'fieldset',
                    title:'Detail Pengeluaran Bahan',
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
                                name: 'id_item',
                                xtype:'combobox',
                                fieldLabel: 'ID Product',
                                valueField: 'id_item',
                                displayField: 'nama_item',
                                store:'Items',
                                queryMode:'local',
                                typeAhead:true 
                            }]
                        },{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            items: [{
                                fieldLabel: 'Jumlah Keluar',
                                margin: '0 130 0 0',
                                width: 160,
                                name: 'jumlah_keluar'
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
                                fieldLabel: 'Nama Bahan', 
                                name: 'nama_bahan'
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


