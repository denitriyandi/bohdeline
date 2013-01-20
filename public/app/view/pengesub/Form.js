Ext.define('CrudExt.view.pengesub.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.pengesubForm',
	requires        : [
                            'Ext.form.Field'
                        ],
	defaultType     : 'textfield',
	defaults        : {
                            allowBlank: false,
                            labelAlign: 'left',
                            labelWidth: 150
                        },
	buttonAlign     : 'center',
	padding         : 5,
	style           : 'background-color: #fff;',
	border          : false,
	initComponent   : function(){
		this.items = [                    
                    {
                        name: 'nama_pengesub',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Nama Pengesub'                      
                    },{                        
                        name: 'id_jenis_sub',
                        xtype:'combobox',
                        fieldLabel: 'Kategori Pengesub',
                        valueField: 'id_jenis_sub',
                        displayField: 'nama_jenis_sub',
                        store:'JenisPengesubs',
                        queryMode:'local',
                        typeAhead:true            
                    },{
                        name: 'alamat',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Alamat'                      
                    },{
                        name: 'telp',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Telepon'                      
                    },{
                        name: 'jumlah_pekerja',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Jumlah Pekerja'                      
                    },{
                        name: 'keterangan',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Keterangan'                      
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