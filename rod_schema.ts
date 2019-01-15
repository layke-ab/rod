// Defines the ROD query languge
// (ROD Obscure Data language)

export type Column = {
    column: {  // Pool name
        pool: string;
        // Dataset name in pool
        dataset: string;
        // Column name, several items for nested  values 
        // i.e ["name","firstname"] -> name.firstname
        field_specifier: string[];
    }
}

export type DateString = string

export type Literal = {
    literal: string | number | DateString | null,
}

// Query document version, used for backwards compatibility
type QueryDocumentVersion = "2"

// Supported literal
// e.g. `1`, `"string"`
export type Atom =
    | Column
    | Literal

type AggregateFunctionName = "avg" | "sum" | "max" | "min" | "count"
type NonAggregateFunctionName = "and" | "or" | "lt" | "gt" | "lte" | "gte" | "eq" | "neq"
type ArithmeticFunctionName = "add" | "subtract" | "multiply" | "divide" | "sin" | "cos" 

type Function = {
    func: {
        name: AggregateFunctionName | NonAggregateFunctionName | ArithmeticFunctionName,
        args: FunctionArg[]
    }
}


type Expression = Function | Atom

type FunctionArg = Expression 

// Represents a selectable field
export type Field = {
    identifier: Expression,
    alias: string | null
} 

// Sort descroptors is used to sort results
export type SortDescriptor = {
    order: "asc" | "desc"
} & Column

export type RODQuery = {
    version: QueryDocumentVersion
    fields: Field[]
    predicate: Expression |  null
    sort_descriptors: SortDescriptor[]
    group_by: Column[]
}