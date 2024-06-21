const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "4915678993384";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_08_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDY2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDk0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNml2UUxnaEZJd0NsWWxOWlFESHJEZ0ZKT3ZsejVnK3hyT0tjR0RCL1JQST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNTQwNzUzNDA0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EwRjEyNkFDRTAwMUY1NzdDMkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4OTgyNTEzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTU0MDc1MzQwNDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBM0IzMEZERTk1MDM0OTEzOEExXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODk4MjUxNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE1NDA3NTM0MDQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUFCQTJGMTNERTU4RThGRDFCRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg5ODI1MThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQVNtZVlfSWFRVmU3TnhDYXlHMThtd1wiLFxuICBcInBob25lSWRcIjogXCIzOTkxYjRjZC1kNmJhLTRmYzktOGRjMi01NGMxN2IyMDI2YzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgOSxcbiAgICAgIDIwOCxcbiAgICAgIDIxOSxcbiAgICAgIDQyLFxuICAgICAgMTYzLFxuICAgICAgMjE1LFxuICAgICAgMTMzLFxuICAgICAgODYsXG4gICAgICAyMzgsXG4gICAgICAxNTAsXG4gICAgICAzNixcbiAgICAgIDE0NyxcbiAgICAgIDI0OSxcbiAgICAgIDk4LFxuICAgICAgMTU4LFxuICAgICAgMTYwLFxuICAgICAgMSxcbiAgICAgIDE0OSxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDgsXG4gICAgICAxMzIsXG4gICAgICA3MixcbiAgICAgIDEwMCxcbiAgICAgIDE2NCxcbiAgICAgIDc5LFxuICAgICAgMTk1LFxuICAgICAgMTQ5LFxuICAgICAgMjE4LFxuICAgICAgMjQ0LFxuICAgICAgMTQ0LFxuICAgICAgNDYsXG4gICAgICAxMTQsXG4gICAgICA0MixcbiAgICAgIDEwNSxcbiAgICAgIDE2NyxcbiAgICAgIDY0LFxuICAgICAgMjEyLFxuICAgICAgMjAzLFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBNUjNHMU5BXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNTQwNzUzNDA0MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjE2MzY5NTkwMDI2NjM6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJQYW5kYSBCb3QgVjNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcnRwalVRN2E3V3N3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNmUVFUMlI0MlE0S1dqNHlIa0RHUFlqU3p6NkNSR2pOYUczVThER1RGMFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSnNKbW9jM1hTbG1PazJoZDdLb0VGZjA1SS9iYjVWSmRXVXhvY0VLSnVJWXNENVdPNHo0Uk52czVzaURTNC9icmxyOUxBa1Y5ZXR3aEZnbXBSWmN1Z3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieElqbUtrWmNlYXllS1pjS2lrOTJ5WkxVQWJ2eXh4anFvbUNmQTVaK1pDNVpZTm1GQlVrTCtoQm9GMW5DRktBTkZoY3YwSVZ2ZjVZUlg1YWk4Vk1vQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTU0MDc1MzQwNDI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5ODI1MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBNERcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUE0RC5qc29uIjogIntcImtleURhdGFcIjpcIldidFJQWnVFdHhFYjNBS3VlcTY5VURRZXlvSTZ2NEVSckFZRDNTVE56WGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExNzg1NjI2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg5ODI1MTI1NzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
