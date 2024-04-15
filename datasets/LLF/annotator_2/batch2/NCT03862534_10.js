'EXC'

'-  Gingival recessions presenting minimal amount ( < 1 mm ) of apico - coronal keratinized tissue ( KT ) extension apical to recession area .'

'-  obs("Gingival recessions") presenting minimal amount ( eq(op(LT), val("1"), unit("mm")) ) of measurement("apico - coronal keratinized tissue") ( obs("KT") ) extension mod("apical to recession area") .'

intersect(
    obs("Gingival recessions"),
    measurement("apico - coronal keratinized tissue")
        .num_filter(
            eq(op(LT), val("1"), unit("mm"))
        )
        .equiv(
            obs("KT")
        )
        .mod("apical to recession area")
)