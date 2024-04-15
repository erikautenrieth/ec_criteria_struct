'INC'

'8.  have clinical / treatment record data and valid pre operative status of intestinal obstruction or perforation ( IOP ) , counts of lymph node removed in surgical resection .'

'8.  have clinical / proc() record data and valid pre proc("operative") status of cond("intestinal obstruction or perforation") ( obs("IOP") ) , counts of proc("lymph node removed") in proc("surgical resection") .'


seq(
    proc(),
    before(
        intersect(
            proc("operative"),
            cond("intestinal obstruction or perforation")
                .equiv(
                    obs("IOP")
                )
        ),
    ),
    after(
        proc("lymph node removed")
    ),
    during(
        proc("surgical resection")
    )
)