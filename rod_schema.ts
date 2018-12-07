// Defines the ROD query languge
// (ROD Obscure Data language)

interface Column {
    column: {  // Pool name
        pool: string;
        // Dataset name in pool
        dataset: string;
        // Column name, dot separated for nested values
        field_specifier: string[];
    }
}

interface Literal {
    literal: string | number | Date | null,
}

// Aggregate functions supported for numeric or date types
type AggregateFunction = "avg" | "sum" | "max" | "count"

// Represents a selectable field
export interface Field {
    identifier: Atom
    // Optional aggregate function
    aggregate_function: AggregateFunction | null
    alias: string | null
}

// Query document version, used for backwards compatibility
type QueryDocumentVersion = "1"

// Supported literal
// e.g. `1`, `"string"`
type Atom =
    | Column
    | Literal

interface ComparisonExpression {
    comparison_operator: "lt" | "gt" | "lte" | "gte" | "eq" | "neq"
    lhs: Atom
    rhs: Atom
}

interface PredicateExpression {
    predicate_operator: "and" | "or"
    lhs: ComparisonExpression | PredicateExpression
    rhs: ComparisonExpression | PredicateExpression
}

// Sort descroptors used to sort results
interface SortDescriptor {
    column: Column
    order: "asc" | "desc"
}

export type RODQuery = {
    version: QueryDocumentVersion
    fields: Field[]
    predicate: PredicateExpression | ComparisonExpression | null
    sort_descriptors: SortDescriptor[]
    group_by: Column[]
} 

type PredicateExpressionFunction = (lhs: PredicateExpression["lhs"], rhs: PredicateExpression["rhs"]) => (PredicateExpression)
const and: PredicateExpressionFunction = (lhs, rhs) => ({ predicate_operator: "and", lhs, rhs })
const or: PredicateExpressionFunction = (lhs, rhs) => ({ predicate_operator: "or", lhs, rhs })

type ComparsionExpressionFunction = (lhs: ComparisonExpression["lhs"], rhs: ComparisonExpression["rhs"]) => (ComparisonExpression)
const lt: ComparsionExpressionFunction = (lhs, rhs) => ({ comparison_operator: "lt", lhs, rhs })
const lte: ComparsionExpressionFunction = (lhs, rhs) => ({ comparison_operator: "lte", lhs, rhs })
const gt: ComparsionExpressionFunction = (lhs, rhs) => ({ comparison_operator: "gt", lhs, rhs })
const gte: ComparsionExpressionFunction = (lhs, rhs) => ({ comparison_operator: "gte", lhs, rhs })
const eq: ComparsionExpressionFunction = (lhs, rhs) => ({ comparison_operator: "eq", lhs, rhs })
const literal: ((value: string | number | Date | null) => Atom) = (value) => ({ literal: value })

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
        predicate_operator: "and",
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
           column: {
                column: {
                    pool: "pool",
                    dataset: "dataset",
                    field_specifier: ["column"]
                }
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
           column: {
                column: {
                    pool: "pool",
                    dataset: "dataset",
                    field_specifier: ["column"]

                }
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
            aggregate_function: null,
            alias: null
        }
    ],
    predicate: eq(literal(40), literal(40)),
    sort_descriptors: [
        {
            column: {
                column: {
                    pool: "pool",
                    dataset: "dataset",
                    field_specifier: ["column"]
                },
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

let query2: RODQuery = {
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
    predicate: and(
        gt(
            literal("43"),
            literal("50")
        ),
        eq(
            { column: { pool: "pool", dataset: "dataset", field_specifier: ["column"] }},
            literal(10))
        ),
    sort_descriptors: [
        {
            column: {
                column: {
                    pool: "pool",
                    dataset: "dataset",
                    field_specifier: ["column"]
                },
            },
            order: "asc"
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
