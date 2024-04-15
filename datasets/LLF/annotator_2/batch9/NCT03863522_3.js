'INC'

'-  Patient has been recommended for ultrasound core needle biopsy of a suspicious breast lesion'

'-  Patient has been indication() for proc("ultrasound core needle biopsy") of a possible() cond("breast lesion")'

indication(
    proc("ultrasound core needle biopsy")
        .for(
            cond("breast lesion")
                .possible()
        )
)