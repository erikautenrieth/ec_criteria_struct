'EXC'

'4.  Presence of : pervasive developmental disability , psychosis , bipolar disorder , substance abuse , autism spectrum disorder , or intellectual disability'

'4.  Presence of : pervasive cond("developmental disability") , cond("psychosis") , cond("bipolar disorder") , cond("substance abuse") , cond("autism spectrum disorder") , or cond("intellectual disability")'

union(
    cond("developmental disability"), 
    cond("psychosis"), 
    cond("bipolar disorder"), 
    cond("substance abuse"), 
    cond("autism spectrum disorder"), 
    cond("intellectual disability")
)