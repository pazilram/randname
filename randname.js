
function generateEnglishName(length) {
    var v = "";
    for (var i = 0; i < (length / 10) + 1; i++) {
        var r = new Uint8Array(4);
        window.crypto.getRandomValues(r);
        v += uint2quint(r[0] << 24 | r[1] << 16 | r[2] << 8 | r[3]);
    }
    return v.replace(/-/g, "").substring(0, length);
}

