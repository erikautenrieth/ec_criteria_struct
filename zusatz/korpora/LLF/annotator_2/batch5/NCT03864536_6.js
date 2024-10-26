'EXC'

'-  No neurological ( including dementia diagnosis ) or severe psychiatric ( e . g . , schizophrenia or bipolar disorder ) disorders'

'-  neg() mod("neurological") ( including cond("dementia") diagnosis ) or severity(SEVERE) mod("psychiatric") ( e . g . , cond("schizophrenia") or cond("bipolar disorder") ) cond("disorders")'

neg(
    union(
        cond("disorders")
            .mod("neurological")
            .equiv(
                cond("dementia")
            ),
        cond("disorders")
            .severity(SEVERE)
            .mod("psychiatric")
            .equiv(
                cond("schizophrenia"),
                cond("bipolar disorder")
            )
    )
)