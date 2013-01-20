Ext.define('CrudExt.controller.JenisBahanMentahCushions',{
	extend: 'Ext.app.Controller',
	views: ['jenisBahanMentahCushion.Grid', 'jenisBahanMentahCushion.Form', 'jenisBahanMentahCushion.Window'],
	models: ['JenisBahanMentahCushions'],
	stores: ['JenisBahanMentahCushions'],

	refs: [{
            ref: 'list',
            selector: 'jenisBahanMentahCushionGrid'
        }],

	init: function(){
		this.control({
            'jenisBahanMentahCushionGrid button[action=edit]': {
                click: this.edit
            },
            'jenisBahanMentahCushionGrid': {
                itemdblclick: this.edit
            },
            'jenisBahanMentahCushionGrid button[action=add]': {
                click: this.add
            },
            'jenisBahanMentahCushionGrid button[action=delete]': {
                click: this.destroy
            },
            'jenisBahanMentahCushionForm button[action=save]': {
                click: this.save
            },
            'jenisBahanMentahCushionGrid #jenisBahanMentahCushionGridTrigger':{
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
            var view = Ext.widget('jenisBahanMentahCushionEdit');
            view.setTitle('Tambah Jenis Bahan Mentah Cushion');
	},
	edit: function(btn){
            var grid = this.getList();
            var records = grid.getSelectionModel().getSelection();

            if(records.length === 1){
                var record = records[0];
                var view = Ext.widget('jenisBahanMentahCushionEdit');
                var form = view.down('jenisBahanMentahCushionForm').getForm();

                form.loadRecord(record);
                view.setTitle('Edit Jenis Bahan Mentah Cushion');

            }else{
                Ext.Msg.alert('Error', 'Tidak ada data yang dipilih');
            }	
	},
	save: function(btn){
            var form = btn.up('jenisBahanMentahCushionForm');
            var win = form.up('window');
            var basicForm = form.getForm();
            var grid = this.getList();
            var store = grid.getStore();
            var record = basicForm.getRecord();
            var values = basicForm.getValues();


            if(basicForm.isValid()){
                if(!record){
                    record = Ext.create('CrudExt.model.JenisBahanMentahCushions');
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