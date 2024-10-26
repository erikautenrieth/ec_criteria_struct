'INC'

'-  diagnosed with DME with central macular thickness ( CMT ) more than 250 µm measured by OCT'

'-  diagnosed with cond("DME") with measurement("central macular thickness") ( obs("CMT") ) eq(op(GT), val("250"), unit("µm")) measured by proc("OCT")'

intersect(
    cond("DME"),
    measurement("central macular thickness")
        .equiv(
            obs("CMT")
        )
        .num_filter(
            eq(op(GT), val("250"), unit("µm"))
        )
        .found_by(
            proc("OCT")
        )
)