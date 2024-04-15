'INC'

'-  patients affected by knee osteoarthritis , eligible for primary total knee arthroplasty'

'-  patients affected by cond("knee osteoarthritis") , indication() for proc("primary total knee arthroplasty")'

intersect(
    cond("knee osteoarthritis"),
    indication(
        proc("primary total knee arthroplasty")
    )
)