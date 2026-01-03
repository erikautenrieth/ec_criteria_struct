'INC'

'-  Unresponsive to gastrointestinal motility drug , antacid'

'-  cond("Unresponsive") to drug("gastrointestinal motility drug") , drug("antacid")'

cond("Unresponsive")
    .caused_by(
        drug("gastrointestinal motility drug"),
        drug("antacid")
    )
