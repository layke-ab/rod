// Defines the ROD query languge
// (ROD Obscure Data language)

type Column = {
    column: {  // Pool name
        pool: string;
        // Dataset name in pool
        dataset: string;
        // Column name, dot separated for nested values
        field_specifier: string[];
    }
}

type DateString = string

type Literal = {
    literal: string | number | DateString | null,
}

// Aggregate functions supported for numeric or date types
type AggregateFunction = "avg" | "sum" | "max" | "count"

// Represents a selectable field
export type Field = {
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

type ComparisonExpression = {
    comparison_operator: "lt" | "gt" | "lte" | "gte" | "eq" | "neq"
    lhs: Atom
    rhs: Atom
}

type LogicalConnectiveExpression = {
    logical_connective_operator: "and" | "or"
    lhs: ComparisonExpression | LogicalConnectiveExpression
    rhs: ComparisonExpression | LogicalConnectiveExpression
}

// Sort descroptors is used to sort results
type SortDescriptor = {
    identifier: Atom
    aggregate_function: AggregateFunction | null
    order: "asc" | "desc"
}

export type RODQuery = {
    version: QueryDocumentVersion
    fields: Field[]
    predicate: LogicalConnectiveExpression | ComparisonExpression | null
    sort_descriptors: SortDescriptor[]
    group_by: Column[]
}
