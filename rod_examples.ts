import { RODQuery } from "./rod_schema";

let query: RODQuery = {
    version: "1",
    fields: [
        {
            identifier: {
                column: {
                    pool: "pool",
                    dataset: "dataset",
                    field_specifier: ["column"]
                }
            },
            aggregate_function: null,
            alias: null
        }
    ],
    predicate: {
        logical_connetive_operator: "and",
        lhs: {
            comparison_operator: "gt",
            lhs: { literal:  "43"  },
            rhs: { literal:  "43" },
        },
        rhs: {
            comparison_operator: "eq",
            lhs: { column: { pool: "pool", dataset: "dataset", field_specifier: ["column"] }},
            rhs: { literal: 10 },
        }
    },
    sort_descriptors: [
        {
           identifier: {
                column: {
                    pool: "pool",
                    dataset: "dataset",
                    field_specifier: ["column"]
                }
            },
            aggregate_function: null,
            order: "asc",
        }
    ],
    group_by: [
        {
            column: {
                pool: "pool",
                dataset: "dataset",
                field_specifier: ["column"]
            }
        }
    ]
}

let query_with_no_predicate: RODQuery = {
    version: "1",
    fields: [
        {
            identifier: {
                column: {
                    pool: "pool",
                    dataset: "dataset",
                    field_specifier: ["column"]
                }
            },
            aggregate_function: null,
            alias: null
        }
    ],
    predicate: null,
    sort_descriptors: [
        {
            identifier: {
                column: {
                    pool: "pool",
                    dataset: "dataset",
                    field_specifier: ["column"]

                }
            },
            aggregate_function: null,
            order: "desc"
        }
    ],
    group_by: [
        {
            column: {
                pool: "pool",
                dataset: "dataset",
                field_specifier: ["column"]
            }
        }
    ]
}

let query_with_predicate: RODQuery = {
    version: "1",
    fields: [
        {
            identifier: {
                column: {
                    pool: "pool",
                    dataset: "dataset",
                    field_specifier: ["column"]
                }
            },
            aggregate_function: null,
            alias: null
        }
    ],
    predicate: {
        comparison_operator: "eq",
        lhs: {
            literal: 40,
        },
        rhs: {
            literal: 40,
        },
    },
    sort_descriptors: [
        {
            identifier: {
                column: {
                    pool: "pool",
                    dataset: "dataset",
                    field_specifier: ["column"]
                },
            },
            aggregate_function: null,
            order: "desc"
        }
    ],
    group_by: [
        {
            column: {
                pool: "pool",
                dataset: "dataset",
                field_specifier: ["column"]
            }
        },
    ]
}
