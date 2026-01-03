'INC'

'-  2.  elective total hip arthroplasty for osteoarthritis of osteonecrosis of femoral head'

'-  2.  mod("elective") proc("total hip arthroplasty") for cond("osteoarthritis") of cond("osteonecrosis of femoral head")'

intersect(
    proc("total hip arthroplasty")
        .mod("elective"),
    cond("osteoarthritis"),
    cond("osteonecrosis of femoral head")
)
