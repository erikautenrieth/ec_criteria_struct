'INC'

'3.  histologically confirmed triple negative breast cancer ( ER ( Estrogen Receptors ) < 1 % , PgR ( Progesterone Receptors ) < 1 % , HER 2 / neu negative ( IHC 0 , 1 + or 2 + FISH negative ) .'

'3.  proc("histologically") confirmed mod("triple") pol(NEGATIVE) cond("breast cancer") ( obs("ER") ( lab("Estrogen Receptors") ) eq(op(LT), val("1"), unit("%")) , obs("PgR") ( lab("Progesterone Receptors") ) eq(op(LT), val("1"), unit("%")) , cond("HER 2") / cond("neu") pol(NEGATIVE) ( obs("IHC") eq(val("0"), val("1"), val("2")) cond("FISH") pol(NEGATIVE) ) .'

intersect(
    cond("breast cancer")
        .found_by(
            proc("histologically")
        )
        .mod("triple")
        .pol(NEGATIVE),
    lab("Estrogen Receptors")
        .equiv(
            obs("ER")
        )
        .num_filter(
            eq(op(LT), val("1"), unit("%"))
        ), 
    lab("Progesterone Receptors")
        .equiv(
            obs("PgR")
        )
        .num_filter(
            eq(op(LT), val("1"), unit("%"))
        ), 
    union(
        cond("HER 2"),
        cond("neu")
    )
        .pol(NEGATIVE)
        .equiv(
            obs("IHC")
                .num_filter(
                    eq(val("0"), val("1"), val("2"))
                ),
            cond("FISH")
                .pol(NEGATIVE)
        )
)