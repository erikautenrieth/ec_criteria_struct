'EXC'

'-  Admitting diagnosis of any of the following conditions : - Cardiopulmonary arrest ; - Raised intracrania pressure ; - Acute neurological admission diagnosis ; - Subarachnoid hemorrhage ; - Ischemic stroke'

'-  Admitting diagnosis of any of criteria() : - cond("Cardiopulmonary arrest") ; - cond("Raised intracrania pressure") ; - acute() cond("neurological") type(ADMISSION) diagnosis ; - cond("Subarachnoid hemorrhage") ; - cond("Ischemic stroke")'

criteria(
    cond("Cardiopulmonary arrest"),
    cond("Raised intracrania pressure"),
    cond("neurological")
        .acute()
        .type(ADMISSION),
    cond("Subarachnoid hemorrhage"),
    cond("Ischemic stroke")
)