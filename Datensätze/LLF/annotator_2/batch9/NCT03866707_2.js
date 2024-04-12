'INC'

'-  Diseases which will be eligible include , high risk or very high risk acute lymphoblastic leukemia , acute myeloid leukemia , Hodgkin lymphoma , non - Hodgkin lymphoma , sarcomas .'

'-  cond() which will be eligible include , pol(HIGH) risk() or very pol(HIGH) risk() acute() cond("lymphoblastic leukemia") , acute() cond("myeloid leukemia") , cond("Hodgkin lymphoma") , mod("non - Hodgkin") cond("lymphoma") , cond("sarcomas") .'

cond()
    .equiv(
        union(
            risk(
                cond("lymphoblastic leukemia")
            )
                .pol(HIGH),
            risk(
                    cond("lymphoblastic leukemia")
                )
                    .pol(HIGH)
                    .acute()
        ),
        cond("myeloid leukemia")
            .acute(),
        cond("Hodgkin lymphoma"),
        cond("lymphoma")
            .mod("non - Hodgkin"),
        cond("sarcomas")
    )