'EXC'

'-  •Known hypersensitivity or contraindications to oral misoprostol ( uterine surgery ) .'

'-  •Known cond("hypersensitivity") or contraindication() to mod("oral") drug("misoprostol") ( proc("uterine surgery") ) .'

union(
    cond("hypersensitivity")
        .caused_by(
            drug("misoprostol") 
                .mod("oral")
        )
        .equiv(
            proc("uterine surgery")
        ),
    contraindication(
        drug("misoprostol") 
            .mod("oral")
    )
    .equiv(
        proc("uterine surgery")
    )
)