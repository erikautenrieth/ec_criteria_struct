'INC'

'1.  All patients with suspected newly diagnosed glioma ( grade I , II , III or glioblastoma ) with planned surgical intervention ( resection or biopsy ) .'

'1.  All patients with suspected eq(temporal_rec(FIRST_TIME)) diagnosed cond("glioma") ( eq(unit("grade"), val("I"), val("II"), val("III")) or cond("glioblastoma") ) with eq(temporal_per(FUTURE)) proc("surgical intervention") ( proc("resection") or proc("biopsy") ) .'

intersect(
    cond("glioma")
        .temporality(
            eq(temporal_rec(FIRST_TIME))
        )
        .num_filter(
            eq(unit("grade"), val("I"), val("II"), val("III"))
        )
        .equiv(
            cond("glioblastoma")
        ), 
    proc("surgical intervention")
        .temporality(
            eq(temporal_per(FUTURE))
        )
        .equiv(
            proc("resection"), 
            proc("biopsy")
        )
)