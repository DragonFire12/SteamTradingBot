var Steam = require("steam");
var SteamUser = require ("steam-user");
var client = new SteamUser();

var friends = new Steam.SteamFriends(client.client);

var SteamCommunity = require('steamcommunity');
var community = new SteamCommunity();

var client;

var SteamID = require("steamid");

var SteamTrade = require("steam-trade");
var SteamTrade = new SteamTrade();

client.logOn({
   "accountName": "SteamAccountNameHere",
   "password": "SteamPasswordHere"
 });

console.log("###############################")
console.log("Running Bot Made By Hyperion!")
console.log("Running Bot On Version 1.0.0")
console.log("###############################")

 client.on("loggedOn", function(details){
   console.log("Logged On To Steam Server With The ID Of " + client.steamID.getSteam3RenderedID());
   client.setPersona(SteamUser.Steam.EPersonaState.Online);
   client.gamesPlayed(440);
 });

client.on("webSession", function(steamID, cookies){
community.setCookies(cookies);
SteamTrade.sessionID = cookies[0].split("=")[1];
cookies.forEach(function(cookie)  {
SteamTrade.setCookie(cookie);
 });


 client.on("error", function(error){
   console.log("Error");
});

friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
if(msg == "/commands"){
friends.sendMessage(user,"The Commands Are: /youtube /joke /creator");
   }
 }
})
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
if(msg == "/creator"){
friends.sendMessage(user,"This Is My Creator's Steam Page:http://steamcommunity.com/profiles/76561198065953943/");
   }
 }
})
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
if(msg == "/joke"){
friends.sendMessage(user,"Deez Nutz HaH Garry!");
   }
 }
})
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
if(msg == "/youtube"){
friends.sendMessage(user,"This Is My Creator's Youtube Page:https://www.youtube.com/channel/UCntR3y7NgVK_nv74LqOb-eg");
   }
 }
})
SteamTrade.on('chatMsg', function(msg)  {
if (msg == "!item" && "76561198065953943")
console.log("Giving Items");
steamTrade.loadInventory(440,2, function(items){
steamTrade.addItems();
   })
 })
})
SteamTrade.on("ready", function()  {
steamTrade.ready(function()  {
  steam.Trade.confirm();
 })
})

client.on("tradeRequest", function(steamID, respond){
  console.log("Somone Is Ready To Trade"+ client.steamID.getSteam3RenderedID());
  respond(true);
})

client.on("TradeStarted", function(steamID){
  steamTrade.open(steamID);
})
function ComProfile()  {
  community.editProfile({
    name:  "TradeBot#1",
    realName: "Hyperion s SteamBot Line",
    country: "Romania",
    customURL: "SteamTrade",
  });
}
