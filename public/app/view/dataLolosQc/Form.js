Ext.define('CrudExt.view.dataLolosQc.Form', {
    extend          : 'Ext.form.Panel',
    alias           : 'widget.dataLolosQcForm',
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
                    title: 'QC',
                    collapsible: true,
                    defaultType: 'textfield',
                    height:155,
                    items :[{
                        name: 'id_spk',
                        xtype:'combobox',
                        fieldLabel: 'ID SPK',
                        valueField: 'id_spk',
                        displayField: 'id_spk',                        
                        store:'Spks',
                        queryMode:'local',
                        typeAhead:true                        
                    },{
                        fieldLabel: 'Tanggal QC',
                        xtype: 'datefield',
                        name: 'tanggal_QC',
                        format:'Y-m-d'
                    },{
                        name: 'id_pengesub',
                        xtype:'combobox',
                        fieldLabel: 'Pengesub',
                        valueField: 'id_pengesub',
                        displayField: 'nama_pengesub',
                        store:'Pengesubs',
                        queryMode:'local',
                        typeAhead:true 
                    }]
                },{
                    xtype:'fieldset',
                    title:'QC Detail',
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
                            },{
                                name: 'id_item',
                                xtype:'combobox',
                                fieldLabel: 'Product',
                                valueField: 'id_item',
                                displayField: 'nama_item',
                                //store:'items',
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
                                name: 'nama_item',
                                margin: '0 57 0 0'
                            },{
                                name: 'status',
                                xtype:'combobox',
                                labelWidth: 80,
                                fieldLabel: 'Status',
                                valueField: 'status',
                                displayField: 'status',
                                //store:'Suppliers',
                                queryMode:'local',
                                typeAhead:true 
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


