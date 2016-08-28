function getAge(birth) {
   var today = new Date();
   var curr_date = today.getDate();
   var curr_month = today.getMonth() + 1;
   var curr_year = today.getFullYear();

   var pieces = birth.split('/');
   var birth_date = pieces[0];
   var birth_month = pieces[1];
   var birth_year = pieces[2];

   if (curr_month == birth_month && curr_date >= birth_date) return parseInt(curr_year-birth_year);
   if (curr_month == birth_month && curr_date < birth_date) return parseInt(curr_year-birth_year-1);
   if (curr_month > birth_month) return parseInt(curr_year-birth_year);
   if (curr_month < birth_month) return parseInt(curr_year-birth_year-1);
}


sbg1 = "<tr><td>";
sbg2 = "<\/td><td>";
sbg3 = "<\/td><td align=\"center\">";
sbg4 = "<\/td><\/tr>";
flc1 = "";


/* Nama Club*/
var namaArsenal		= "Arsenal";
var namaBournemouth	= "Bournemouth";
var namaBurnley		= "Burnley";
var namaChelsea		= "Chelsea";
var namaCrystal 	= "Crystal Palace";
var namaEverton		= "Everton";
var namaHull 		= "Hull City";
var namaLeicester	= "Leicester City";
var namaLiverpool	= "Liverpool";
var namaManCity		= "Manchester City";
var namaManUnited	= "Manchester United";
var namaMiddlesbrough	= "Middlesbrough";
var namaSouthampton	= "Southampton";
var namaStoke 		= "Stoke City";
var namaSunderland	= "Sunderland";
var namaSwansea 	= "Swansea City";
var namaTottenham	= "Tottenham Hotspur";
var namaWatford		= "Watford";
var namaWestBromwich	= "West Bromwich";
var namaWestHam 	= "West Ham United";


/* igur Club*/
var igurArsenal		= "http://4.bp.blogspot.com/-BpO4xnON8Io/U_ITLsoXJ4I/AAAAAAAAAO4/aJhfgQqyv_0/s50/idezia.com%2B-%2BArsenal.png";
var igurBournemouth	= "http://2.bp.blogspot.com/-nKSP94fFNJw/VjWoWkDA7AI/AAAAAAAAAy8/6fICyvcC4Hg/s50/Idezia.com%2B-%2BBornemouth.png";
var igurBurnley		= "http://4.bp.blogspot.com/-079RvtdCNNc/U_ITizuuhOI/AAAAAAAAAPw/eXQzdmx21Y8/s50/idezia.com%2B-%2BBurnley.png";
var igurChelsea		= "http://2.bp.blogspot.com/-t0ENnrMDYSc/U_ITthZJAaI/AAAAAAAAAQI/Cju9_xy8KPw/s50/idezia.com%2B-%2BChelsea.png";
var igurCrystal 	= "http://2.bp.blogspot.com/-4g9dT2y8m9c/U_ITxFzBLcI/AAAAAAAAAQQ/dsQD_GqGAEU/s50/idezia.com%2B-%2BCrystal%2BPalace.png";
var igurEverton		= "http://1.bp.blogspot.com/-zD5AMskGILQ/U_IT3UsSrgI/AAAAAAAAAQg/sjorllDlvGA/s50/idezia.com%2B-%2BEverton.png";
var igurHull 		= "http://4.bp.blogspot.com/-x5G9_DTULE0/U_IT9QnQEUI/AAAAAAAAAQw/S6_IzGXrpfY/s50/idezia.com%2B-%2BHull%2BCity.png";
var igurLeicester	= "http://2.bp.blogspot.com/-H_5_H8dlmk0/U_IUDnE4TmI/AAAAAAAAARA/_pV3O1LYj9c/s50/idezia.com%2B-%2BLeicester.png";
var igurLiverpool	= "http://1.bp.blogspot.com/-gYBPbey3oLY/U_IUIh6d-LI/AAAAAAAAARI/0pL4NRJJKok/s50/idezia.com%2B-%2BLiverpool.png";
var igurManCity		= "http://1.bp.blogspot.com/-3htlgMWdjDc/U_IUL6yW8tI/AAAAAAAAARQ/_YT5qWoKJyQ/s50/idezia.com%2B-%2BManchester%2BCity.png";
var igurManUnited	= "http://1.bp.blogspot.com/-IPkm6KuULOI/U_IUPY6aXBI/AAAAAAAAARY/BUaoSSTcEdI/s50/idezia.com%2B-%2BManchester%2BUnited.png";
var igurMiddlesbrough	= "http://2.bp.blogspot.com/-bkmoryCwsuY/U_IUTt3a-YI/AAAAAAAAARg/RfvnhiSPmro/s50/idezia.com%2B-%2BMiddlesbrough.png";
var igurSouthampton	= "http://2.bp.blogspot.com/-_FyOhKnx0WQ/U_IUpXJednI/AAAAAAAAASQ/LBae-VcF0JE/s50/idezia.com%2B-%2BSouthampton.png";
var igurStoke 		= "http://2.bp.blogspot.com/-fY8CY0yaHRs/U_IUrgIrEBI/AAAAAAAAASY/9UQXqrg04OM/s50/idezia.com%2B-%2BStoke%2BCity.png";
var igurSunderland	= "http://3.bp.blogspot.com/-1tQuOcFm0kI/U_IUukvRQTI/AAAAAAAAASg/SkgvqXOzw7Q/s50/idezia.com%2B-%2BSunderland.png";
var igurSwansea 	= "http://4.bp.blogspot.com/-WzolntsU3EU/U_IUx7hs2DI/AAAAAAAAASo/MOSHfkZ9ypE/s50/idezia.com%2B-%2BSwansea%2BCity.png";
var igurTottenham	= "http://4.bp.blogspot.com/-pfnolC07snU/U_IU0Ob7zyI/AAAAAAAAASw/JovbJENpy4g/s50/idezia.com%2B-%2BTottenham.png";
var igurWatford		= "https://1.bp.blogspot.com/-JrmRz2eNVAc/V1b49oyTJXI/AAAAAAAABvE/c2ALmF6CXikHQ04kDyUbmsJRWPItCt7pwCLcB/s50/Idezia.com%2B-%2BWatford.png";
var igurWestBromwich	= "http://4.bp.blogspot.com/-RCtAc7YuAys/U_IU2B6xLzI/AAAAAAAAAS4/BiAk3UJxRKw/s50/idezia.com%2B-%2BWest%2BBromwich%2BAlbion.png";
var igurWestHam 	= "http://2.bp.blogspot.com/-ldUdKUrPY-s/U_IU6v5pljI/AAAAAAAAATA/kIeL7oe5BHo/s50/idezia.com%2B-%2BWest%2BHam%2BUnited.png";


var linkArs		= "http://www.idezia.com/2016/06/Musim.2016-17.Arsenal.F.C.html?cl=manajer";
var linkBou		= "http://www.idezia.com/2016/06/Musim.2016-17.AFC.Bournemouth.html?cl=manajer";
var linkBur		= "http://www.idezia.com/2016/06/Musim.2016-17.Burnley.F.C.html?cl=manajer";
var linkChe		= "http://www.idezia.com/2016/06/jadwal.pertandingan.chelsea.fc.html?cl=manajer";
var linkCry		= "http://www.idezia.com/2016/06/Musim.2016-17.Crystal.Palace.html?cl=manajer";
var linkEve		= "http://www.idezia.com/2016/06/Musim.2016-17.Everton.F.C.html?cl=manajer";
var linkHul		= "http://www.idezia.com/2016/06/Musim.2016-17.Hull.City.A.F.C.html?cl=manajer";
var linkLei		= "http://www.idezia.com/2016/06/jadwal.pertandingan.leicester.city.fc.html?cl=manajer";
var linkLiv		= "http://www.idezia.com/2016/06/Musim.2016-17.Liverpool.html?cl=manajer";
var linkMci		= "http://www.idezia.com/2016/06/Musim.2016-17.Manchester.City.html?cl=manajer";
var linkMid		= "http://www.idezia.com/2016/06/Musim.2016-17.Middlesbrough.F.C.html?cl=manajer";
var linkMun		= "http://www.idezia.com/2016/06/Musim.2016-17.Manchester.United.html?cl=manajer";
var linkSou		= "http://www.idezia.com/2016/06/Musim.2016-17.Southampton.F.C..html?cl=manajer";
var linkStk		= "http://www.idezia.com/2016/06/Musim.2016-17.Stoke.City.F.C.html?cl=manajer";
var linkSun		= "http://www.idezia.com/2016/06/Musim.2016-17.Sunderland.AFC.html?cl=manajer";
var linkSwa		= "http://www.idezia.com/2016/06/Musim.2016-17.Swansea.City.A.F.C.html?cl=manajer";
var linkTot		= "http://www.idezia.com/2016/06/jadwal.pertandingan.tottenham.hotspur.html?cl=manajer";
var linkWat		= "http://www.idezia.com/2016/06/Musim.2016-17.Watford.F.C.html?cl=manajer";
var linkWba		= "http://www.idezia.com/2016/06/Musim.2016-17.West.Bromwich.Albion.html?cl=manajer";
var linkWhu		= "http://www.idezia.com/2016/06/Musim.2016-17.West.Ham.United.html?cl=manajer";


/* Image */
var imgeArs		= "<img alt=\"Logo Club "+namaArsenal+"\" src=\""+igurArsenal+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeBou		= "<img alt=\"Logo Club "+namaBournemouth+"\" src=\""+igurBournemouth+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeBur		= "<img alt=\"Logo Club "+namaBurnley+"\" src=\""+igurBurnley+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeChe		= "<img alt=\"Logo Club "+namaChelsea+"\" src=\""+igurChelsea+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeCry		= "<img alt=\"Logo Club "+namaCrystal+"\" src=\""+igurCrystal+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeEve		= "<img alt=\"Logo Club "+namaEverton+"\" src=\""+igurEverton+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeHul		= "<img alt=\"Logo Club "+namaHull+"\" src=\""+igurHull+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeLei		= "<img alt=\"Logo Club "+namaLeicester+"\" src=\""+igurLeicester+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeLiv		= "<img alt=\"Logo Club "+namaLiverpool+"\" src=\""+igurLiverpool+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeMci		= "<img alt=\"Logo Club "+namaManCity+"\" src=\""+igurManCity+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeMun		= "<img alt=\"Logo Club "+namaManUnited+"\" src=\""+igurManUnited+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeMid		= "<img alt=\"Logo Club "+namaMiddlesbrough+"\" src=\""+igurMiddlesbrough+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeSou		= "<img alt=\"Logo Club "+namaSouthampton+"\" src=\""+igurSouthampton+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeStk		= "<img alt=\"Logo Club "+namaStoke+"\" src=\""+igurStoke+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeSun		= "<img alt=\"Logo Club "+namaSunderland+"\" src=\""+igurSunderland+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeSwa		= "<img alt=\"Logo Club "+namaSwansea+"\" src=\""+igurSwansea+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeTot		= "<img alt=\"Logo Club "+namaTottenham+"\" src=\""+igurTottenham+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeWat		= "<img alt=\"Logo Club "+namaWatford+"\" src=\""+igurWatford+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeWba		= "<img alt=\"Logo Club "+namaWestBromwich+"\" src=\""+igurWestBromwich+"\" style=\"border-style: none;vertical-align:middle;\" \/>";
var imgeWhu		= "<img alt=\"Logo Club "+namaWestHam+"\" src=\""+igurWestHam+"\" style=\"border-style: none;vertical-align:middle;\" \/>";


/* Club*/
var clubArs		= "<a href=\""+linkArs+"\">"+namaArsenal+"<\/a>";
var clubBou		= "<a href=\""+linkBou+"\">"+namaBournemouth+"<\/a>";
var clubBur		= "<a href=\""+linkBur+"\">"+namaBurnley+"<\/a>";
var clubChe		= "<a href=\""+linkChe+"\">"+namaChelsea+"<\/a>";
var clubCry		= "<a href=\""+linkCry+"\">"+namaCrystal+"<\/a>";
var clubEve		= "<a href=\""+linkEve+"\">"+namaEverton+"<\/a>";
var clubHul		= "<a href=\""+linkHul+"\">"+namaHull+"<\/a>";
var clubLei		= "<a href=\""+linkLei+"\">"+namaLeicester+"<\/a>";
var clubLiv		= "<a href=\""+linkLiv+"\">"+namaLiverpool+"<\/a>";
var clubMci		= "<a href=\""+linkMci+"\">"+namaManCity+"<\/a>";
var clubMun		= "<a href=\""+linkMun+"\">"+namaManUnited+"<\/a>";
var clubMid		= "<a href=\""+linkMid+"\">"+namaMiddlesbrough+"<\/a>";
var clubSou		= "<a href=\""+linkSou+"\">"+namaSouthampton+"<\/a>";
var clubStk		= "<a href=\""+linkStk+"\">"+namaStoke+"<\/a>";
var clubSun		= "<a href=\""+linkSun+"\">"+namaSunderland+"<\/a>";
var clubSwa		= "<a href=\""+linkSwa+"\">"+namaSwansea+"<\/a>";
var clubTot		= "<a href=\""+linkTot+"\">"+namaTottenham+"<\/a>";
var clubWat		= "<a href=\""+linkWat+"\">"+namaWatford+"<\/a>";
var clubWba		= "<a href=\""+linkWba+"\">"+namaWestBromwich+"<\/a>";
var clubWhu		= "<a href=\""+linkWhu+"\">"+namaWestHam+"<\/a>";


/* mnjr*/
var mnjrArs		= "<b>Arsene Wenger<\/b>";
var mnjrBou		= "<b>Eddie Howe<\/b>";
var mnjrBur		= "<b>Sean Dyche<\/b>";
var mnjrChe		= "<b>Pep Guardiola<\/b>";
var mnjrCry		= "<b>Alan Pardew<\/b>";
var mnjrEve		= "<b>Ronald Koeman<\/b>";
var mnjrHul		= "<b>Mike Phelan<\/b><br>(<i>caretaker<\/i>)";
var mnjrLei		= "<b>Claudio Ranieri<\/b>";
var mnjrLiv		= "<b>Jurgen Klopp<\/b>";
var mnjrMci		= "<b>Manuel Pellegrini<\/b>";
var mnjrMun		= "<b>Jose Mourinho<\/b>";
var mnjrMid		= "<b>Aitor Karanka<\/b>";
var mnjrSou		= "<b>Claude Puel<\/b>";
var mnjrStk		= "<b>Mark Hughes<\/b>";
var mnjrSun		= "<b>David Moyes<\/b>";
var mnjrSwa		= "<b>Francesco Guidolin<\/b>";
var mnjrTot		= "<b>Mauricio Pochettino<\/b>";
var mnjrWat		= "<b>Walter Mazzarri<\/b>";
var mnjrWba		= "<b>Tony Pulis<\/b>";
var mnjrWhu		= "<b>Slaven Bilic<\/b>";


/* ntmj*/
var ntmjArs		= ""+flg1fra+" "+neg1fra+"";
var ntmjBou		= ""+flg1eng+" "+neg1eng+"";
var ntmjBur		= ""+flg1eng+" "+neg1eng+"";
var ntmjChe		= ""+flg1esp+" "+neg1esp+"";
var ntmjCry		= ""+flg1eng+" "+neg1eng+"";
var ntmjEve		= ""+flg1ned+" "+neg1ned+"";
var ntmjHul		= ""+flg1eng+" "+neg1eng+"";
var ntmjLei		= ""+flg1ita+" "+neg1ita+"";
var ntmjLiv		= ""+flg1ger+" "+neg1ger+"";
var ntmjMci		= ""+flg1chi+" "+neg1chi+"";
var ntmjMun		= ""+flg1por+" "+neg1por+"";
var ntmjMid		= ""+flg1esp+" "+neg1esp+"";
var ntmjSou		= ""+flg1fra+" "+neg1fra+"";
var ntmjStk		= ""+flg1wal+" "+neg1wal+"";
var ntmjSun		= ""+flg1sco+" "+neg1sco+"";
var ntmjSwa		= ""+flg1ita+" "+neg1ita+"";
var ntmjTot		= ""+flg1arg+" "+neg1arg+"";
var ntmjWat		= ""+flg1ita+" "+neg1ita+"";
var ntmjWba		= ""+flg1wal+" "+neg1wal+"";
var ntmjWhu		= ""+flg1cro+" "+neg1cro+"";


/* bdmj*/
var bdmjArs		= "22/10/1949";
var bdmjBou		= "29/11/1977";
var bdmjBur		= "28/06/1971";
var bdmjChe		= "18/01/1971";
var bdmjCry		= "18/07/1961";
var bdmjEve		= "21/03/1963";
var bdmjHul		= "24/09/1962";
var bdmjLei		= "20/10/1951";
var bdmjLiv		= "16/06/1967";
var bdmjMci		= "16/09/1953";
var bdmjMun		= "26/01/1963";
var bdmjMid		= "18/09/1973";
var bdmjSou		= "02/09/1961";
var bdmjStk		= "01/11/1963";
var bdmjSun		= "25/04/1963";
var bdmjSwa		= "03/10/1955";
var bdmjTot		= "02/03/1972";
var bdmjWat		= "01/10/1961";
var bdmjWba		= "16/01/1958";
var bdmjWhu		= "11/09/1968";


/* frmj*/
var frmjArs		= "22/09/1996";
var frmjBou		= "12/10/2012";
var frmjBur		= "30/10/2012";
var frmjChe		= "01/07/2016";
var frmjCry		= "03/01/2015";
var frmjEve		= "14/06/2016";
var frmjHul		= "-";
var frmjLei		= "13/07/2015";
var frmjLiv		= "08/10/2015";
var frmjMci		= "14/06/2013";
var frmjMun		= "27/05/2016";
var frmjMid		= "13/11/2013";
var frmjSou		= "30/06/2016";
var frmjStk		= "30/05/2013";
var frmjSun		= "23/07/2016";
var frmjSwa		= "18/01/2016";
var frmjTot		= "27/05/2014";
var frmjWat		= "01/07/2016";
var frmjWba		= "01/01/2015";
var frmjWhu		= "09/05/2015";


/* ftmj*/
var ftmjArs		= "https://1.bp.blogspot.com/-8uEyAYAPMoA/V3AipBjAEAI/AAAAAAAACfI/-Mv_hm3ZzLYn0QKGRjiLq3_w6RSWFIYjQCLcB/s1600/Ars-Arsene_Wenger.jpeg";
var ftmjBou		= "https://4.bp.blogspot.com/-9P1dJO7f-wY/V3AipI1EFcI/AAAAAAAACfQ/E0BLsC-e4uM1yar748bsVxEvAvZlfmMQwCLcB/s1600/Bou-Eddie_Howe.jpg";
var ftmjBur		= "https://4.bp.blogspot.com/-UdXwadt8MIU/V3AipEbMJ7I/AAAAAAAACfM/E0YLVufnRnQBxM7-vOcBJLuhbduM451twCLcB/s1600/Bur-Sean_Dyche.jpg";
var ftmjChe		= "https://1.bp.blogspot.com/-I-s2Mdd29tA/V3AipuawVII/AAAAAAAACfU/cCaAhFbLjLw3KF92GFN1hUtt9_iYjFVwwCLcB/s1600/Che-Pep_Guardiola.jpg";
var ftmjCry		= "https://3.bp.blogspot.com/-x1Kl8DYrFes/V3AipumJ-SI/AAAAAAAACfc/_5PFsbVzNyY6KII7niIUhxjA8Y2klcKFQCLcB/s1600/Cry-Alan_Pardew.jpg";
var ftmjEve		= "https://1.bp.blogspot.com/-9FrhERmKk0k/V3AipiRZyyI/AAAAAAAACfY/U8Ab3-6WKHEFnbSgacCq_a85vVYedp9jQCLcB/s1600/Eve-Ronald_Koeman.jpg";
var ftmjHul		= "https://1.bp.blogspot.com/-VgcvgMNcgJU/V69HrFYzHoI/AAAAAAAADa0/k9zuwWAjD9gRCkXqIS3GS1rPe0NicNp6ACLcB/s1600/Mike%2BPhelan.jpg";
var ftmjLei		= "https://4.bp.blogspot.com/-liuEH5PJapg/V3AiqQkmjxI/AAAAAAAACfo/M0UXQFh3ikYhfPRbBu37KGA3hWQCUojvQCLcB/s1600/Lei-Claudio_Ranieri.jpg";
var ftmjLiv		= "https://1.bp.blogspot.com/-sXyUe91Ckck/V3AiqWrfdQI/AAAAAAAACfk/E8FWAXLwIxYEIPo4lF4DhNwaGkL7fohywCLcB/s1600/Liv-J%25C3%25BCrgen_Klopp.jpg";
var ftmjMci		= "https://4.bp.blogspot.com/-7Lq8M8O8vKU/V3Aiq_wc4cI/AAAAAAAACfs/C-EwNE60mVE83lk-SCGiVZJZBV6YS1C-QCLcB/s1600/Mci-Manuel_Pallegrini.jpg";
var ftmjMun		= "https://2.bp.blogspot.com/-N6lzV_E-1rk/V3Aiq6HOuHI/AAAAAAAACf0/maAldXxOPhUGx93Q14Jxzo5Y1o6nxfJbACLcB/s1600/Mun-Jose_Mourinho.jpg";
var ftmjMid		= "https://1.bp.blogspot.com/-IAdCyQGazKE/V3Aiq9cLp4I/AAAAAAAACfw/Zo_aXL4YuccBd20LonBFVhIptQblJNApQCLcB/s1600/Mid-Aitor_Karanka.jpg";
var ftmjSou		= "https://1.bp.blogspot.com/-zCVbz6CvZfQ/V4T16D4ZkrI/AAAAAAAACw8/ISk9LSBbvlswNnvJJRELhLIZHBMpNTMuwCLcB/s1600/Sou-Claude_Puel.jpg";
var ftmjStk		= "https://4.bp.blogspot.com/-mjxD-VgXyK8/V3Airo2aGQI/AAAAAAAACf8/5xAAq5NvtRYOTodZ0_1ZfXUwTHeOOwkHQCLcB/s1600/Stk-Mark_Hughes.jpg";
var ftmjSun		= "https://3.bp.blogspot.com/-Se46Zc-C_uo/V5OdJmdUJnI/AAAAAAAADAI/qhsMYDCZXdsD6UmOmH8zHXfeFymp7vo8ACLcB/s1600/Sun-David_Moyes.jpg";
var ftmjSwa		= "https://4.bp.blogspot.com/-6lWB4ZQVavg/V3Air_DM66I/AAAAAAAACgA/od37Na7Lwu0XUOj1cxgX33gyw63ZgzE-QCLcB/s1600/Swa-Francesco_Guidolin.jpg";
var ftmjTot		= "https://1.bp.blogspot.com/-JCW__xD0fSI/V3AiscS7agI/AAAAAAAACgM/ktKDBJPWsFcjlL1VNrm12ttVZtYNSN8ugCLcB/s1600/Tot-Mauricio_Pochettino.jpg";
var ftmjWat		= "https://2.bp.blogspot.com/-9hhBpFNHD5A/V3Aisch4vpI/AAAAAAAACgE/nFr5TK2hOCYyEbw-CJoFrYfvB1RdGibLgCLcB/s1600/Wat-Walter_Mazzarri.jpg";
var ftmjWba		= "https://3.bp.blogspot.com/-frRcJ_2u1vE/V3AisjvuQmI/AAAAAAAACgI/DdRT55ybqfoMo-QB1VXQSOCqgJHyhsC3QCLcB/s1600/Wba-Tony_Pulis.jpg";
var ftmjWhu		= "https://2.bp.blogspot.com/--8wBYsJMmXg/V3AitDi1-YI/AAAAAAAACgQ/F-ZHFH-L4YMkCx9H3YcsV4bXV-2-QeGpACLcB/s1600/Whu-Slaven_Bilic.jpg";


/* agmj*/
var agmjArs		= getAge(bdmjArs);
var agmjBou		= getAge(bdmjBou);
var agmjBur		= getAge(bdmjBur);
var agmjChe		= getAge(bdmjChe);
var agmjCry		= getAge(bdmjCry);
var agmjEve		= getAge(bdmjEve);
var agmjHul		= getAge(bdmjHul);
var agmjLei		= getAge(bdmjLei);
var agmjLiv		= getAge(bdmjLiv);
var agmjMci		= getAge(bdmjMci);
var agmjMun		= getAge(bdmjMun);
var agmjMid		= getAge(bdmjMid);
var agmjSou		= getAge(bdmjSou);
var agmjStk		= getAge(bdmjStk);
var agmjSun		= getAge(bdmjSun);
var agmjSwa		= getAge(bdmjSwa);
var agmjTot		= getAge(bdmjTot);
var agmjWat		= getAge(bdmjWat);
var agmjWba		= getAge(bdmjWba);
var agmjWhu		= getAge(bdmjWhu);



/* lpmj */
var lpmjArs		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaArsenal+"\" src=\""+ftmjArs+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjBou		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaBournemouth+"\" src=\""+ftmjBou+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjBur		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaBurnley+"\" src=\""+ftmjBur+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjChe		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaChelsea+"\" src=\""+ftmjChe+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjCry		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaCrystal+"\" src=\""+ftmjCry+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjEve		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaEverton+"\" src=\""+ftmjEve+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjHul		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaHull+"\" src=\""+ftmjHul+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjLei		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaLeicester+"\" src=\""+ftmjLei+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjLiv		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaLiverpool+"\" src=\""+ftmjLiv+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjMci		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaManCity+"\" src=\""+ftmjMci+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjMun		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaManUnited+"\" src=\""+ftmjMun+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjMid		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaMiddlesbrough+"\" src=\""+ftmjMid+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjSou		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaSouthampton+"\" src=\""+ftmjSou+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjStk		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaStoke+"\" src=\""+ftmjStk+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjSun		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaSunderland+"\" src=\""+ftmjSun+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjSwa		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaSwansea+"\" src=\""+ftmjSwa+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjTot		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaTottenham+"\" src=\""+ftmjTot+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjWat		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaWatford+"\" src=\""+ftmjWat+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjWba		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaWestBromwich+"\" src=\""+ftmjWba+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjWhu		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaWestHam+"\" src=\""+ftmjWhu+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";



/* tdmj*/
var tdmjArs		= ""+sbg1+""+imgeArs+" "+clubArs+""+sbg2+""+lpmjArs+" "+mnjrArs+""+sbg2+""+ntmjArs+""+sbg3+""+frmjArs+""+sbg3+""+bdmjArs+" ("+agmjArs+")"+sbg4+"";
var tdmjBou		= ""+sbg1+""+imgeBou+" "+clubBou+""+sbg2+""+lpmjBou+" "+mnjrBou+""+sbg2+""+ntmjBou+""+sbg3+""+frmjBou+""+sbg3+""+bdmjBou+" ("+agmjBou+")"+sbg4+"";
var tdmjBur		= ""+sbg1+""+imgeBur+" "+clubBur+""+sbg2+""+lpmjBur+" "+mnjrBur+""+sbg2+""+ntmjBur+""+sbg3+""+frmjBur+""+sbg3+""+bdmjBur+" ("+agmjBur+")"+sbg4+"";
var tdmjChe		= ""+sbg1+""+imgeChe+" "+clubChe+""+sbg2+""+lpmjChe+" "+mnjrChe+""+sbg2+""+ntmjChe+""+sbg3+""+frmjChe+""+sbg3+""+bdmjChe+" ("+agmjChe+")"+sbg4+"";
var tdmjCry		= ""+sbg1+""+imgeCry+" "+clubCry+""+sbg2+""+lpmjCry+" "+mnjrCry+""+sbg2+""+ntmjCry+""+sbg3+""+frmjCry+""+sbg3+""+bdmjCry+" ("+agmjCry+")"+sbg4+"";
var tdmjEve		= ""+sbg1+""+imgeEve+" "+clubEve+""+sbg2+""+lpmjEve+" "+mnjrEve+""+sbg2+""+ntmjEve+""+sbg3+""+frmjEve+""+sbg3+""+bdmjEve+" ("+agmjEve+")"+sbg4+"";
var tdmjHul		= ""+sbg1+""+imgeHul+" "+clubHul+""+sbg2+""+lpmjHul+" "+mnjrHul+""+sbg2+""+ntmjHul+""+sbg3+""+frmjHul+""+sbg3+""+bdmjHul+" ("+agmjHul+")"+sbg4+"";
var tdmjLei		= ""+sbg1+""+imgeLei+" "+clubLei+""+sbg2+""+lpmjLei+" "+mnjrLei+""+sbg2+""+ntmjLei+""+sbg3+""+frmjLei+""+sbg3+""+bdmjLei+" ("+agmjLei+")"+sbg4+"";
var tdmjLiv		= ""+sbg1+""+imgeLiv+" "+clubLiv+""+sbg2+""+lpmjLiv+" "+mnjrLiv+""+sbg2+""+ntmjLiv+""+sbg3+""+frmjLiv+""+sbg3+""+bdmjLiv+" ("+agmjLiv+")"+sbg4+"";
var tdmjMci		= ""+sbg1+""+imgeMci+" "+clubMci+""+sbg2+""+lpmjMci+" "+mnjrMci+""+sbg2+""+ntmjMci+""+sbg3+""+frmjMci+""+sbg3+""+bdmjMci+" ("+agmjMci+")"+sbg4+"";
var tdmjMun		= ""+sbg1+""+imgeMun+" "+clubMun+""+sbg2+""+lpmjMun+" "+mnjrMun+""+sbg2+""+ntmjMun+""+sbg3+""+frmjMun+""+sbg3+""+bdmjMun+" ("+agmjMun+")"+sbg4+"";
var tdmjMid		= ""+sbg1+""+imgeMid+" "+clubMid+""+sbg2+""+lpmjMid+" "+mnjrMid+""+sbg2+""+ntmjMid+""+sbg3+""+frmjMid+""+sbg3+""+bdmjMid+" ("+agmjMid+")"+sbg4+"";
var tdmjSou		= ""+sbg1+""+imgeSou+" "+clubSou+""+sbg2+""+lpmjSou+" "+mnjrSou+""+sbg2+""+ntmjSou+""+sbg3+""+frmjSou+""+sbg3+""+bdmjSou+" ("+agmjSou+")"+sbg4+"";
var tdmjStk		= ""+sbg1+""+imgeStk+" "+clubStk+""+sbg2+""+lpmjStk+" "+mnjrStk+""+sbg2+""+ntmjStk+""+sbg3+""+frmjStk+""+sbg3+""+bdmjStk+" ("+agmjStk+")"+sbg4+"";
var tdmjSun		= ""+sbg1+""+imgeSun+" "+clubSun+""+sbg2+""+lpmjSun+" "+mnjrSun+""+sbg2+""+ntmjSun+""+sbg3+""+frmjSun+""+sbg3+""+bdmjSun+" ("+agmjSun+")"+sbg4+"";
var tdmjSwa		= ""+sbg1+""+imgeSwa+" "+clubSwa+""+sbg2+""+lpmjSwa+" "+mnjrSwa+""+sbg2+""+ntmjSwa+""+sbg3+""+frmjSwa+""+sbg3+""+bdmjSwa+" ("+agmjSwa+")"+sbg4+"";
var tdmjTot		= ""+sbg1+""+imgeTot+" "+clubTot+""+sbg2+""+lpmjTot+" "+mnjrTot+""+sbg2+""+ntmjTot+""+sbg3+""+frmjTot+""+sbg3+""+bdmjTot+" ("+agmjTot+")"+sbg4+"";
var tdmjWat		= ""+sbg1+""+imgeWat+" "+clubWat+""+sbg2+""+lpmjWat+" "+mnjrWat+""+sbg2+""+ntmjWat+""+sbg3+""+frmjWat+""+sbg3+""+bdmjWat+" ("+agmjWat+")"+sbg4+"";
var tdmjWba		= ""+sbg1+""+imgeWba+" "+clubWba+""+sbg2+""+lpmjWba+" "+mnjrWba+""+sbg2+""+ntmjWba+""+sbg3+""+frmjWba+""+sbg3+""+bdmjWba+" ("+agmjWba+")"+sbg4+"";
var tdmjWhu		= ""+sbg1+""+imgeWhu+" "+clubWhu+""+sbg2+""+lpmjWhu+" "+mnjrWhu+""+sbg2+""+ntmjWhu+""+sbg3+""+frmjWhu+""+sbg3+""+bdmjWhu+" ("+agmjWhu+")"+sbg4+"";

var mnjrlist		= ""+tdmjArs+""+tdmjBou+""+tdmjBur+""+tdmjChe+""+tdmjCry+""+tdmjEve+""+tdmjHul+""+tdmjLei+""+tdmjLiv+""+tdmjMci+""+tdmjMun+""+tdmjMid+""+tdmjSou+""+tdmjStk+""+tdmjSun+""+tdmjSwa+""+tdmjTot+""+tdmjWat+""+tdmjWba+""+tdmjWhu+"";