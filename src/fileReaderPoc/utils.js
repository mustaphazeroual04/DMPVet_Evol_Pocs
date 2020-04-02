export const extractFileNameAndExtention = (url) => {
    var fullFilename = url.substring(url.lastIndexOf('/')+1);
    let fileInfos = fullFilename.split(".");
    return {
        fileName: fileInfos[0],
        fileExtention: fileInfos[1]
    }
}