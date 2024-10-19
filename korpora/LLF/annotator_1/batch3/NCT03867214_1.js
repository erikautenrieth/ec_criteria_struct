'INC'

'-  Adult patients who plan to undergo simultaneous primary total knee arthroplasty on bilateral knee joint with a diagnosis of osteoarthritis or aseptic bone necrosis , but not of rheumatoid arthritis ;'

'-  adult() patients who plan to undergo mod("simultaneous primary") proc("total knee arthroplasty") on mod("bilateral knee joint") with a diagnosis of cond("osteoarthritis") or cond("aseptic bone necrosis") , but neg() of cond("rheumatoid arthritis") ;'

intersect(
    adult(),
    proc("total knee arthroplasty")
        .mod("simultaneous primary")
        .mod("bilateral knee joint"),
    union(
        cond("osteoarthritis"),
        cond("aseptic bone necrosis")
    ),
    neg(
        cond("rheumatoid arthritis")
    )
)