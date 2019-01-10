import { RODQuery } from "./rod_schema";






let query_3: RODQuery = {
    version: "1",
    fields: [
        {
            identifier:{
                column: {
                    pool: "pool",
                    dataset: "dataset",
                    field_specifier: ["column"]
                }
            },
            alias: null
        },
        {
            identifier:{
                func:{
                    name: "max",
                    args: [{
                        column: {
                            pool: "pool",
                            dataset: "dataset",
                            field_specifier: ["column"]
                        }
                    }],
                }
            },
            alias: null
        }
    ],

    predicate:{
        func:{
            name: "max", 
            args: [{
                literal: 4
            }]
        } 
    },
    
    sort_descriptors:[
        {
            column: {
                pool: "pool",
                dataset: "dataset",
                field_specifier: ["column"]
            },
            order: "asc"
        }
    ],
    
    group_by:[
        {
            column: {
                pool: "pool",
                dataset: "dataset",
                field_specifier: ["column"]
            }
        }
    ]

}

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
            alias: null
        }
    ],
    predicate: {
        func:{
            name: "and",
            args: [
                {
                    func: {
                        name: "gt",
                        args: [
                            {literal: 43},
                            {literal: 43}
                        ]
                    }
                },
                {
                    func: {
                        name: "eq",
                        args: [
                            { column: { pool: "pool", dataset: "dataset", field_specifier: ["column"] }},
                            { literal: 10 }
                        ]
                    }
                }
            ]

        }

    },
    sort_descriptors: [
        {
            column: {
                pool: "pool",
                dataset: "dataset",
                field_specifier: ["column"]
            },
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
            alias: null
        }
    ],
    predicate: null,
    sort_descriptors: [
        {
            column: {
                pool: "pool",
                dataset: "dataset",
                field_specifier: ["column"]

            },
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
            alias: null
        }
    ],
    predicate: {
        func:{
            name: "eq",
            args: [
                    {literal: 40},
                    {literal: 40}
            ]

        }

    },
    sort_descriptors: [
        {
            column: {
                pool: "pool",
                dataset: "dataset",
                field_specifier: ["column"]
            },
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
