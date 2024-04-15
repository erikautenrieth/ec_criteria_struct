'EXC'

'-  Patients for whom a fluids overload seems obvious to the intensivist and for whom a crystalloids filling would be contraindicated ,'

'-  Patients for whom a cond("fluids overload") seems obvious to the intensivist and for whom a proc("crystalloids filling") would be contraindication() ,'

intersect(
    cond("fluids overload"),
    contraindication(
        proc("crystalloids filling")
    )
)