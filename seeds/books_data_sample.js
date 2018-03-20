
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('books').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('books').insert([
                {title: 'One-Punch-Man ', author: 'One', publisher_id: 1, price: 12000},
                {title: 'Buttobi Itto', author: 'Motoki Monma', publisher_id: 2, price: 12000},
                {title: 'InuYasha', author: 'Takahashi Rumiko', publisher_id: 1, price: 12000},
                {title: 'Higanjima', author: 'Kodansha', publisher_id: 2, price: 12000},
                {title: 'Whistle', author: 'Daisuke Higuchi', publisher_id: 1, price: 12000}
            ]);
        });
};
