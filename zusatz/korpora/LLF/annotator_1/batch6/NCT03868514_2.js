'INC'

'Indications of breast reconstruction : histologically confirmed breast cancer , precancerous lesions ( DCIS , LCIS ) , mutation carrier with increased breast cancer risk , strong family history ( lifetime risk > 15 % )'

'indication() of proc("breast reconstruction") : proc("histologically") confirmed cond("breast cancer") , obs("precancerous lesions") ( cond("DCIS") , cond("LCIS") ) , cond("mutation carrier") with pol(HIGH) cond("breast cancer") risk() , pol(HIGH) family_member() ( obs("lifetime risk") eq(op(GT), val("15"), unit("%")) )'

indication(
    proc("breast reconstruction")
)
.equiv(
    cond("breast cancer")
        .found_by(
            proc("histologically")
        ),
    obs("precancerous lesions")
        .equiv(
            cond("DCIS"),
            cond("LCIS")
        ),
    intersect(
        cond("mutation carrier"),
        risk(
            cond("breast cancer")
        )
            .pol(HIGH)
    ),
    family_member(
        obs("lifetime risk")
            .pol(HIGH)
            .num_filter(
                eq(op(GT), val("15"), unit("%"))
            )
    )
)