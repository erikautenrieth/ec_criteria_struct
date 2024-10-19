'INC'

'-  Agree to use routine adequate and effective contraceptive measures during the entire study period and within 6 weeks after the last dose pre - menopausal fertility possible ; Female patients need to exclude pregnancy ( ie negative pregnancy test ) and in non - lactation period .'

'-  Agree to use routine adequate and effective contraceptive measures during the entire study period and within 6 weeks after the last dose pre - menopausal fertility possible ; female() patients need to neg() cond("pregnancy") ( ie pol(NEGATIVE) lab("pregnancy test") ) and in neg() - cond("lactation") period .'

intersect(
    female(),
    neg(
        cond("pregnancy")
    )
        .equiv(
            lab("pregnancy test")
                .pol(NEGATIVE)
        ),
    neg(
        cond("lactation")
    )
)