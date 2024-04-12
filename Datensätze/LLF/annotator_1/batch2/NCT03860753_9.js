'EXC'

'-  greater than mild substance use disorder on drugs other than alcohol , nicotine , and marijuana'

'-  eq(op(GT), severity(MILD)) cond("substance use disorder") on drug() except() drug("alcohol") , drug("nicotine") , and drug("marijuana")'

intersect(
    cond("substance use disorder")
        .severity(
            eq(op(GT), val(MILD))
        ),
    drug()
        .except(
            drug("alcohol"), 
            drug("nicotine"), 
            drug("marijuana")
        )
)    