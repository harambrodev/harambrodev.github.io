const apps = [
  {
    name: "WhatsApp Messenger",
    desc: "Mesajlaşmanın yeni yolu!",
    logo: "assets/icons/whatsapp.png",
    play: "https://play.google.com/store/apps/details?id=com.whatsapp",
    apk: "#"
  },
  {
    name: "Instagram",
    desc: "Fotoğraf ve video paylaş!",
    logo: "assets/icons/instagram.png",
    play: "https://play.google.com/store/apps/details?id=com.instagram.android",
    apk: "#"
  },
  {
    name: "TikTok",
    desc: "Kısa videolar, eğlence!",
    logo: "assets/icons/tiktok.png",
    play: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically",
    apk: "#"
  }
];

const appList = document.getElementById("app-list");

apps.forEach(app => {
  appList.innerHTML += `
    <div class="app-card">
      <img class="app-logo" src="${app.logo}" alt="${app.name}"/>
      <div class="app-info">
        <h3>${app.name}</h3>
        <p>${app.desc}</p>
        <div class="btn-group">
          <a class="btn btn-play" href="${app.play}" target="_blank">
            <i class="fa-brands fa-google-play"></i> Play Store
          </a>
          <a class="btn btn-apk" href="${app.apk}">
            <i class="fa-solid fa-download"></i> APK İndir
          </a>
        </div>
      </div>
    </div>`;
});
