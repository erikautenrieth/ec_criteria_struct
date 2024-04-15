'EXC'

'-  gastrointestinal ( GI ) conditions i . e . , irritable bowel , diverticulitis , peptic ulcers , Crohn\'s , GI cancers , and adenatomous polyps'

'-  mod("gastrointestinal") ( obs("GI") ) cond() i . e . , cond("irritable bowel") , cond("diverticulitis") , cond("peptic ulcers") , cond("Crohn\'s") , mod("GI") cond("cancers") , and cond("adenatomous polyps")'

cond()
    .mod("gastrointestinal")
    .equiv(
        obs("GI")
    )
.equiv(
    cond("irritable bowel"), 
    cond("diverticulitis"), 
    cond("peptic ulcers"), 
    cond("Crohn's"), 
    cond("cancers"), 
    cond("adenatomous polyps")
)