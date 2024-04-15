'INC'

'-  Meet DSM - 5 criteria for oppositional defiant disorder ( ODD ) , conduct disorder ( CD ) , or Other Specified or Unspecified Disruptive , Impulse - Control , and Conduct Disorder'

'-  Meet DSM - 5 criteria for cond("oppositional defiant disorder") ( cond("ODD") ) , cond("conduct disorder") ( cond("CD") ) , or other mod("Specified") or mod("Unspecified Disruptive") , mod("Impulse - Control") , and mod("Conduct") cond("Disorder")'

union(
    cond("oppositional defiant disorder")
        .equiv(
            cond("ODD")
        ),
    cond("conduct disorder")
        .equiv(
            cond("CD")
        ),
    cond("Disorder")
        .mod("Specified")
        .mod("Unspecified Disruptive")
        .mod("Impulse - Control", "Conduct")
)