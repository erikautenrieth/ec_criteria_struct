'INC'

'4.  Indication for one of the following surgical interventions : hemiarthroplasty , total hip replacement , sliding plate and screw fixation , or intramedullary fixation'

'4.  indication() for eq(val("one")) of criteria() proc("surgical interventions") : proc("hemiarthroplasty") , proc("total hip replacement") , mod("sliding plate") and mod("screw") proc("fixation") , or proc("intramedullary fixation")'

indication(
    criteria(
        proc("surgical interventions")
            .equiv(
                proc("hemiarthroplasty"),
                proc("total hip replacement"),
                proc("fixation")
                    .mod("sliding plate")
                    .mod("screw"),
                proc("intramedullary fixation")
            )
    )
    .min_count(
        eq(val("one"))
    )
)