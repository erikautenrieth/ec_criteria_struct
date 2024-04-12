'EXC'

'-  A serum creatinine concentration of > 110 μmol / L'

'-  A lab("serum creatinine concentration") of eq(op(GT), val("110"), unit("μmol"), unit("L"))'

lab("serum creatinine concentration")
    .num_filter(
        eq(op(GT), val("110"), unit("μmol"), unit("L"))
    )