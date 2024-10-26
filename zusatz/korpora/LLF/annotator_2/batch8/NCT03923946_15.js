'EXC'

'-  Have any communication difficulties that would prevent them from engaging in the intervention ( including hearing impairments , visual impairments , inability to understand English ) .  These will be assessed at researcher\'s discretion during baseline assessments .'

'-  Have any cond("communication difficulties") that would prevent them from engaging in the intervention ( including cond("hearing impairments") , cond("visual impairments") , neg() to understand lang("English") ) .  These will be assessed at researcher\'s discretion during baseline assessments .'

cond("communication difficulties")
    .equiv(
        cond("hearing impairments"),
        cond("visual impairments"),
        neg(
            lang("English")
        )
    )