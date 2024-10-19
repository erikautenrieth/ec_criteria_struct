'INC'

'-  No diagnosis of malignancy ( except non - melanoma skin cancer )'

'-  neg() diagnosis of cond("malignancy") ( except() neg() - mod("melanoma") cond("skin cancer") )'

neg(
    cond("malignancy")
        .except(
            cond("skin cancer")
                .mod(
                    neg("melanoma")
                )
        )
)