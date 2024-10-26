'INC'

'-  indication for hysterectomy for benign disease or prophylactic surgery due to hereditary cancer'

'-  indication() for proc("hysterectomy") for cond("benign disease") or proc("prophylactic surgery") due to mod("hereditary") cond("cancer")'

indication(
    proc("hysterectomy")
        .for(
            cond("benign disease")
        ),
    proc("prophylactic surgery")
        .for(
            cond("cancer")
                .mod("hereditary")
        )
)