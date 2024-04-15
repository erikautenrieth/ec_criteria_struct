'INC'

'-  Post - 9 / 11 Veterans who report some reintegration , readjustment , or anger difficulty'

'-  mod("Post - 9 / 11") obs("Veterans") who report some mod("reintegration") , mod("readjustment") , or mod("anger") obs("difficulty")'

intersect(
    obs("Veterans")
        .mod("Post - 9 / 11"),
    obs("difficulty")
        .mod("reintegration")
        .mod("readjustment")
        .mod("anger")
)
