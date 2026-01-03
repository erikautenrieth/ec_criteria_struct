'INC'

'-  Documented keratoconus or ectasia after refractive surgery'

'-  Documented cond("keratoconus") or cond("ectasia") after proc("refractive surgery")'

seq(
    union(
        cond("keratoconus"),
        cond("ectasia")
    ),
    after(
        proc("refractive surgery")
    )
)