'INC'

'-  Patient over the age of 18 , patient with an anus fistula with indication for surgical treatment'

'-  Patient eq(val("18")) , patient with an mod("anus") cond("fistula") with indication() for proc("surgical treatment")'

intersect(
    age()
        .num_filter(
            eq(op(GT), val("18"))
        ), 
    cond("fistula"), 
    indication(
        proc("surgical treatment")
    )
)