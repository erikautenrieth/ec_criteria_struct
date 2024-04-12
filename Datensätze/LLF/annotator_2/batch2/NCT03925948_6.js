'EXC'

'-  Hematological condition that would affect HbA 1C assay , e . g . , hemolytic anemia , sickle cell anemia'

'-  cond("Hematological condition") that would affect HbA 1C assay , e . g . , cond("hemolytic anemia") , cond("sickle cell anemia")'

cond("Hematological condition")
    .equiv(
        cond("hemolytic anemia"),
        cond("sickle cell anemia")
    )