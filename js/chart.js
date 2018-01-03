var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: array3,
    },
    point: {
        show: false
    }
});