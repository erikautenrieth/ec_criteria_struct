'INC'

'-  patients who undergo a flexible bronchoscopic lavage and with a beta lactamines treatment as cephalosporin of 3 rd generation ( CEFTRIAXONE / CEFOTAXIME , CEFTAZIDIME ) , of 4 th generation ( CEFEPIM ) , or AMOXICILLIN - CLAVULANIC ACID , or PIPERACILLIN - TAZOBACTAM'

'-  patients who undergo a flexible proc("bronchoscopic lavage") and with a drug("beta lactamines") proc() as drug("cephalosporin") of mod("3 rd generation") ( drug("CEFTRIAXONE") / drug("CEFOTAXIME") , drug("CEFTAZIDIME") ) , of mod("4 th generation") ( drug("CEFEPIM") ) , or drug("AMOXICILLIN - CLAVULANIC ACID") , or drug("PIPERACILLIN - TAZOBACTAM")'

intersect(
    proc("bronchoscopic lavage"),
    proc()
        .equiv(
            drug("beta lactamines")
                .equiv(
                    drug("cephalosporin")
                        .mod("3 rd generation")
                        .equiv(
                            drug("CEFTRIAXONE"),
                            drug("CEFOTAXIME"),
                            drug("CEFTAZIDIME")
                        )
                        .mod("4 th generation")
                        .equiv(
                            drug("CEFEPIM")
                        ),
                    drug("AMOXICILLIN - CLAVULANIC ACID"),
                    drug("PIPERACILLIN - TAZOBACTAM")
                )
        )
)
