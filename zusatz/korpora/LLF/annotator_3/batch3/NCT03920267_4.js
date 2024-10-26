'INC'

'-  Women of childbearing potential ( WOCBP ) must have a negative urine pregnancy test and must agree to use correctly a highly effective method ( s ) of contraception for the duration of treatment with study drug'

'-  female() of cond("childbearing potential") ( cond("WOCBP") ) must have a pol(NEGATIVE) lab("urine pregnancy test") and must agree to use correctly a highly effective method ( s ) of contraception for the duration of treatment with study drug'

if_then(
    intersect(
        female(),
        cond("childbearing potential")
    )
        .equiv(
            cond("WOCBP")
        ),
    lab("urine pregnancy test")
        .pol(NEGATIVE)
)
