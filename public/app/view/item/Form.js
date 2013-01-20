Ext.define('CrudExt.view.item.Form', {
    extend          : 'Ext.form.Panel',
    alias           : 'widget.itemForm',
    requires        : [
                            'Ext.form.Field'
                        ],
    defaultType     : 'textfield',
    defaults        : {                            
                            anchor: '100%'                           
                        },
    fieldDefaults   : {
                            allowBlank: false,                                                        
                            labelAlign: 'top',
                            msgTarget: 'side'
                        },
    buttonAlign     : 'center',    
    bodyPadding     : 5,
    style           : 'background-color: #fff;',
    border          : false,    
    initComponent   : function(){
        this.items = [
                    {
                        xtype:'tabpanel', 
                        height:235,
                        plain:true,                                                                 
                        activeTab: 0,                         
                        defaults:{
                            bodyPadding: 10
                        },
                        items:[{
                            title:'Tab 1',
                            items: [{
                                xtype: 'container',     
                                layout:'hbox',
                                items:[{
                                        xtype: 'container',
                                        flex: 1,
                                        border:false,
                                        layout: 'anchor',
                                        defaultType: 'textfield',
                                        items: [
                                            {
                                                name: 'id_kategori',
                                                xtype:'combobox',
                                                fieldLabel: 'Kategori',
                                                valueField: 'id_kategori',
                                                displayField: 'nama_kategori',
                                                store:'KatItems',
                                                queryMode:'local',
                                                typeAhead:true                                                
                                            },{
                                                name: 'id_jenis_anyam',
                                                xtype:'combobox',
                                                fieldLabel: 'Jenis Anyam',
                                                valueField: 'id_jenis_anyam',
                                                displayField: 'nama_jenis_anyam',
                                                store:'JenisAnyams',
                                                queryMode:'local',
                                                typeAhead:true                                                
                                            }                                            
                                        ]
                                    },{
                                        xtype: 'container',                        
                                        flex: 1,
                                        layout: 'anchor',
                                        defaultType: 'textfield',
                                        items: [
                                            {
                                                name: 'nama_item',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Nama Item'                      
                                            },{
                                                name: 'dimensi',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Dimensi'                      
                                            },{
                                                name: 'seatwidth',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Seat width'                      
                                            }
                                        ]
                                    },{
                                        xtype: 'container',
                                        flex: 1,
                                        border:false,
                                        layout: 'anchor',
                                        defaultType: 'textfield',
                                        items: [
                                            {
                                                name: 'seatheight',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Seat height'                      
                                            },{
                                                name: 'seatdept',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Seatdept'                      
                                            },{
                                                name: 'armheight',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Arm height'                      
                                            }
                                        ]                                    
                                }]
                            }] //end
                        },{
                            title:'Tab 2',
                            items: [{
                                xtype: 'container',     
                                layout:'hbox',
                                items:[{
                                        xtype: 'container',
                                        flex: 1,
                                        border:false,
                                        layout: 'anchor',
                                        defaultType: 'textfield',
                                        items: [
                                            {
                                                name: 'kubikasi',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Kubikasi (m3)'                      
                                            },{
                                                name: 'stok',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Stok'                      
                                            },{
                                                name: 'harga_jasa_anyam',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Harga jasa anyam'                      
                                            }
                                        ]
                                    },{
                                        xtype: 'container',                        
                                        flex: 1,
                                        layout: 'anchor',
                                        defaultType: 'textfield',
                                        items: [
                                            {
                                                name: 'harga_jasa_rangka_bending',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Harga Jasa Bending'                      
                                            },{
                                                name: 'harga_jasa_rangka_las',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Harga jasa las'                      
                                            },{
                                                name: 'harga_jasa_cushion',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Harga jasa Cushion'                      
                                            }
                                        ]
                                    },{
                                        xtype: 'container',
                                        flex: 1,
                                        border:false,
                                        layout: 'anchor',
                                        defaultType: 'textfield',
                                        items: [
                                            {
                                                name: 'harga_jasa_packing',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Harga jasa Packing'                      
                                            },{
                                                name: 'harga_item',
                                                tooltip: 'Field tidak boleh kosong',
                                                fieldLabel: 'Harga Item'                      
                                            }
                                        ]                                    
                                }]                            
                            }] //end                        
                        }]
                    },{
                        xtype:'tabpanel', 
                        height:235,
                        plain:true,                                                                 
                        activeTab: 0,                         
                        defaults:{
                            bodyPadding: 10
                        },
                        items:[{
                            title:'Keb. Cushion',
                            items: [{

                            }]
                        },{
                            title:'Keb. Packing',
                            items: [{
                                
                            }]
                        },{
                            title:'Keb. Epoxy',
                            items: [{
                                
                            }]
                        },{
                            title:'Keb. Material',
                            items: [{
                                
                            }]
                        },{
                            title:'Keb. Accesories',
                            items: [{
                                
                            }]
                        },{
                            title:'Keb. Rangka',
                            items: [{
                                
                            }]
                        },{
                            title:'Gambar',
                            items: [{
                                
                            }]
                        }]
                    }                                    
                ]                            
        ,
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