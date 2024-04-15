'INC'

'-  Indication for antibiotic treatment with a 3 rd generation injectable cephalosporin ( cefotaxime or ceftriaxone )'

'-  indication() for drug("antibiotic") proc() with a mod("3 rd generation injectable") drug("cephalosporin") ( drug("cefotaxime") or drug("ceftriaxone") )'

indication(
    proc()
        .equiv(
            drug("antibiotic")
                .equiv(
                    drug("cephalosporin")
                        .mod("3 rd generation injectable")
                        .equiv(
                            drug("cefotaxime"),
                            drug("ceftriaxone")
                        )
                )
        )
)