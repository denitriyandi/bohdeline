Ext.define('CrudExt.store.SuratPengambilanBahans',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'SuratPengambilanBahans',
	pageSize	: 20,
	model		: 'CrudExt.model.SuratPengambilanBahans',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/surat_pengambilan_bahan/id_pengambilan',
		    read    : base_url + 'welcome/getAll/surat_pengambilan_bahan',
		    update  : base_url + 'welcome/saveAll/surat_pengambilan_bahan/id_pengambilan',
		    destroy : base_url + 'welcome/deleteAll/surat_pengambilan_bahan/id_pengambilan'
		},
		actionMethods: {
            create  : 'POST',
		    read    : 'POST',
		    update  : 'POST',
		    destroy : 'POST'
		},
		reader: {
                    type            : 'json',
                    root            : 'data',
                    rootProperty    : 'data',
                    successProperty : 'success',
                    messageProperty : 'message'
		},
		writer: {
                    type            : 'json',
                    writeAllFields  : true,
                    root            : 'data',
                    encode          : true
		},
        listeners: {
            
        }
	}  
});