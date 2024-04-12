'INC'

'-  Lung surgical patients who were sent to thoracic post operative intensive care unit ( ICU ) ward right after surgery and stayed in ICU for at least 24 hours .'

'-  proc("Lung surgical") patients who were enc(INPATIENT) to loc(unit("thoracic post operative intensive care unit")) ( loc(unit("ICU")) ) ward right after proc("surgery") and enc(INPATIENT) in loc(unit("ICU")) for eq(op(GTEQ), val("24"), temporal_unit(HOUR)) .'

intersect(
    proc("Lung surgical"),
    seq(
        enc(INPATIENT)
            .loc(unit("thoracic post operative intensive care unit"))
            .loc(unit("ICU"))
            .duration(
                eq(op(GTEQ), val("24"), temporal_unit(HOUR))
            ),
        after(
            proc("surgery")
        )
    )
)