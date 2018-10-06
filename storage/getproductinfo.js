function getproductinfo(id, dataType) {
    $.getJSON('/storage/inventory2.json', function(data) {
        var text = _.get(data, id+dataType);
        return text;
    });
}