'INC'

'-  Diagnoses of COPD according to criteria of the American Thoracic Society ( ATS ) , a disease state characterized by the presence of chronic airway obstruction due to chronic bronchitis ( cough / sputum on most days a week for 3 months in a year for at least two successive years ) and / or emphysema'

'-  Diagnoses of cond("COPD") according to criteria of the American Thoracic Society ( ATS ) , a disease state characterized by the presence of chronic() cond("airway obstruction") due to chronic() cond("bronchitis") ( obs("cough") / obs("sputum") on most eq(temporal_unit(DAY), per(WEEK)) for eq(val("3"), temporal_unit(MONTH), per(YEAR)) for eq(op(GTEQ), val("two"), temporal_unit(YEAR)) ) and / or cond("emphysema")'

cond("COPD")
    .equiv(
        cond("airway obstruction")
            .chronic()
            .caused_by(
                cond("bronchitis")
                    .chronic()
                    .equiv(
                        union(
                            obs("cough"),
                            obs("sputum")
                        )
                            .temporality(
                                eq(temporal_unit(DAY), per(WEEK))
                            )
                            .duration(
                                eq(val("3"), temporal_unit(MONTH), per(YEAR))
                            )
                            .duration(
                                eq(op(GTEQ), val("two"), temporal_unit(YEAR))
                            ),
                        cond("emphysema")
                    )
            )
    )
