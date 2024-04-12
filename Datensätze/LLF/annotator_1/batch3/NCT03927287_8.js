'EXC'

'2.  Patients with prostate cancer other than adenocarcinoma , such as small cell and neuroendocrine cancer'

'2.  Patients with cond("prostate cancer") except() cond("adenocarcinoma") , such as mod("small cell") and mod("neuroendocrine") cond("cancer")'

cond("prostate cancer")
    .except(
        cond("adenocarcinoma")
    )
    .equiv(
        cond("cancer")
            .mod("small cell")
            .mod("neuroendocrine")
    )