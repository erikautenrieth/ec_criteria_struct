'INC'

'-  All patients over 18 years of age undergoing gastric resection surgery due to cancer within or not of an intensified recovery program ( ERAS ) with any level of compliance with the protocol ( from 0 - 100 % ) .'

'-  All patients eq(op(GT), val("18"), temporal_unit(YEAR)) of age() eq(temporal_per(PRESENT)) proc("gastric resection surgery") due to cond("cancer") within or not of an mod("intensified") proc("recovery program") ( proc("ERAS") ) with any level of compliance with the protocol ( from 0 - 100 % ) .'

intersect(
    intersect(
        age()
            .num_filter(
                eq(op(GT), val("18"), temporal_unit(YEAR))
            ),
        proc("gastric resection surgery")
            .temporality(
                eq(temporal_per(PRESENT))
            )
    )
        .caused_by(
            cond("cancer")
        ),
    proc("recovery program")
        .mod("intensified")
        .equiv(
            proc("ERAS")
        )
)