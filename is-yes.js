export default function isYes(str) {
    if (str.toLowerCase() === 'y' || str.toLowerCase() === 'yes') { 
        return true; 
    } else {
        return false;
    }
}