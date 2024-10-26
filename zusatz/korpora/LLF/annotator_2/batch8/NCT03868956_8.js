'EXC'

'-  Any condition , which , in the opinion of the investigator may prevent him from performing the colour doppler ultrasound test ( plaster cast , inaccessible vein segment after abdominal or pelvic surgery , or other causes that may lead to a technically inadequate CDUS )'

'-  Any cond() , which , in the opinion of the investigator may prevent him from performing the colour doppler ultrasound test ( cond("plaster cast") , mod("inaccessible") cond("vein segment") after mod("abdominal") or mod("pelvic") proc("surgery") , or other cond() that may lead to change() a cond("technically inadequate CDUS") )'

cond()
    .equiv(
        cond("plaster cast"),
        seq(
            cond("vein segment")
                .mod("inaccessible"),
            after(
                proc("surgery")
                    .mod("abdominal")
                    .mod("pelvic")
            )
        ),
        cond("technically inadequate CDUS")
            .change()
            .caused_by(
                cond()
            )
    )