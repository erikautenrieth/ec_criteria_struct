'INC'

'-  Any kind of primary mesenchymal tumor of the gastrointestinal tract with a histomorphological and immunohistochemical ( CD 117 ( + ) and / or DOG 1 ( + ) ) profile consistent with GIST .'

'-  Any kind of cond("primary mesenchymal tumor") of the mod("gastrointestinal tract") with a mod("histomorphological") and mod("immunohistochemical") ( cond("CD 117") ( pol(POSITIVE) ) and / or cond("DOG 1") ( pol(POSITIVE) ) ) profile consistent with cond("GIST") .'

cond("GIST")
    .equiv(
        cond("primary mesenchymal tumor")
            .mod("gastrointestinal tract")
            .mod("histomorphological")
            .mod("immunohistochemical")
            .equiv(
                cond("CD 117")
                    .pol(POSITIVE),
                cond("DOG 1")
                    .pol(POSITIVE)
            )
    )