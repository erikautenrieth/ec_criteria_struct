'INC'

'-  walled - off pancreatic necrosis ( WON ) indicated for endoscopical drainage'

'-  cond("walled - off pancreatic necrosis") ( cond("WON") ) indication() for proc("endoscopical drainage")'

intersect(
    cond("walled - off pancreatic necrosis")
        .equiv(
            cond("WON")
        ),
    indication(
        proc("endoscopical drainage")
    )
)