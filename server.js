const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const DATA_FILE = "apps.json";
const ADMIN_PASSWORD = "12345"; // 🔴 Burayı değiştir

// Veri oku
function readApps() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

// Veri yaz
function saveApps(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// API → uygulamaları getir
app.get("/api/apps", (req, res) => {
  res.json(readApps());
});

// API → admin giriş
app.post("/api/login", (req, res) => {
  if (req.body.password === ADMIN_PASSWORD) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// API → yeni uygulama ekle
app.post("/api/add", (req, res) => {
  const apps = readApps();
  apps.push(req.body);
  saveApps(apps);
  res.json({ success: true });
});

// API → uygulama sil
app.post("/api/delete", (req, res) => {
  let apps = readApps();
  apps = apps.filter(a => a.name !== req.body.name);
  saveApps(apps);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Çalışıyor → http://localhost:3000");
});

