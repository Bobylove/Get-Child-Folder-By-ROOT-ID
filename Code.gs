function onOpen() {

  // Add a custom menu to run the script
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var HackerMan = [{name: "GOT IT !! <3", functionName: "listFolders"}];
  ss.addMenu("❤❤ ♛ ℍ₳C₭EℝM𝔸N ♛ ❤❤", HackerMan);
}



function listFolders() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var parentFolder = DriveApp.getFolderById("1SxqIT2E8LSJnloFowbXJLWZ1ANXQkW_I");  // ICI le fichier ROOT ou encore "le fichier parent"
  var childFolders = parentFolder.getFolders(); // ICI les Enfants du dossier parent en gros tous les sous dossier  :) ou bien "the fucking childrens of dark asshole" 
  var i=1; // Un nombre qui va permettre 
  sheet.clear(); // Un reset total de la feuille de calcul 
  sheet.getRange(1, 1, 1, 4).setValues([["NOM CC","ID DOSSIER","URL DOSSIER", "EMAIL"]]); // on set des valeurs de titre  dans  la range A1:D1 
  
  while(childFolders.hasNext()) {  // on boucle l'arborescence des  enfants  et on fais des va et viens :) 
    var child = childFolders.next(); // et la on va au suivant 
    sheet.getRange(i+1, 1, 1, 4).setValues([[child.getName(),child.getId(), child.getUrl(), child.getName()+"@homefriend.com"]]); // la c'est simple on récupe la data au choix  et en bonus y a meme un petit HACK pour l'email :D 
    i++; // eat sleep repeat <3 
  }
}
  



// step suivante le partage de dossier "par user(mail)" mais la je suis vraiment trop Hs , je test demain mais je pense quec'est good :))







