'EXC'

'-  self - rating anxiety scale before operation indicates anxiety'

'-  clin_score("self - rating anxiety scale") before proc("operation") indicates cond("anxiety")'

seq(
    clin_score("self - rating anxiety scale"),
    before(
        cond("anxiety")
            .found_by(
                proc("operation")
            )
    )
)