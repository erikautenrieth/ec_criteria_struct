'EXC'

'-  concomitant malignancies except cutaneous squamous cell carcinoma or basal cell carcinoma'

'-  mod("concomitant") cond("malignancies") except() cond("cutaneous squamous cellcarcinoma") or cond("basal cell carcinoma")'

cond("malignancies")
    .mod("concomitant")
    .except(
        cond("cutaneous squamous cellcarcinoma"),
        cond("basal cell carcinoma")
    )