'EXC'

'-  Children with congenital anomalies or without valid arterial and venous umbilical cord samples'

'-  child() with cond("congenital anomalies") or neg() valid mod("arterial") and mod("venous") spec("umbilical cord samples")'

intersect(
    child(),
    union(
        cond("congenital anomalies"),
        neg(
            spec("umbilical cord samples")
                .mod("arterial")
                .mod("venous")
        )
    )
)