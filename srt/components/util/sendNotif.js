import addNotification from 'react-push-notification';


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

    addNotification({
        title: 'Song Added to Queue!',
        message: `${latestSong.data.songName}`,
        native: true,
        onClick: () => { window.focus(); },
    });
}

export default sendNotif;