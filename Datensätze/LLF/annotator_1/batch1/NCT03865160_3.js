'EXC'

'-  Any organic eye disease , strabismus , astigmatism and / or anisometropia > 1.5 D , prematurity , use of mono - / multifocal contact lenses , pre - treatment with atropine'

'-  Any cond("organic eye disease") , cond("strabismus") , cond("astigmatism") and / or measurement("anisometropia") eq(op(GT), val("1.5"), unit("D")) , cond("prematurity") , eq(temporal_per(PRESENT)) of mod("mono -") / mod("multifocal") proc("contact lenses") , pre - proc() with drug("atropine")'

union(
    cond("organic eye disease"), 
    cond("strabismus"), 
    cond("astigmatism"), 
    measurement("anisometropia")
        .num_filter(
            eq(op(GT), val("1.5"), unit("D"))
        ), 
    cond("prematurity"), 
    proc("contact lenses")
        .temporality(
            eq(temporal_per(PRESENT))
        )
        .mod("mono -")
        .mod("multifocal"),
    drug("atropine")
)