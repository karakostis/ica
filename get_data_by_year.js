function get_data_by_year(selected_year, country_iso3) {

    $.ajax({
        url:  "https://geonode.wfp.org/api/layers/?keywords__slug__in=ica_" + selected_year + "&limit=30&offset=0&regions__code__in=" + country_iso3,
        type: "GET",
        dataType: 'jsonp',
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            if(typeof(Storage)!=="undefined") {
                sessionStorage['response_layer'] = JSON.stringify(response);;
            }
        },
        error: function (xhr, status) {
            // handle errors
        }
    });

    $.ajax({
        url:  "https://geonode.wfp.org/trainings/api/v2.4/staticmaps/?keywords__slug__in=ica_" + selected_year + "&limit=30&offset=0&regions__code__in=" + country_iso3,
        type: "GET",
        dataType: 'jsonp',
        // This is the important part
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            if(typeof(Storage)!=="undefined") {
                sessionStorage['response_static'] = JSON.stringify(response);;
                //sessionStorage.response_static= JSON.stringify(response);
            }
        },
        error: function (xhr, status) {
            // handle errors
        }
    });

    $.ajax({
        url:  "https://geonode.wfp.org/api/documents/?keywords__slug__in=ica_" + selected_year + "&limit=30&offset=0&regions__code__in=" + country_iso3,
        type: "GET",
        dataType: 'jsonp',
        // This is the important part
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            if(typeof(Storage)!=="undefined") {
                sessionStorage['response_document'] = JSON.stringify(response);;
                //sessionStorage.response_document= JSON.stringify(response);
            }
        },
        error: function (xhr, status) {
            // handle errors
        }
    });

    $.ajax({
        url:  "https://geonode.wfp.org/api/maps/?keywords__slug__in=ica_" + selected_year + "&limit=10&offset=0&regions__code__in=" + country_iso3,
        type: "GET",
        dataType: 'jsonp',
        // This is the important part
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            if(typeof(Storage)!=="undefined") {
                sessionStorage['response_map'] = JSON.stringify(response);
                //sessionStorage.response_document= JSON.stringify(response);
            }
        },
        error: function (xhr, status) {
            // handle errors
        }
    });
}
