function toWrapStr(str) {
    // remove html and make it max 40 chars 
    return str ? String(str).replace(/<[^>]+>/gm, '').substr(0, 40) : '';
};
