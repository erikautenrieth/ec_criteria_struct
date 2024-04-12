'EXC'

'Subjects with clotting disorders , dyslipidemia or being on medication ( i . e .  statins ) or other supplements during the study will be excluded .'

'Subjects with cond("clotting disorders") , cond("dyslipidemia") or being eq(temporal_per(PRESENT)) drug() ( i . e .  drug("statins") ) or other drug("supplements") during the study will be neg() .'

neg(
    union(
        cond("clotting disorders"),
        cond("dyslipidemia"),
        drug()
            .temporality(
                eq(temporal_per(PRESENT))
            )
            .equiv(
                drug("statins") 
            ),
        drug("supplements")
    )
)