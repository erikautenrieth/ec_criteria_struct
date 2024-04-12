'EXC'

'-  Women with immunosuppressive disorders or with HIV'

'-  female() with cond("immunosuppressive disorders") or with cond("HIV")'

intersect(
    female(), 
    union(
        cond("immunosuppressive disorders"),
        cond("HIV")
    )
)