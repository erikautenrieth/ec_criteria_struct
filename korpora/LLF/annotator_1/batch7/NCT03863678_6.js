'EXC'

'-  Any contraindication for dry needling ( eg , anticoagulants , infections , bleeding , etc . ) ,'

'-  Any contraindication() for proc("dry needling") ( eg , drug("anticoagulants") , cond("infections") , obs("bleeding") , etc . ) ,'

contraindication(
    proc("dry needling")
)
.equiv(
    drug("anticoagulants"),
    cond("infections"),
    obs("bleeding")
)