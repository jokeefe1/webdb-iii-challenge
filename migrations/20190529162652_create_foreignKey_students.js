exports.up = function(knex, Promise) {
    return knex.schema.table('students', tbl => {
        tbl.foreign('cohort_id').references('cohort.id_in_cohorts');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('students', tbl => {
        tbl.dropForeign(columns, [cohort_id])
    })
};
