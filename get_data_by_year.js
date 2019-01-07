function get_data_by_year(selected_year, country_iso3, access_from_indx, country_url) {

    $.when(
        $.ajax({
            url:  "https://geonode.wfp.org/api/layers/?keywords__slug__in=ica_" + selected_year + "&limit=30&offset=0&regions__code__in=" + country_iso3,
            type: "GET",
            dataType: 'jsonp',
            xhrFields: {
                withCredentials: true
            },
            success: function (re_layers) {
                if(typeof(Storage)!=="undefined") {
                    sessionStorage['response_layer'] = JSON.stringify(re_layers);;
                }
            },

        }),

        $.ajax({
            url:  "https://geonode.wfp.org/trainings/api/v2.4/staticmaps/?keywords__slug__in=ica_" + selected_year + "&limit=30&offset=0&regions__code__in=" + country_iso3,
            type: "GET",
            dataType: 'jsonp',
            // This is the important part
            xhrFields: {
                withCredentials: true
            },
            success: function (re_static) {
                if(typeof(Storage)!=="undefined") {
                    sessionStorage['response_static'] = JSON.stringify(re_static);;
                    //sessionStorage.response_static= JSON.stringify(response);
                }
            },

        }),

        $.ajax({
            url:  "https://geonode.wfp.org/api/documents/?keywords__slug__in=ica_" + selected_year + "&limit=30&offset=0&regions__code__in=" + country_iso3,
            type: "GET",
            dataType: 'jsonp',
            // This is the important part
            xhrFields: {
                withCredentials: true
            },
            success: function (re_document) {
                if(typeof(Storage)!=="undefined") {
                    sessionStorage['response_document'] = JSON.stringify(re_document);;
                    //sessionStorage.response_document= JSON.stringify(response);
                }
            },

        }),

        $.ajax({
            url:  "https://geonode.wfp.org/api/maps/?keywords__slug__in=ica_" + selected_year + "&limit=10&offset=0&regions__code__in=" + country_iso3,
            type: "GET",
            dataType: 'jsonp',
            // This is the important part
            xhrFields: {
                withCredentials: true
            },
            success: function (re_map) {
                if(typeof(Storage)!=="undefined") {
                    sessionStorage['response_map'] = JSON.stringify(re_map);
                    //sessionStorage.response_document= JSON.stringify(response);
                }
            },

        })
    ).then(function() {
        setTimeout(function(){
            waitingDialog.hide();
        }, 2000);
        if (access_from_indx===true) {
            window.open(href=country_url);
        }
    });
}
