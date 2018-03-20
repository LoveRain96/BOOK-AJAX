
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('publishers').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('publishers').insert([
                {id: 1, name: 'Shueisha', address: 'Japan', phone:'0189'},
                {id: 2, name: 'Japan', address: 'Japan', phone:'0189'},
                {id: 3, name: 'VN', address: 'VietNam', phone:'0189'},
                {id: 4, name: 'ThaiLand', address: 'Thai Lan', phone:'0189'},
                {id: 5, name: 'Dubai', address: 'Dubai', phone:'0189'}
            ]);
        });
};
