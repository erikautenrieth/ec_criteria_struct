'EXC'

'-  Patients diagnosed with dementia ( infection , vascular , hematological diseases ) , patients who could not be contacted during the follow - up period or who did not come to control , cardiac and cerebrovascular event ,'

'-  Patients diagnosed with cond("dementia") ( cond("infection") , cond("vascular") , cond("hematological diseases") ) , patients who could neg() be obs("contacted") during the follow - up period or who did neg() come to obs("control") , mod("cardiac") and mod("cerebrovascular") obs("event") ,'

union(
    cond("dementia")
        .equiv(
            cond("infection"), 
            cond("vascular"), 
            cond("hematological diseases")
        ), 
    neg(
        obs("contacted")
    ),
    neg(
        obs("control")
    ),
    obs("event")
        .mod("cardiac")
        .mod("cerebrovascular")
)