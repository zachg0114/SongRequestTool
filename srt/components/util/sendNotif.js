const sendNotif = (latestSong) => {
    if (!('Notification' in window)) {
        console.log('This browser does not support desktop notification');
        return;
    }
    if (Notification.permission === 'default') {
        Notification.requestPermission();
    }
    if (Notification.permission !== 'granted') {
        console.log('User has blocked notifications');
        return;
    }

    const title = latestSong.data.songName;
    const message = `Song added to Queue: ${title}`;
    const options = {
        body: message,
    };
    const notif = new Notification('DJ Song Request', options);
    notif.onclick = () => {
        window.focus();
        notif.close();
    };
}

export default sendNotif;