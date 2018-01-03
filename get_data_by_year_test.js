function get_data_by_year(selected_year, country_iso3, iterative) {

    var number_of_years = 4;

    if (iterative == true){
        for (i = selected_year; i >= (selected_year - number_of_years); i--){
            console.log(i)
            var exist_data = [];
            $.ajax({
                url:  "https://geonode.wfp.org/api/layers/?keywords__slug__in=ica_" + selected_year + "&limit=30&offset=0&regions__code__in=" + country_iso3,
                type: "POST",
                dataType: 'jsonp',
                xhrFields: {
                    withCredentials: true
                },
                success: function (response) {
                    if(typeof(Storage)!=="undefined") {
                        console.log(response)
                        sessionStorage['response_layer'] = JSON.stringify(response);
                    }
                },
                error: function (xhr, status) {
                    // handle errors
                }
            });

            $.ajax({
                url:  "https://geonode.wfp.org/trainings/api/v2.4/staticmaps/?keywords__slug__in=ica_" + selected_year + "&limit=30&offset=0&regions__code__in=" + country_iso3,
                type: "POST",
                dataType: 'jsonp',
                // This is the important part
                xhrFields: {
                    withCredentials: true
                },
                success: function (response) {
                    if(typeof(Storage)!=="undefined") {
                        sessionStorage['response_static'] = JSON.stringify(response);
                        //sessionStorage.response_static= JSON.stringify(response);
                    }
                },
                error: function (xhr, status) {
                    // handle errors
                }
            });

            $.ajax({
                url:  "https://geonode.wfp.org/api/documents/?keywords__slug__in=ica_" + selected_year + "&limit=30&offset=0&regions__code__in=" + country_iso3,
                type: "POST",
                dataType: 'jsonp',
                // This is the important part
                xhrFields: {
                    withCredentials: true
                },
                success: function (response) {
                    if(typeof(Storage)!=="undefined") {
                        sessionStorage['response_document'] = JSON.stringify(response);
                        //sessionStorage.response_document= JSON.stringify(response);
                    }
                },
                error: function (xhr, status) {
                    // handle errors
                }
            });
        }
    }
}
