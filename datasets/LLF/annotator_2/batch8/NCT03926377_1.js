'INC'

'-  patients presenting a multi - bullous pemphigoid newly diagnosed or relapsed more than 3 months after stopping corticosteroids and treated according to the national protocol for diagnosis and care issued by the reference center for autoimmune bullous diseases of April 2016'

'-  patients presenting a mod("multi - bullous") cond("pemphigoid") newly diagnosed or relapsed eq(op(GT), val("3"), temporal_unit(MONTH)) after stopping drug("corticosteroids") and proc() according to the national protocol for diagnosis and care issued by the reference center for autoimmune bullous diseases of April 2016'

seq(
    cond("pemphigoid")
        .mod("multi - bullous"),
    after(
        intersect(
            drug("corticosteroids"),
            proc()
        )
            .temporality(
                eq(op(GT), val("3"), temporal_unit(MONTH))
            )
    )
)