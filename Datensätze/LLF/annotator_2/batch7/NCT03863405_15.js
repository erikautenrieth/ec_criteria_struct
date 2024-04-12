'EXC'

'- Patients with impaired kidney functions ( serum creatinine concentrations ≥ 1.5 and ≥ 1.4 mg / dL in males and females respectively ) .'

'- Patients with cond("impaired kidney functions") ( lab("serum creatinine concentrations") eq(op(GTEQ), val("1.5")) and eq(op(GTEQ), val("1.5"), unit("mg / dL")) in male() and female() respectively ) .'

cond("impaired kidney functions")
    .equiv(
        union(
            if_then(
                male(),
                lab("serum creatinine concentrations")
                    .num_filter(
                        eq(op(GTEQ), val("1.5"))
                    )
            ),
            if_then(
                female(),
                lab("serum creatinine concentrations")
                    .num_filter(
                        eq(op(GTEQ), val("1.5"), unit("mg / dL"))
                    )
            )
        )
    )