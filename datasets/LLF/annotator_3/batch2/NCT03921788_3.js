'INC'

'-  The absence of any concomitant pathology , accompanied by chronic pelvic pain'

'-  The neg() of any concomitant cond("pathology") , accompanied by chronic() cond("pelvic pain")'

union(
    neg(
        cond("pathology")
    ),
    cond("pelvic pain")
        .chronic()
)
