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
var namaAlaves		= "Alaves";
var namaAthleticBilbao	= "Athletic Bilbao";
var namaAtleticoMadrid	= "Atletico Madrid";
var namaBarcelona	= "Barcelona";
var namaCeltaVigo	= "Celta Vigo";
var namaDeportivo	= "Deportivo L.C.";
var namaEibar		= "Eibar";
var namaEspanyol	= "Espanyol";
var namaGranada		= "Granada";
var namaLasPalmas	= "Las Palmas";
var namaLeganes		= "Leganes";
var namaMalaga		= "Malaga";
var namaOsasuna		= "Osasuna";
var namaRealBetis	= "Real Betis";
var namaRealMadrid	= "Real Madrid";
var namaRealSociedad	= "Real Sociedad";
var namaSevilla		= "Sevilla";
var namaSportingGijon	= "Sporting Gijon";
var namaValencia	= "Valencia";
var namaVillarreal	= "Villarreal";


/* link Club*/
var linkAlaves		= "http://www.idezia.com/2016/06/Deportivo.Alaves.2016-17.Jadwal.dan.Hasil.html?cl=manajer";
var linkAthleticBilbao	= "http://www.idezia.com/2016/06/Athletic.Bilbao.html?cl=manajer";
var linkAtleticoMadrid	= "http://www.idezia.com/2016/06/Musim.2016-17.Atletico.Madrid.html?cl=manajer";
var linkBarcelona	= "http://www.idezia.com/2016/06/FC.Barcelona.html?cl=manajer";
var linkCeltaVigo	= "http://www.idezia.com/2016/06/Musim.2016-17.Celta.Vigo.html?cl=manajer";
var linkDeportivo	= "http://www.idezia.com/2016/06/Deportivo.La.Coruna.2016-17.Jadwal.dan.Hasil.html?cl=manajer";
var linkEibar		= "http://www.idezia.com/2016/06/S.D.Eibar.2016-17.Jadwal.dan.Hasil.html?cl=manajer";
var linkEspanyol	= "http://www.idezia.com/2016/06/R.C.D.Espanyol.2016-17.Jadwal.dan.Hasil.html?cl=manajer";
var linkGranada		= "http://www.idezia.com/2016/06/Granada.C.F.2016-17.Jadwal.dan.Hasil.html?cl=manajer";
var linkLasPalmas	= "http://www.idezia.com/2016/06/UD.Las.Palmas.2016-17.Jadwal.dan.Hasil.html?cl=manajer";
var linkLeganes		= "http://www.idezia.com/2016/06/C.D.Leganes.2016-17.Jadwal.dan.Hasil.html?cl=manajer";
var linkMalaga		= "http://www.idezia.com/2016/06/Malaga.C.F.2016-17.Jadwal.dan.Hasil.html?cl=manajer";
var linkOsasuna		= "http://www.idezia.com/2016/06/C.A.Osasuna.2016-17.Jadwal.dan.Hasil.html?cl=manajer";
var linkRealBetis	= "http://www.idezia.com/2016/06/Real.Betis.2016-17.Jadwal.dan.Hasil.html?cl=manajer";
var linkRealMadrid	= "http://www.idezia.com/2016/06/Real.Madrid.C.F.html?cl=manajer";
var linkRealSociedad	= "http://www.idezia.com/2016/06/Real.Sociedad.html?cl=manajer";
var linkSevilla		= "http://www.idezia.com/2016/06/Musim.2016-17.Sevilla.F.C.html?cl=manajer";
var linkSportingGijon	= "http://www.idezia.com/2016/06/jadwal-hasil-pertandingan-sporting-de.html?cl=manajer";
var linkValencia	= "http://www.idezia.com/2016/06/Valencia.C.F.html?cl=manajer";
var linkVillarreal	= "http://www.idezia.com/2016/06/Musim.2016-17.Villareal.C.F.html?cl=manajer";


/* igur Club*/
var igurAlaves		= "http://4.bp.blogspot.com/-t6VRmnoSzgA/VJwxWCpqeZI/AAAAAAAAAa0/B40f5W-ekDw/s50/Idezia.com%2B-%2BDeportivo%2BAlav%C3%A9s.png";
var igurAthleticBilbao	= "http://4.bp.blogspot.com/-W6cNaQ4KiLo/VJwxS_C5OgI/AAAAAAAAAZQ/uAPaN4pdSHI/s50/Idezia.com%2B-%2BAthletic%2BClub%2BBilbao.png";
var igurAtleticoMadrid	= "http://4.bp.blogspot.com/-2cgiyULymyQ/VJwxTK3E1RI/AAAAAAAAAZU/uNQdAMwoHs8/s50/Idezia.com%2B-%2BAtletico%2BMadrid.png";
var igurBarcelona	= "http://4.bp.blogspot.com/-T1TLLG4USQE/VJwxUBCkR4I/AAAAAAAAAZk/BD3_IaMhbso/s50/Idezia.com%2B-%2BBarcelona.png";
var igurCeltaVigo	= "http://3.bp.blogspot.com/-As0aRsAt69A/VJwxUQAhAII/AAAAAAAAAZo/K651Op1aBFM/s50/Idezia.com%2B-%2BCelta%2Bde%2BVigo.png";
var igurDeportivo	= "http://3.bp.blogspot.com/-0sZR_g3FPo0/VJwxWpKZzlI/AAAAAAAAAZ8/5EbQHUw-GiI/s50/Idezia.com%2B-%2BDeportivo%2BLa%2BCoru%C3%B1a.png";
var igurEibar		= "http://3.bp.blogspot.com/-Z2vLcIlGHes/VJwxXOF8fOI/AAAAAAAAAaI/bjcJZsdwChQ/s50/Idezia.com%2B-%2BEibar.png";
var igurEspanyol	= "http://1.bp.blogspot.com/--zCRn72uZ5I/VJwxYXl_6YI/AAAAAAAAAaY/Xk-X_CX4ju8/s50/Idezia.com%2B-%2BEspanyol.png";
var igurGranada		= "http://2.bp.blogspot.com/-gqiv3gIQGIk/VJwxZhX30AI/AAAAAAAAAaw/ruDWlCTBKtY/s50/Idezia.com%2B-%2BGranada.png";
var igurLasPalmas	= "http://4.bp.blogspot.com/-mgldImsTz4Y/VJwxaQ89GqI/AAAAAAAAAa4/hu2aw3a7hvM/s50/Idezia.com%2B-%2BLas%2BPalmas.png";
var igurLeganes		= "https://1.bp.blogspot.com/-1IE3qcNQ6tg/V1fuw16h_MI/AAAAAAAABvU/EgN7cvf6Hf8BY2DGUXXDpxrGLY-fnZmEACLcB/s50/Idezia.com%2B-%2BLeganes.png";
var igurMalaga		= "http://2.bp.blogspot.com/-DLEuIr4Ml6U/VJwxcIAPyiI/AAAAAAAAAbU/WlOUmIdIJKQ/s50/Idezia.com%2B-%2BM%C3%A1laga.png";
var igurOsasuna		= "http://2.bp.blogspot.com/-KJ3LcWfLZ5M/VJwxdPWHGWI/AAAAAAAAAbc/7PKUzH5vO5M/s50/Idezia.com%2B-%2BOsasuna.png";
var igurRealBetis	= "http://4.bp.blogspot.com/-4V3X-tL8JLA/VJwxezKO3-I/AAAAAAAAAcU/--DOtGa7AMc/s50/Idezia.com%2B-%2BReal%2BBetis.png";
var igurRealMadrid	= "http://3.bp.blogspot.com/-zqCyJkSQUIk/VJwxfW2Zv4I/AAAAAAAAAcE/o7lI3ILBp00/s50/Idezia.com%2B-%2BReal%2BMadrid.png";
var igurRealSociedad	= "http://3.bp.blogspot.com/-kPhMa0iAoWU/VJwxgQeJC8I/AAAAAAAAAcc/YBfECRwsGSs/s50/Idezia.com%2B-%2BReal%2BSociedad.png";
var igurSevilla		= "http://1.bp.blogspot.com/-49dAqw5s4E0/VJwxi0XcL3I/AAAAAAAAAc8/cUVFoOjANz4/s50/Idezia.com%2B-%2BSevilla.png";
var igurSportingGijon	= "http://3.bp.blogspot.com/-GSlb0F8ltLc/VJwxjEUY1ZI/AAAAAAAAAdA/uwR0pyPFgC8/s50/Idezia.com%2B-%2BSporting%2BGijon.png";
var igurValencia	= "http://1.bp.blogspot.com/-BRC7cY_aszI/VJwxkG_opKI/AAAAAAAAAdQ/y0k3ks_h8B8/s50/Idezia.com%2B-%2BValencia.png";
var igurVillarreal	= "http://1.bp.blogspot.com/-YKaTIuJF-zw/VJwxk0ryhCI/AAAAAAAAAdk/8Mfl1-QMA58/s50/Idezia.com%2B-%2BVillarreal.png";


/* Image */
var imgeAla		= "<img alt=\"Logo Club "+namaAlaves+"\" src=\""+igurAlaves+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeBil		= "<img alt=\"Logo Club "+namaAthleticBilbao+"\" src=\""+igurAthleticBilbao+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeAtl		= "<img alt=\"Logo Club "+namaAtleticoMadrid+"\" src=\""+igurAtleticoMadrid+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeBar		= "<img alt=\"Logo Club "+namaBarcelona+"\" src=\""+igurBarcelona+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeCel		= "<img alt=\"Logo Club "+namaCeltaVigo+"\" src=\""+igurCeltaVigo+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeDep		= "<img alt=\"Logo Club "+namaDeportivo+"\" src=\""+igurDeportivo+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeEib		= "<img alt=\"Logo Club "+namaEibar+"\" src=\""+igurEibar+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeEsp		= "<img alt=\"Logo Club "+namaEspanyol+"\" src=\""+igurEspanyol+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeGra		= "<img alt=\"Logo Club "+namaGranada+"\" src=\""+igurGranada+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeLas		= "<img alt=\"Logo Club "+namaLasPalmas+"\" src=\""+igurLasPalmas+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeLeg		= "<img alt=\"Logo Club "+namaLeganes+"\" src=\""+igurLeganes+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeMal		= "<img alt=\"Logo Club "+namaMalaga+"\" src=\""+igurMalaga+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeOsa		= "<img alt=\"Logo Club "+namaOsasuna+"\" src=\""+igurOsasuna+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeBet		= "<img alt=\"Logo Club "+namaRealBetis+"\" src=\""+igurRealBetis+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeMad		= "<img alt=\"Logo Club "+namaRealMadrid+"\" src=\""+igurRealMadrid+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeSoc		= "<img alt=\"Logo Club "+namaRealSociedad+"\" src=\""+igurRealSociedad+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeSev		= "<img alt=\"Logo Club "+namaSevilla+"\" src=\""+igurSevilla+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeSpo		= "<img alt=\"Logo Club "+namaSportingGijon+"\" src=\""+igurSportingGijon+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeVal		= "<img alt=\"Logo Club "+namaValencia+"\" src=\""+igurValencia+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeVil		= "<img alt=\"Logo Club "+namaVillarreal+"\" src=\""+igurVillarreal+"\" style=\"border-style: none; vertical-align:middle;\" >";


/* Club*/
var clubAla		= "<a href=\""+linkAlaves+"\">"+namaAlaves+"<\/a>";
var clubBil		= "<a href=\""+linkAthleticBilbao+"\">"+namaAthleticBilbao+"<\/a>";
var clubAtl		= "<a href=\""+linkAtleticoMadrid+"\">"+namaAtleticoMadrid+"<\/a>";
var clubBar		= "<a href=\""+linkBarcelona+"\">"+namaBarcelona+"<\/a>";
var clubCel		= "<a href=\""+linkCeltaVigo+"\">"+namaCeltaVigo+"<\/a>";
var clubDep		= "<a href=\""+linkDeportivo+"\">"+namaDeportivo+"<\/a>";
var clubEib		= "<a href=\""+linkEibar+"\">"+namaEibar+"<\/a>";
var clubEsp		= "<a href=\""+linkEspanyol+"\">"+namaEspanyol+"<\/a>";
var clubGra		= "<a href=\""+linkGranada+"\">"+namaGranada+"<\/a>";
var clubLas		= "<a href=\""+linkLasPalmas+"\">"+namaLasPalmas+"<\/a>";
var clubLeg		= "<a href=\""+linkLeganes+"\">"+namaLeganes+"<\/a>";
var clubMal		= "<a href=\""+linkMalaga+"\">"+namaMalaga+"<\/a>";
var clubOsa		= "<a href=\""+linkOsasuna+"\">"+namaOsasuna+"<\/a>";
var clubBet		= "<a href=\""+linkRealBetis+"\">"+namaRealBetis+"<\/a>";
var clubMad		= "<a href=\""+linkRealMadrid+"\">"+namaRealMadrid+"<\/a>";
var clubSoc		= "<a href=\""+linkRealSociedad+"\">"+namaRealSociedad+"<\/a>";
var clubSev		= "<a href=\""+linkSevilla+"\">"+namaSevilla+"<\/a>";
var clubSpo		= "<a href=\""+linkSportingGijon+"\">"+namaSportingGijon+"<\/a>";
var clubVal		= "<a href=\""+linkValencia+"\">"+namaValencia+"<\/a>";
var clubVil		= "<a href=\""+linkVillarreal+"\">"+namaVillarreal+"<\/a>";


/* mnjr */
var mnjrAla		= "<b>Mauricio Pellegrino<\/b>";
var mnjrBil		= "<b>Ernesto Valverde<\/b>";
var mnjrAtl		= "<b>Diego Simeone<\/b>";
var mnjrBar		= "<b>Luis Enrique<\/b>";
var mnjrCel		= "<b>Eduardo Berizzo<\/b>";
var mnjrDep		= "<b>Gaizka Garitano<\/b>";
var mnjrEib		= "<b>Jose Luis Mendilibar<\/b>";
var mnjrEsp		= "<b>Quique Sanchez F.<\/b>";
var mnjrGra		= "<b>Paco Jemez<\/b>";
var mnjrLas		= "<b>Quique Setién<\/b>";
var mnjrLeg		= "<b>Asier Garitano<\/b>";
var mnjrMal		= "<b>Juande Ramos<\/b>";
var mnjrOsa		= "<b>Enrique Martin M.<\/b>";
var mnjrBet		= "<b>Gus Poyet<\/b>";
var mnjrMad		= "<b>Zinedine Zidane<\/b>";
var mnjrSoc		= "<b>Eusebio Sacristan<\/b>";
var mnjrSev		= "<b>Jorge Sampaoli<\/b>";
var mnjrSpo		= "<b>Abelardo Fernandez<\/b>";
var mnjrVal		= "<b>Pako Ayestaran<\/b>";
var mnjrVil		= "<b>Fran Escribá<\/b>";


/* ntmj */
var ntmjAla		= ""+flc1arg+"";
var ntmjBil		= ""+flc1esp+"";
var ntmjAtl		= ""+flc1arg+"";
var ntmjBar		= ""+flc1esp+"";
var ntmjCel		= ""+flc1arg+"";
var ntmjDep		= ""+flc1esp+"";
var ntmjEib		= ""+flc1esp+"";
var ntmjEsp		= ""+flc1esp+"";
var ntmjGra		= ""+flc1esp+"";
var ntmjLas		= ""+flc1esp+"";
var ntmjLeg		= ""+flc1esp+"";
var ntmjMal		= ""+flc1esp+"";
var ntmjOsa		= ""+flc1esp+"";
var ntmjBet		= ""+flc1uru+"";
var ntmjMad		= ""+flc1fra+"";
var ntmjSoc		= ""+flc1esp+"";
var ntmjSev		= ""+flc1arg+"";
var ntmjSpo		= ""+flc1esp+"";
var ntmjVal		= ""+flc1esp+"";
var ntmjVil		= ""+flc1esp+"";


/* bdmj */
var bdmjAla		= "01/10/1971";
var bdmjBil		= "09/02/1964";
var bdmjAtl		= "28/04/1970";
var bdmjBar		= "08/05/1970";
var bdmjCel		= "13/11/1969";
var bdmjDep		= "09/07/1975";
var bdmjEib		= "14/03/1961";
var bdmjEsp		= "05/02/1965";
var bdmjGra		= "18/04/1970";
var bdmjLas		= "27/09/1958";
var bdmjLeg		= "06/12/1969";
var bdmjMal		= "25/09/1954";
var bdmjOsa		= "09/03/1956";
var bdmjBet		= "15/11/1968";
var bdmjMad		= "23/06/1972";
var bdmjSoc		= "13/04/1964";
var bdmjSev		= "13/03/1960";
var bdmjSpo		= "10/04/1970";
var bdmjVal		= "05/02/1963";
var bdmjVil		= "03/05/1965";


/* frmj */
var frmjAla		= "26/06/2016";
var frmjBil		= "01/07/2013";
var frmjAtl		= "23/12/2011";
var frmjBar		= "19/05/2014";
var frmjCel		= "19/05/2014";
var frmjDep		= "06/06/2016";
var frmjEib		= "30/06/2015";
var frmjEsp		= "09/06/2016";
var frmjGra		= "26/05/2016";
var frmjLas		= "20/06/2016";
var frmjLeg		= "28/06/2013";
var frmjMal		= "27/05/2016";
var frmjOsa		= "05/05/2015";
var frmjBet		= "09/05/2016";
var frmjMad		= "04/01/2016";
var frmjSoc		= "09/11/2015";
var frmjSev		= "12/06/2016";
var frmjSpo		= "04/05/2014";
var frmjVal		= "31/03/2016";
var frmjVil		= "11/08/2016";


/* ftmj */
var ftmjAla		= "https://2.bp.blogspot.com/-FSsyP84EZg8/V3EgWw30llI/AAAAAAAAChQ/Dsuxu2ESqo0VnMJ3FxO05ogHm5ue2BE6wCLcB/s1600/Ala-Mauricio_Pellegrino.jpg";
var ftmjBil		= "https://3.bp.blogspot.com/-hqQqZ8X-p14/V3EgX3JcS9I/AAAAAAAAChY/8qWz4YBsZ3cD3ODFpAueyAqVtlvIJPyrwCLcB/s1600/Bil-Ernesto_Valverde.jpg";
var ftmjAtl		= "https://2.bp.blogspot.com/-E524GReSI2w/V3EgW2Wy1xI/AAAAAAAAChM/OvGiVIaqbL0QNZPritzN6I1bth_afVKoACLcB/s1600/Atl-Diego_Simeone.jpg";
var ftmjBar		= "https://1.bp.blogspot.com/-5h4X6vJTMcw/V3EgW6Uac9I/AAAAAAAAChI/3H5zn0x-nxc9GutHyKlUKRwknpcdRQmGQCLcB/s1600/Bar-Luis_Enrique.jpg";
var ftmjCel		= "https://2.bp.blogspot.com/-nHTWVwY4uTE/V3EgX-y_4hI/AAAAAAAAChc/3X8UqeoPp_c60Y_PUnLX8F6MFzBBY2q0wCLcB/s1600/Cel-Eduardo_Berizzo.jpg";
var ftmjDep		= "https://1.bp.blogspot.com/-aintzua0tTs/V3Ehu5m7DaI/AAAAAAAACis/BIis5DIfMGQXjoSumiIyMH5ljjAjhriiACLcB/s1600/Dep-Gaizka_Garitano.jpg";
var ftmjEib		= "https://3.bp.blogspot.com/-ruUiS3bm5xw/V3EgYgBDUGI/AAAAAAAAChk/nd7GTkM8yQIVqHksuA4BIhEZliyBNlxGwCLcB/s1600/Eib-Jose_Luis_Mendilibar.jpg";
var ftmjEsp		= "https://4.bp.blogspot.com/-MyQizXnzm-w/V3EgYk54axI/AAAAAAAAChg/CxfhRrHzeUUBCXBUQoA_-BXV2C7eqGi2QCLcB/s1600/Esp-Quique_Sanchez_Flores.jpg";
var ftmjGra		= "https://2.bp.blogspot.com/-ApcvM_vE51Q/V3EgY36nGmI/AAAAAAAACho/fjNxTqgpAEkZR7mir0hjf9dnCtWmJonwQCLcB/s1600/Gra-Paco_Jemez.jpg";
var ftmjLas		= "https://4.bp.blogspot.com/-R-ny8pMOvfk/V3EgZdUjaMI/AAAAAAAAChs/4qiFU4MzM9UIC4dGQpxkMe8MrJrlhvHSwCLcB/s1600/Las-Quique_Setien.jpg";
var ftmjLeg		= "https://3.bp.blogspot.com/-FOwnlsbzaN4/V3EgZjlV1II/AAAAAAAACh0/KbU7D1u50mQZgd091y2SNMXZA_QLVEBOgCLcB/s1600/Leg-Asier_Garitano.jpg";
var ftmjMal		= "https://2.bp.blogspot.com/-JZRzQsOzW7g/V3EgaGvVCbI/AAAAAAAACiA/VUd1unwZ318HNGUTaCbhTVB4rpjT9_mHgCLcB/s1600/Mal-Juande_Ramos.png";
var ftmjOsa		= "https://1.bp.blogspot.com/-8oCHISUqXZQ/V3EgaQJSEvI/AAAAAAAACh8/UNNjE64ZLd8LxlhR1-OFT24v1FbPzlPAACLcB/s1600/Osa-Enrique_Martin_Monreal.jpg";
var ftmjBet		= "https://2.bp.blogspot.com/-JnnySE9zVRo/V3EgXrf6B0I/AAAAAAAAChU/07FxYOIZdOYu3J65jWaPBGnfBqTm8_gFwCLcB/s1600/Bet-Gus_Poyet.jpg";
var ftmjMad		= "https://4.bp.blogspot.com/-3m-2CVIMdZY/V3EgZtAvJOI/AAAAAAAAChw/SaZOLvOlUOg85geoTlvAGVaaAgHFTZnOQCLcB/s1600/Mad-Zinedine_Zidane.jpg";
var ftmjSoc		= "https://4.bp.blogspot.com/-0qO6BhNF3dQ/V3Ega-b_tiI/AAAAAAAACiE/zT0tcjlM9G0h-_bNsILt1Epw8GN9BrOngCLcB/s1600/Soc-Eusebio_Sacristan.jpg";
var ftmjSev		= "https://3.bp.blogspot.com/-Oyx7ePAFzwU/V3EgaTrmZKI/AAAAAAAACh4/8WdGoolgNMQTZVesruqeouWpr4EjddlQgCLcB/s1600/Sev-Jorge_Sampaoli.jpg";
var ftmjSpo		= "https://3.bp.blogspot.com/-oBQrh0p8Tkc/V3EgbNvBVWI/AAAAAAAACiI/bAfkuu3sRakGizWvlTlx7hWI1ax7SsyLQCLcB/s1600/Spo-Abelardo_Fernandez.jpg";
var ftmjVal		= "https://4.bp.blogspot.com/-rhoq9KcML28/V3EgbF80vPI/AAAAAAAACiM/2cxsc7lWZIMVCnkYhQUj_rOKt6TtoSlVQCLcB/s1600/Val-Pako_Ayestaran.jpg";
var ftmjVil		= "https://3.bp.blogspot.com/-gmpg03uCxVM/V7L-FK4HCEI/AAAAAAAADbY/e-7uuAz0BYkI13az8cW0-Bgwz1W8ueTcwCLcB/s1600/Fran-Escriba.jpg";


/* agmj */
var agmjAla		= getAge(bdmjAla);
var agmjBil		= getAge(bdmjBil);
var agmjAtl		= getAge(bdmjAtl);
var agmjBar		= getAge(bdmjBar);
var agmjCel		= getAge(bdmjCel);
var agmjDep		= getAge(bdmjDep);
var agmjEib		= getAge(bdmjEib);
var agmjEsp		= getAge(bdmjEsp);
var agmjGra		= getAge(bdmjGra);
var agmjLas		= getAge(bdmjLas);
var agmjLeg		= getAge(bdmjLeg);
var agmjMal		= getAge(bdmjMal);
var agmjOsa		= getAge(bdmjOsa);
var agmjBet		= getAge(bdmjBet);
var agmjMad		= getAge(bdmjMad);
var agmjSoc		= getAge(bdmjSoc);
var agmjSev		= getAge(bdmjSev);
var agmjSpo		= getAge(bdmjSpo);
var agmjVal		= getAge(bdmjVal);
var agmjVil		= getAge(bdmjVil);

/* lpmj*/
var lpmjAla		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaAlaves+"\" src=\""+ftmjAla+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjBil		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaAthleticBilbao+"\" src=\""+ftmjBil+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjAtl		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaAtleticoMadrid+"\" src=\""+ftmjAtl+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjBar		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaBarcelona+"\" src=\""+ftmjBar+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjCel		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaCeltaVigo+"\" src=\""+ftmjCel+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjDep		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaDeportivo+"\" src=\""+ftmjDep+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjEib		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaEibar+"\" src=\""+ftmjEib+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjEsp		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaEspanyol+"\" src=\""+ftmjEsp+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjGra		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaGranada+"\" src=\""+ftmjGra+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjLas		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaLasPalmas+"\" src=\""+ftmjLas+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjLeg		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaLeganes+"\" src=\""+ftmjLeg+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjMal		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaMalaga+"\" src=\""+ftmjMal+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjOsa		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaOsasuna+"\" src=\""+ftmjOsa+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjBet		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaRealBetis+"\" src=\""+ftmjBet+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjMad		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaRealMadrid+"\" src=\""+ftmjMad+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjSoc		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaRealSociedad+"\" src=\""+ftmjSoc+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjSev		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaSevilla+"\" src=\""+ftmjSev+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjSpo		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaSportingGijon+"\" src=\""+ftmjSpo+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjVal		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaValencia+"\" src=\""+ftmjVal+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjVil		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaVillarreal+"\" src=\""+ftmjVil+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";



/* tdmj */
var tdmjAla		= ""+sbg1+""+imgeAla+" "+clubAla+""+sbg2+""+lpmjAla+" "+mnjrAla+""+sbg2+""+ntmjAla+""+sbg3+""+frmjAla+""+sbg3+""+bdmjAla+" ("+agmjAla+")"+sbg4+"";
var tdmjBil		= ""+sbg1+""+imgeBil+" "+clubBil+""+sbg2+""+lpmjBil+" "+mnjrBil+""+sbg2+""+ntmjBil+""+sbg3+""+frmjBil+""+sbg3+""+bdmjBil+" ("+agmjBil+")"+sbg4+"";
var tdmjAtl		= ""+sbg1+""+imgeAtl+" "+clubAtl+""+sbg2+""+lpmjAtl+" "+mnjrAtl+""+sbg2+""+ntmjAtl+""+sbg3+""+frmjAtl+""+sbg3+""+bdmjAtl+" ("+agmjAtl+")"+sbg4+"";
var tdmjBar		= ""+sbg1+""+imgeBar+" "+clubBar+""+sbg2+""+lpmjBar+" "+mnjrBar+""+sbg2+""+ntmjBar+""+sbg3+""+frmjBar+""+sbg3+""+bdmjBar+" ("+agmjBar+")"+sbg4+"";
var tdmjCel		= ""+sbg1+""+imgeCel+" "+clubCel+""+sbg2+""+lpmjCel+" "+mnjrCel+""+sbg2+""+ntmjCel+""+sbg3+""+frmjCel+""+sbg3+""+bdmjCel+" ("+agmjCel+")"+sbg4+"";
var tdmjDep		= ""+sbg1+""+imgeDep+" "+clubDep+""+sbg2+""+lpmjDep+" "+mnjrDep+""+sbg2+""+ntmjDep+""+sbg3+""+frmjDep+""+sbg3+""+bdmjDep+" ("+agmjDep+")"+sbg4+"";
var tdmjEib		= ""+sbg1+""+imgeEib+" "+clubEib+""+sbg2+""+lpmjEib+" "+mnjrEib+""+sbg2+""+ntmjEib+""+sbg3+""+frmjEib+""+sbg3+""+bdmjEib+" ("+agmjEib+")"+sbg4+"";
var tdmjEsp		= ""+sbg1+""+imgeEsp+" "+clubEsp+""+sbg2+""+lpmjEsp+" "+mnjrEsp+""+sbg2+""+ntmjEsp+""+sbg3+""+frmjEsp+""+sbg3+""+bdmjEsp+" ("+agmjEsp+")"+sbg4+"";
var tdmjGra		= ""+sbg1+""+imgeGra+" "+clubGra+""+sbg2+""+lpmjGra+" "+mnjrGra+""+sbg2+""+ntmjGra+""+sbg3+""+frmjGra+""+sbg3+""+bdmjGra+" ("+agmjGra+")"+sbg4+"";
var tdmjLas		= ""+sbg1+""+imgeLas+" "+clubLas+""+sbg2+""+lpmjLas+" "+mnjrLas+""+sbg2+""+ntmjLas+""+sbg3+""+frmjLas+""+sbg3+""+bdmjLas+" ("+agmjLas+")"+sbg4+"";
var tdmjLeg		= ""+sbg1+""+imgeLeg+" "+clubLeg+""+sbg2+""+lpmjLeg+" "+mnjrLeg+""+sbg2+""+ntmjLeg+""+sbg3+""+frmjLeg+""+sbg3+""+bdmjLeg+" ("+agmjLeg+")"+sbg4+"";
var tdmjMal		= ""+sbg1+""+imgeMal+" "+clubMal+""+sbg2+""+lpmjMal+" "+mnjrMal+""+sbg2+""+ntmjMal+""+sbg3+""+frmjMal+""+sbg3+""+bdmjMal+" ("+agmjMal+")"+sbg4+"";
var tdmjOsa		= ""+sbg1+""+imgeOsa+" "+clubOsa+""+sbg2+""+lpmjOsa+" "+mnjrOsa+""+sbg2+""+ntmjOsa+""+sbg3+""+frmjOsa+""+sbg3+""+bdmjOsa+" ("+agmjOsa+")"+sbg4+"";
var tdmjBet		= ""+sbg1+""+imgeBet+" "+clubBet+""+sbg2+""+lpmjBet+" "+mnjrBet+""+sbg2+""+ntmjBet+""+sbg3+""+frmjBet+""+sbg3+""+bdmjBet+" ("+agmjBet+")"+sbg4+"";
var tdmjMad		= ""+sbg1+""+imgeMad+" "+clubMad+""+sbg2+""+lpmjMad+" "+mnjrMad+""+sbg2+""+ntmjMad+""+sbg3+""+frmjMad+""+sbg3+""+bdmjMad+" ("+agmjMad+")"+sbg4+"";
var tdmjSoc		= ""+sbg1+""+imgeSoc+" "+clubSoc+""+sbg2+""+lpmjSoc+" "+mnjrSoc+""+sbg2+""+ntmjSoc+""+sbg3+""+frmjSoc+""+sbg3+""+bdmjSoc+" ("+agmjSoc+")"+sbg4+"";
var tdmjSev		= ""+sbg1+""+imgeSev+" "+clubSev+""+sbg2+""+lpmjSev+" "+mnjrSev+""+sbg2+""+ntmjSev+""+sbg3+""+frmjSev+""+sbg3+""+bdmjSev+" ("+agmjSev+")"+sbg4+"";
var tdmjSpo		= ""+sbg1+""+imgeSpo+" "+clubSpo+""+sbg2+""+lpmjSpo+" "+mnjrSpo+""+sbg2+""+ntmjSpo+""+sbg3+""+frmjSpo+""+sbg3+""+bdmjSpo+" ("+agmjSpo+")"+sbg4+"";
var tdmjVal		= ""+sbg1+""+imgeVal+" "+clubVal+""+sbg2+""+lpmjVal+" "+mnjrVal+""+sbg2+""+ntmjVal+""+sbg3+""+frmjVal+""+sbg3+""+bdmjVal+" ("+agmjVal+")"+sbg4+"";
var tdmjVil		= ""+sbg1+""+imgeVil+" "+clubVil+""+sbg2+""+lpmjVil+" "+mnjrVil+""+sbg2+""+ntmjVil+""+sbg3+""+frmjVil+""+sbg3+""+bdmjVil+" ("+agmjVil+")"+sbg4+"";


var mnjrlist		= ""+tdmjAla+""+tdmjBil+""+tdmjAtl+""+tdmjBar+""+tdmjCel+""+tdmjDep+""+tdmjEib+""+tdmjEsp+""+tdmjGra+""+tdmjLas+""+tdmjLeg+""+tdmjMal+""+tdmjOsa+""+tdmjBet+""+tdmjMad+""+tdmjSoc+""+tdmjSev+""+tdmjSpo+""+tdmjVal+""+tdmjVil+"";