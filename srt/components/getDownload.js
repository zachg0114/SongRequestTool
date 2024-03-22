import downloadBase from "@/lib/downloadBase";
export default async function getDownload(id) {
    try {
        const { mp3: base64, title } = await downloadBase(id); // mp3 is a Base64 string
        
        // Convert the Base64 string back to a Uint8Array
        const mp3Array = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
        
        // Create a Blob using the Uint8Array
        const blob = new Blob([mp3Array], { type: 'audio/mpeg' });
        // Create an object URL for the blob
        const url = window.URL.createObjectURL(blob);

        // Create a temporary anchor element and trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title}.mp3`; // Use the title for the filename, adjust as needed
        document.body.appendChild(a); // Append to the document
        a.click(); // Trigger the download
        
        // Cleanup: revoke the object URL and remove the anchor element
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    } catch (error) {
        console.error('Error downloading MP3:', error);
    }
}

