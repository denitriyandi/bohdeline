Ext.define('CrudExt.store.RekapitulasiAnggarans',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'RekapitulasiAnggarans',
	pageSize	: 20,
	model		: 'CrudExt.model.RekapitulasiAnggarans',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/rekapitulasi_anggaran/id_rekap',
		    read    : base_url + 'welcome/getAll/rekapitulasi_anggaran',
		    update  : base_url + 'welcome/saveAll/rekapitulasi_anggaran/id_rekap',
		    destroy : base_url + 'welcome/deleteAll/rekapitulasi_anggaran/id_rekap'
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