'EXC'

'-  medical condition that would increase risk of neuromuscular junction blockade with botulinum toxin ( myasthenia gravis , Eaton Lambert , amyotrophic lateral sclerosis )'

'-  cond() that would change() risk() of cond("neuromuscular junction blockade") with drug("botulinum toxin") ( cond("myasthenia gravis") , cond("Eaton Lambert") , cond("amyotrophic lateral sclerosis") )'

risk(
    cond("neuromuscular junction blockade"),
    drug("botulinum toxin")
)
    .change()
    .caused_by(
        cond()
    )
    .equiv(
        cond("myasthenia gravis"),
        cond("Eaton Lambert"),
        cond("amyotrophic lateral sclerosis")
    )