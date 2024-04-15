'INC'

'-  subjects diagnosed with grade II or III OA during radiological examination as defined by the radiological classification of Kellgren and Lawrence ( K - L ) scale for knee OA'

'-  subjects diagnosed with eq(unit("grade"), val("II"), val("III")) cond("OA") during proc("radiological examination") as defined by the radiological classification of Kellgren and Lawrence ( K - L ) scale for knee OA'

seq(
    cond("OA")
        .num_filter(
            eq(unit("grade"), val("II"), val("III"))
        ), 
    during(
        proc("radiological examination")
    )
)