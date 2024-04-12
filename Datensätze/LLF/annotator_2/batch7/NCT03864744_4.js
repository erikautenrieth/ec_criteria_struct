'EXC'

'-  Known liver disease before total pancreatectomy or pancreaticoduodenectomy ( excluding NAFLD )'

'-  Known cond("liver disease") before proc("total pancreatectomy") or proc("pancreaticoduodenectomy") ( except() cond("NAFLD") )'

seq(
    cond("liver disease"),
    before(
        union(
            proc("total pancreatectomy"),
            proc("pancreaticoduodenectomy")
        )
            .except(
                cond("NAFLD")
            ),
    )
)