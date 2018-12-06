Rod (Ron Obscure Datalanguage, where Ron stands for Rod Overwhelmingly Necessary) is a JSON-based query language. Layke-API transforms queries written in Rod into Athena SQL, which is then run in Athena.

### Design goals of the Rod language

    1. Extendability: We should be able to come closer to full Athena SQL
        compatibility.
    2. Ease of extendability: it should be easy for us to extend ROD towards our
        extendability goal.
    3. The structure of Rod should match somewhat with the visual structure
        used in the front end, to simplify FE integration.
    ...
    10. It should be easy to write Rod by hand.
        Not a non-goal, but it has a low priority.


### Specification

See [rod\_schema.ts](rod_schema.ts)
