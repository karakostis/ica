function get_ica_info(url) {
    $.ajax({
        url: url,
        type: "GET",
        // This is the important part
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {

            // SEARCH Functionality
            // data used for the search functionality
            countries_list = [];
            for (var property in response["features"]) {
                country_elements = {
                  id: response["features"][property]["properties"]['id'],
                  text: response["features"][property]["properties"]['adm0_name']
                }
                countries_list.push(country_elements);
            }

            $(".js-example-basic-single").select2({
                data: _.sortBy( countries_list, 'text' ),
                placeholder: "Select ICA Country",
                allowClear: true,
                width: '30%',
            });

            // get the total number of countries
            total_countries = response["totalFeatures"];
            $( "#counter_search" ).append('<button class="btn btn-primary btn-sm" id="total_countries" style="margin-top:0.5px; float:left;">' + total_countries + ' countries with ICA implementations <span class="caret"></span></button>');

        },
    })
}
