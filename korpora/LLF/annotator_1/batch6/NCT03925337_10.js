'EXC'

'-  Patients that have standard contraindications to colonoscopy in general ( e . g .  documented acute diverticulitis , fulminant colitis and known or suspected perforation ) .'

'-  Patients that have standard contraindication() to proc("colonoscopy") in general ( e . g .  documented acute() cond("diverticulitis") , cond("fulminant colitis") and known or possible() cond("perforation") ) .'

contraindication(
    proc("colonoscopy")
)
    .equiv(
        cond("diverticulitis")
            .acute(),
        cond("fulminant colitis"),
        cond("perforation")
            .possible()
    )