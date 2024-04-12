'INC'

'-  They report a personal or family history of significant keloid or significant hypertrophic scar formations , or other problems with wound healing .'

'-  They report a personal or family_member() of significant mod("keloid") or severity(SEVERE) cond("hypertrophic scar formations") , or other obs("problems with wound healing") .'

union(
    family_member(
        union(
            cond("hypertrophic scar formations")
                .severity(SEVERE)
                .mod("keloid"),
            obs("problems with wound healing")
        )
    ),
    union(
        cond("hypertrophic scar formations")
            .severity(SEVERE)
            .mod("keloid"),
        obs("problems with wound healing")
    )
)