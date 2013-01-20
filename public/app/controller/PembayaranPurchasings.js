Ext.define('CrudExt.controller.PembayaranPurchasings',{
	extend: 'Ext.app.Controller',
	views: ['pembayaranPurchasing.Grid', 'pembayaranPurchasing.Form', 'pembayaranPurchasing.Window'],
	models: ['PembayaranPurchasings'],
	stores: ['PembayaranPurchasings'],

	refs: [{
            ref: 'list',
            selector: 'pembayaranPurchasingGrid'
        }],

	init: function(){
		this.control({
            'pembayaranPurchasingGrid button[action=edit]': {
                click: this.edit
            },
            'pembayaranPurchasingGrid': {
                itemdblclick: this.edit
            },
            'pembayaranPurchasingGrid button[action=add]': {
                click: this.add
            },
            'pembayaranPurchasingGrid button[action=delete]': {
                click: this.destroy
            },
            'pembayaranPurchasingForm button[action=save]': {
                click: this.save
            },
           
            'pembayaranPurchasingGrid #pembayaranPurchasingGridTrigger' : {
                keyup : this.onTriggerKeyUp,
                triggerClear : this.onTriggerClear
                }
            
        });
	},
    onTriggerKeyUp : function(t) {
        console.log('You typed something!');        
        var thisRegEx = new RegExp(t.getValue(), "i");
        var grid = this.getList();
        var store = grid.getStore();
        store.filterBy(function(rec) {
            for (var i = 0; i < grid.columns.length; i++) {
            // Do not search the fields that are passed in as omit columns
            if (grid.omitColumns) {
                if (grid.omitColumns.indexOf(grid.columns[i].dataIndex) === -1) {
                    if (thisRegEx.test(rec.get(grid.columns[i].dataIndex))) {
                        if (!grid.filterHidden && grid.columns[i].isHidden()) {
                            continue;
                        } else {
                            return true;
                    };
                };
            };
            } else {
                if (thisRegEx.test(rec.get(grid.columns[i].dataIndex))) {
                    if (!grid.filterHidden && grid.columns[i].isHidden()) {
                        continue;
                    } else {
                        return true;
                   };
                };
            };
            }
            return false;
        });
    },
    onTriggerClear : function() {
        console.log('Trigger got reset!');
        var store = grid.getStore();
        store.clearFilter();
    },
	add: function(){
            var view = Ext.widget('pembayaranPurchasingEdit');
            view.setTitle('Tambah Busa');
	},
	edit: function(btn){
            var grid = this.getList();
            var records = grid.getSelectionModel().getSelection();

            if(records.length === 1){
                var record = records[0];
                var view = Ext.widget('pembayaranPurchasingEdit');
                var form = view.down('pembayaranPurchasingForm').getForm();

                form.loadRecord(record);
                view.setTitle('Edit Busa');

            }else{
                Ext.Msg.alert('Error', 'Tidak ada data yang dipilih');
            }	
	},
	save: function(btn){
            var form = btn.up('pembayaranPurchasingForm');
            var win = form.up('window');
            var basicForm = form.getForm();
            var grid = this.getList();
            var store = grid.getStore();
            var record = basicForm.getRecord();
            var values = basicForm.getValues();


            if(basicForm.isValid()){
                if(!record){
                    record = Ext.create('CrudExt.model.PembayaranPurchasings');
                    record.set(values);
                    store.add(record);
                }else{
                    record.set(values);
                }

                store.sync();
                win.close();
                Ext.Msg.alert('Konfirmasi', 'Data berhasil disimpan');
            }else{
                Ext.Msg.alert('Error', 'Data tidak valid');
            }		
	},
	destroy: function(){
            var grid = this.getList();
            var store = grid.getStore();
            var records = grid.getSelectionModel().getSelection();

            if(records.length === 0){
                Ext.Msg.alert('Error', 'Tidak ada yang dipilih');
            }else{
                Ext.Msg.show({
                    title : 'Konfirmasi',
                    msg : 'Anda yakin akan menghapus data yang terseleksi?',
                    buttons : Ext.Msg.YESNO,
                    icon : Ext.MessageBox.WARNING,
                    scope : this,
                    width : 450,
                    fn : function(btn, ev){
                        if (btn == 'yes') {
                            store.remove(records);
                            store.sync();
                        }
                    }
                });
            }
	}
});