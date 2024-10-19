'INC'

'-  Scheduled to undergo laparoscopic roux - en - Y gastric bypass or gastric sleeve placement surgery for weight loss .'

'-  eq(temporal_per(FUTURE)) proc("laparoscopic roux - en - Y gastric bypass") or proc("gastric sleeve placement surgery") for obs("weight loss") .'

union(
    proc("laparoscopic roux - en - Y gastric bypass"),
    proc("gastric sleeve placement surgery")
)
    .temporality(
        eq(temporal_per(FUTURE))
    )
    .for(
        obs("weight loss")
    )