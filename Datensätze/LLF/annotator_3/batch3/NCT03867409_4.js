'INC'

'-  are out - of - guidelines for colorectal cancer screening ( > 10 years for colonoscopy , > 3 years for Cologuard , > 1 year for fecal immunochemical test )'

'-  are neg() for proc("colorectal cancer screening") ( eq(op(GT), val("10"), temporal_unit(YEAR)) for proc("colonoscopy") , eq(op(GT), val("3"), temporal_unit(YEAR)) for proc("Cologuard") , eq(op(GT), val("1"), temporal_unit(YEAR)) for proc("fecal immunochemical test") )'

neg(
    proc("colorectal cancer screening")
)
    .equiv(
        proc("colonoscopy")
            .duration(
                eq(op(GT), val("10"), temporal_unit(YEAR))
            ),
        proc("Cologuard")
            .duration(
                eq(op(GT), val("3"), temporal_unit(YEAR))
            ),
        proc("fecal immunochemical test")
            .duration(
                eq(op(GT), val("1"), temporal_unit(YEAR))
            )
    )

