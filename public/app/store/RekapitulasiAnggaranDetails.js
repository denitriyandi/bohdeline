Ext.define('CrudExt.store.RekapitulasiAnggaranDetails',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'RekapitulasiAnggaranDetails',
	pageSize	: 20,
	model		: 'CrudExt.model.RekapitulasiAnggaranDetails',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/rekapitulasi_anggaran_detail/id_rekap',
		    read    : base_url + 'welcome/getAll/rekapitulasi_anggaran_detail',
		    update  : base_url + 'welcome/saveAll/rekapitulasi_anggaran_detail/id_rekap',
		    destroy : base_url + 'welcome/deleteAll/rekapitulasi_anggaran_detail/id_rekap'
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