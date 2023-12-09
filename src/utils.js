/**
 * Format timestamp
 * 
 * @param {*} timestamp 
 * @returns 
 */
export function formatTimeStamp(timestamp) {
    const time = new Date(timestamp);
    const days = Math.floor(timestamp / (1000 * 60 * 60 * 24));
    const hours = time.getUTCHours().toString().padStart(2, '0');
    const minutes = time.getUTCMinutes().toString().padStart(2, '0');
    const seconds = time.getUTCSeconds().toString().padStart(2, '0');

    if(days > 0) {
        return(`${days} days, ${hours}:${minutes}:${seconds}`);
    } else {
        return(`${hours}:${minutes}:${seconds}`);
    }
}

/**
 * Convert file size - as in iwCore
 * 
 * @param {*} fileSize 
 * @param {*} base 
 * @param {*} space 
 * @returns 
 */
export function fileSizeConvert(fileSize, base, space) {
	if (typeof space === 'undefined') {
		space = "&nbsp;";
	}
	// If unset default to 1024
	base = base || 1024;
	var unitSuffix = ["B","kB","MB","GB","TB","PB","EB"],
		fFileSize = fileSize,
		lFileSize = fFileSize,
		i=0;

	while (fFileSize>=1 || i>unitSuffix.length){
		lFileSize = fFileSize;
		fFileSize = fileSize/Math.pow(base, i+1);
		i++;
	}
	var unit = unitSuffix[i-1] || "";

    return Math.round(lFileSize * 100)/100 + space + unit;
}