'EXC'

'4.  Any non - cancer systemic therapy associated with molecularly targeted immune modulation , e . g . , monoclonal antibodies .'

'4.  Any neg() - cond("cancer") proc("systemic therapy") associated with mod("molecularly targeted") proc("immune modulation") , e . g . , proc("monoclonal antibodies") .'

intersect(
    proc("systemic therapy")
        .for(
            neg(
                cond("cancer"),
            )
        ),
    proc("immune modulation")
        .mod("molecularly targeted")
        .equiv(
            proc("monoclonal antibodies")
        )
)

