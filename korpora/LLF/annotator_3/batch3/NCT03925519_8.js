'EXC'

'-  Exclusion criteria included anemia , overt complications of diabetes like nephropathy , neuropathy , retinopathy , obvious ischemic heart disease ( angina , myocardial infarction , and lead electrocardiogram abnormalities ) , HCV , HBV , chronic liver and kidney diseases , hypothyroidism , and drugs ( diuretics ; oral contraceptives ) .'

'-  Exclusion criteria included cond("anemia") , overt cond() of cond("diabetes") like cond("nephropathy") , cond("neuropathy") , cond("retinopathy") , obvious cond("ischemic heart disease") ( cond("angina") , cond("myocardial infarction") , and proc("lead electrocardiogram") pol(ABNORMAL) ) , cond("HCV") , cond("HBV") , chronic() mod("liver") and mod("kidney") cond() , cond("hypothyroidism") , and drug() ( drug("diuretics") ; drug("oral contraceptives") ) .'

union(
    cond("anemia"),
    cond()
        .caused_by(
            cond("diabetes")
        )
        .equiv(
            cond("nephropathy"),
            cond("neuropathy"),
            cond("retinopathy"),
            cond("ischemic heart disease")
                .equiv(
                    cond("angina"),
                    cond("myocardial infarction"),
                    proc("lead electrocardiogram")
                        .pol(ABNORMAL)
                ),
            cond("HCV"),
            cond("HBV"),
            cond()
                .chronic()
                .mod("liver")
                .mod("kidney"),
            cond("hypothyroidism"),
            drug()
                .equiv(
                    drug("diuretics"),
                    drug("oral contraceptives")
                )
        )
)



