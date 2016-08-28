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
var namaAta		= "Atalanta";
var namaBol		= "Bologna";
var namaCag		= "Cagliari";
var namaChi		= "Chievo Verona";
var namaCro		= "Crotone";
var namaEmp		= "Empoli";
var namaFio		= "Fiorentina";
var namaGen		= "Genoa";
var namaInt		= "Inter Milan";
var namaJuv		= "Juventus";
var namaLaz		= "Lazio";
var namaMil		= "Milan";
var namaNap		= "Napoli";
var namaPal		= "Palermo";
var namaPes		= "Pescara";
var namaRom		= "Roma";
var namaSam		= "Sampdoria";
var namaSas		= "Sassuolo";
var namaTor		= "Torino";
var namaUdi		= "Udinese";



/* link Club*/
var linkAta		= "http://www.idezia.com/2016/07/Atalanta.B.C.2016-17.Jadwal.dan.Hasil.html";
var linkBol		= "http://www.idezia.com/2016/07/Bologna.F.C.2016-17.Jadwal.dan.Hasil.html";
var linkCag		= "http://www.idezia.com/2016/07/Cagliari.Calcio.2016-17.Jadwal.dan.Hasil.html";
var linkChi		= "http://www.idezia.com/2016/06/Musim.2016-17.A.C.Chievo.Verona.html";
var linkCro		= "http://www.idezia.com/2016/07/F.C.Crotone.2016-17.Jadwal.dan.Hasil.html";
var linkEmp		= "http://www.idezia.com/2016/06/Musim.2016-17.Empoli.F.C.html";
var linkFio		= "http://www.idezia.com/2016/06/Musim.2016-17.ACF.Fiorentina.html";
var linkGen		= "http://www.idezia.com/2016/06/Musim.2016-17.Genoa.C.F.C.html";
var linkInt		= "http://www.idezia.com/2016/06/Musim.2016-17.Internazionale.Milano.html";
var linkJuv		= "http://www.idezia.com/2016/06/Jadwal.Pertandingan.Juventus.F.C.2016-2017.html";
var linkLaz		= "http://www.idezia.com/2016/06/Musim.2016-17.S.S.Lazio.html";
var linkMil		= "http://www.idezia.com/2016/06/Jadwal.Pertandingan.AC.Milan.2016-2017.html";
var linkNap		= "http://www.idezia.com/2016/06/Musim.2016-17.S.S.C.Napoli.html";
var linkPal		= "http://www.idezia.com/2016/07/U.S.Palermo.2016-17.Jadwal.dan.Hasil.html";
var linkPes		= "http://www.idezia.com/2016/07/Delfino.Pescara.2016-17.Jadwal.dan.Hasil.html";
var linkRom		= "http://www.idezia.com/2016/06/Musim.2016-17.A.S.Roma.html";
var linkSam		= "http://www.idezia.com/2016/07/U.C.Sampdoria.2016-17.Jadwal.dan.Hasil.html";
var linkSas		= "http://www.idezia.com/2016/06/Musim.2016-17.U.S.Sassuolo.Calcio.html";
var linkTor		= "http://www.idezia.com/2016/07/Torino.F.C.2016-17.Jadwal.dan.Hasil.html";
var linkUdi		= "http://www.idezia.com/2016/07/Udinese.Calcio.2016-17.Jadwal.dan.Hasil.html";



/* igur Club*/
var igurAta		= "http://3.bp.blogspot.com/-KtaFEY_WrYI/VJ1pIuBAKRI/AAAAAAAAAeg/Y4ET_3fdLUk/s50/Idezia.com%2B-%2BAtalanta.png";
var igurBol		= "http://2.bp.blogspot.com/-q5djN42pk4M/VJ1pJfqZopI/AAAAAAAAAew/yDnTzlgDQSs/s50/Idezia.com%2B-%2BBologna.png";
var igurCag		= "http://3.bp.blogspot.com/-CyJmErhcy7U/VJ1pKCk2ziI/AAAAAAAAAfA/aRDTYM5BS1Y/s50/Idezia.com%2B-%2BCagliari.png";
var igurChi		= "http://2.bp.blogspot.com/-38_iBsFt7JA/VJ1pMcheLbI/AAAAAAAAAfc/HENuQEaGCNM/s50/Idezia.com%2B-%2BChievo.png";
var igurCro		= "https://3.bp.blogspot.com/-tEdDYjKOT1Q/V1awnDAaHTI/AAAAAAAABu0/r9AwS720yYIt2jaOO5b4TdutyL7-cg3owCLcB/s50/Idezia.com%2B-%2BCrotone.png";
var igurEmp		= "http://4.bp.blogspot.com/-9NX4l6Bf8T4/VJ1pMWQ6HkI/AAAAAAAAAfY/AeG-tRYX9mU/s50/Idezia.com%2B-%2BEmpoli.png";
var igurFio		= "http://1.bp.blogspot.com/-ya08VMGYT0o/VJ1pNJVIcpI/AAAAAAAAAfs/hiLeAIzYskY/s50/Idezia.com%2B-%2BFiorentina.png";
var igurGen		= "http://3.bp.blogspot.com/-1smElPm1qFQ/VJ1pNxH6jKI/AAAAAAAAAfw/pFlM5zABN_Q/s50/Idezia.com%2B-%2BGenoa.png";
var igurInt		= "http://3.bp.blogspot.com/-8gKAVMJwmNI/VJ1pQiG3kGI/AAAAAAAAAgE/twKU8t_W5VU/s50/Idezia.com%2B-%2BInternazionale.png";
var igurJuv		= "http://4.bp.blogspot.com/-KPH2P7sXf6A/VJ1pRdd-qaI/AAAAAAAAAgM/YloYM4Qeesc/s50/Idezia.com%2B-%2BJuventus.png";
var igurLaz		= "http://2.bp.blogspot.com/-vGLlH3-2eZ8/VJ1pRkc2OoI/AAAAAAAAAgQ/HvjHu4bqwk8/s50/Idezia.com%2B-%2BLazio.png";
var igurMil		= "http://4.bp.blogspot.com/-g2vbsePIoGs/VJ1pVtRis2I/AAAAAAAAAgs/AAfRNW4_GCQ/s50/Idezia.com%2B-%2BMilan.png";
var igurNap		= "http://3.bp.blogspot.com/-_n8QRpA7A-c/VJ1pXDW7V1I/AAAAAAAAAg8/sP2OQAQqkKQ/s50/Idezia.com%2B-%2BNapoli.png";
var igurPal		= "http://4.bp.blogspot.com/-z4dWUr86hFI/VJ1pXQoIp6I/AAAAAAAAAhE/B5ArRfmP7pI/s50/Idezia.com%2B-%2BPalermo.png";
var igurPes		= "https://1.bp.blogspot.com/-RjGgbOKdJnw/V3QXfduLyCI/AAAAAAAACmU/XGWhnWgYs2ImeC-cNFn5AY-C4wApfTS4wCLcB/s50/Idezia.com_Delfino_Pescara_1936.png";
var igurRom		= "http://1.bp.blogspot.com/-0P5fcGdR7q8/VJ1pdanS0II/AAAAAAAAAhs/79L6j872OHw/s50/Idezia.com%2B-%2BRoma.png";
var igurSam		= "http://1.bp.blogspot.com/-TkiucDZ5aDc/VJ1per4MMhI/AAAAAAAAAh4/0Nxbo-a7WtE/s50/Idezia.com%2B-%2BSampdoria.png";
var igurSas		= "http://4.bp.blogspot.com/-CXNJ4uMIaWI/VJ1peowJwrI/AAAAAAAAAiA/bAQa9Au6B7I/s50/Idezia.com%2B-%2BSassuolo.png";
var igurTor		= "http://4.bp.blogspot.com/-Bf4Rdp6etPY/VJ1pgb_9tkI/AAAAAAAAAiY/h_vHPilQTHo/s50/Idezia.com%2B-%2BTorino.png";
var igurUdi		= "http://1.bp.blogspot.com/-GIaTjBMQ-wc/VJ1phtQeN_I/AAAAAAAAAiw/z1hvvNx3Ifk/s50/Idezia.com%2B-%2BUdinese.png";


/* imge Club*/
var imgeAta		= "<img alt=\"Logo Club "+namaAta+"\" src=\""+igurAta+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeBol		= "<img alt=\"Logo Club "+namaBol+"\" src=\""+igurBol+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeCag		= "<img alt=\"Logo Club "+namaCag+"\" src=\""+igurCag+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeChi		= "<img alt=\"Logo Club "+namaChi+"\" src=\""+igurChi+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeCro		= "<img alt=\"Logo Club "+namaCro+"\" src=\""+igurCro+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeEmp		= "<img alt=\"Logo Club "+namaEmp+"\" src=\""+igurEmp+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeFio		= "<img alt=\"Logo Club "+namaFio+"\" src=\""+igurFio+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeGen		= "<img alt=\"Logo Club "+namaGen+"\" src=\""+igurGen+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeInt		= "<img alt=\"Logo Club "+namaInt+"\" src=\""+igurInt+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeJuv		= "<img alt=\"Logo Club "+namaJuv+"\" src=\""+igurJuv+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeLaz		= "<img alt=\"Logo Club "+namaLaz+"\" src=\""+igurLaz+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeMil		= "<img alt=\"Logo Club "+namaMil+"\" src=\""+igurMil+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeNap		= "<img alt=\"Logo Club "+namaNap+"\" src=\""+igurNap+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgePal		= "<img alt=\"Logo Club "+namaPal+"\" src=\""+igurPal+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgePes		= "<img alt=\"Logo Club "+namaPes+"\" src=\""+igurPes+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeRom		= "<img alt=\"Logo Club "+namaRom+"\" src=\""+igurRom+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeSam		= "<img alt=\"Logo Club "+namaSam+"\" src=\""+igurSam+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeSas		= "<img alt=\"Logo Club "+namaSas+"\" src=\""+igurSas+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeTor		= "<img alt=\"Logo Club "+namaTor+"\" src=\""+igurTor+"\" style=\"border-style: none; vertical-align:middle;\" >";
var imgeUdi		= "<img alt=\"Logo Club "+namaUdi+"\" src=\""+igurUdi+"\" style=\"border-style: none; vertical-align:middle;\" >";


/* imge Club*/
var clubAta		= "<a href=\""+linkAta+"\">"+namaAta+"<\/a>";
var clubBol		= "<a href=\""+linkBol+"\">"+namaBol+"<\/a>";
var clubCag		= "<a href=\""+linkCag+"\">"+namaCag+"<\/a>";
var clubChi		= "<a href=\""+linkChi+"\">"+namaChi+"<\/a>";
var clubCro		= "<a href=\""+linkCro+"\">"+namaCro+"<\/a>";
var clubEmp		= "<a href=\""+linkEmp+"\">"+namaEmp+"<\/a>";
var clubFio		= "<a href=\""+linkFio+"\">"+namaFio+"<\/a>";
var clubGen		= "<a href=\""+linkGen+"\">"+namaGen+"<\/a>";
var clubInt		= "<a href=\""+linkInt+"\">"+namaInt+"<\/a>";
var clubJuv		= "<a href=\""+linkJuv+"\">"+namaJuv+"<\/a>";
var clubLaz		= "<a href=\""+linkLaz+"\">"+namaLaz+"<\/a>";
var clubMil		= "<a href=\""+linkMil+"\">"+namaMil+"<\/a>";
var clubNap		= "<a href=\""+linkNap+"\">"+namaNap+"<\/a>";
var clubPal		= "<a href=\""+linkPal+"\">"+namaPal+"<\/a>";
var clubPes		= "<a href=\""+linkPes+"\">"+namaPes+"<\/a>";
var clubRom		= "<a href=\""+linkRom+"\">"+namaRom+"<\/a>";
var clubSam		= "<a href=\""+linkSam+"\">"+namaSam+"<\/a>";
var clubSas		= "<a href=\""+linkSas+"\">"+namaSas+"<\/a>";
var clubTor		= "<a href=\""+linkTor+"\">"+namaTor+"<\/a>";
var clubUdi		= "<a href=\""+linkUdi+"\">"+namaUdi+"<\/a>";


/* mnjr Club*/
var mnjrAta		= "<b>Gian Piero Gasperini<\/b>";
var mnjrBol		= "<b>Roberto Donadoni<\/b>";
var mnjrCag		= "<b>Massimo Rastelli<\/b>";
var mnjrChi		= "<b>Rolando Maran<\/b>";
var mnjrCro		= "<b>Davide Nicola<\/b>";
var mnjrEmp		= "<b>Giovanni Martusciello<\/b>";
var mnjrFio		= "<b>Paulo Sousa<\/b>";
var mnjrGen		= "<b>Ivan Juric<\/b>";
var mnjrInt		= "<b>Frank de Boer<\/b>";
var mnjrJuv		= "<b>Massimiliano Allegri<\/b>";
var mnjrLaz		= "<b>Simone Inzaghi<\/b>";
var mnjrMil		= "<b>Vincenzo Montella<\/b>";
var mnjrNap		= "<b>Maurizio Sarri<\/b>";
var mnjrPal		= "<b>Davide Ballardini<\/b>";
var mnjrPes		= "<b>Massimo Oddo<\/b>";
var mnjrRom		= "<b>Luciano Spalletti<\/b>";
var mnjrSam		= "<b>Marco Giampaolo<\/b>";
var mnjrSas		= "<b>Eusebio Di Francesco<\/b>";
var mnjrTor		= "<b>Sinisa Mihajlovic<\/b>";
var mnjrUdi		= "<b>Giuseppe Iachini<\/b>";


/* ntmj Club*/
var ntmjAta		= ""+flc1ita+"";
var ntmjBol		= ""+flc1ita+"";
var ntmjCag		= ""+flc1ita+"";
var ntmjChi		= ""+flc1ita+"";
var ntmjCro		= ""+flc1ita+"";
var ntmjEmp		= ""+flc1ita+"";
var ntmjFio		= ""+flc1por+"";
var ntmjGen		= ""+flc1cro+"";
var ntmjInt		= ""+flc1ned+"";
var ntmjJuv		= ""+flc1ita+"";
var ntmjLaz		= ""+flc1ita+"";
var ntmjMil		= ""+flc1ita+"";
var ntmjNap		= ""+flc1ita+"";
var ntmjPal		= ""+flc1ita+"";
var ntmjPes		= ""+flc1ita+"";
var ntmjRom		= ""+flc1ita+"";
var ntmjSam		= ""+flc1ita+"";
var ntmjSas		= ""+flc1ita+"";
var ntmjTor		= ""+flc1srb+"";
var ntmjUdi		= ""+flc1ita+"";


/* bdmj Club*/
var bdmjAta		= "26/01/1958";
var bdmjBol		= "09/09/1963";
var bdmjCag		= "27/12/1968";
var bdmjChi		= "14/07/1963";
var bdmjCro		= "05/03/1973";
var bdmjEmp		= "19/08/1971";
var bdmjFio		= "30/08/1970";
var bdmjGen		= "25/08/1975";
var bdmjInt		= "15/05/1970";
var bdmjJuv		= "11/08/1967";
var bdmjLaz		= "05/04/1976";
var bdmjMil		= "18/06/1974";
var bdmjNap		= "10/01/1959";
var bdmjPal		= "06/01/1964";
var bdmjPes		= "14/06/1976";
var bdmjRom		= "07/03/1959";
var bdmjSam		= "02/08/1967";
var bdmjSas		= "08/09/1969";
var bdmjTor		= "20/02/1969";
var bdmjUdi		= "07/05/1964";


/* frmj Club*/
var frmjAta		= "14/06/2016";
var frmjBol		= "30/10/2015";
var frmjCag		= "12/06/2015";
var frmjChi		= "19/10/2014";
var frmjCro		= "23/06/2016";
var frmjEmp		= "26/05/2016";
var frmjFio		= "21/05/2015";
var frmjGen		= "28/06/2016";
var frmjInt		= "09/08/2016";
var frmjJuv		= "16/07/2014";
var frmjLaz		= "08/07/2016";
var frmjMil		= "28/06/2016";
var frmjNap		= "12/06/2015";
var frmjPal		= "12/04/2016";
var frmjPes		= "23/05/2015";
var frmjRom		= "13/01/2016";
var frmjSam		= "04/07/2016";
var frmjSas		= "03/03/2014";
var frmjTor		= "25/05/2016";
var frmjUdi		= "19/05/2016";


/* agmj Club*/
var agmjAta		= getAge(bdmjAta);
var agmjBol		= getAge(bdmjBol);
var agmjCag		= getAge(bdmjCag);
var agmjChi		= getAge(bdmjChi);
var agmjCro		= getAge(bdmjCro);
var agmjEmp		= getAge(bdmjEmp);
var agmjFio		= getAge(bdmjFio);
var agmjGen		= getAge(bdmjGen);
var agmjInt		= getAge(bdmjInt);
var agmjJuv		= getAge(bdmjJuv);
var agmjLaz		= getAge(bdmjLaz);
var agmjMil		= getAge(bdmjMil);
var agmjNap		= getAge(bdmjNap);
var agmjPal		= getAge(bdmjPal);
var agmjPes		= getAge(bdmjPes);
var agmjRom		= getAge(bdmjRom);
var agmjSam		= getAge(bdmjSam);
var agmjSas		= getAge(bdmjSas);
var agmjTor		= getAge(bdmjTor);
var agmjUdi		= getAge(bdmjUdi);


/* ftmj Club*/
var ftmjAta		= "https://4.bp.blogspot.com/-k-0gC78d2rE/V3Qva-KdPkI/AAAAAAAACm0/iXK4WBVPp44imasybpWiVgDkUAMK17i7QCLcB/s1600/Ata-Gian_Piero_Gasperini.jpg";
var ftmjBol		= "https://3.bp.blogspot.com/-l-kRm1_Vo_A/V3Qva6opq1I/AAAAAAAACm4/ClovYLeE6G40wuPqeX9WA1ztGMrd2-8MACLcB/s1600/Bol-Roberto_Donadoni.jpg";
var ftmjCag		= "https://3.bp.blogspot.com/-Yq98wNwZ3cg/V3QvakXMOsI/AAAAAAAACm8/hVr9jV36UGQr7Oxq41h-1z73w5G7uQh8ACLcB/s1600/Cag-Massimo_Rastelli.jpg";
var ftmjChi		= "https://2.bp.blogspot.com/-yUFNrs5-TVk/V3QvbWh0nlI/AAAAAAAACnA/dCO1e4CYy_oJjwUbdfS48UnOFUTvBhP_QCLcB/s1600/Chi-Rolando_Maran.jpg";
var ftmjCro		= "https://3.bp.blogspot.com/-7esN9ZYoa3k/V3QvbcP67wI/AAAAAAAACnE/Mwrq7MJcYu8HJ0tnt4eT7hOYSQ0wLJtrQCLcB/s1600/Cro-Davide_Nicola.jpg";
var ftmjEmp		= "https://4.bp.blogspot.com/-sFegOLhZxS8/V3QvbpIeG5I/AAAAAAAACnI/ppvf5n-RqO4vGp4ntFHUN8EZ6gWzeNxIQCLcB/s1600/Emp-Giovanni_Martusciello.jpg";
var ftmjFio		= "https://1.bp.blogspot.com/-Dz_wwKyVJeM/V3QvcPCsyTI/AAAAAAAACnM/N2myjLAXUrAlN_v6Am42GvBpStnhcTjRwCLcB/s1600/Fio-Paulo_Sousa.jpg";
var ftmjGen		= "https://3.bp.blogspot.com/-2Qw7UbJt9WM/V3QvcTjYzZI/AAAAAAAACnQ/KcZfJ6NgjYg9ptn7zF3S5-X3IfbhEa2-wCLcB/s1600/Gen-Ivan_Juric.jpg";
var ftmjInt		= "https://3.bp.blogspot.com/-mOjLGy6_ifw/V6v6fBYD26I/AAAAAAAADYw/84c91e7uW-8VvRupGWb89hrvEkYPo1FJgCLcB/s1600/Frank%2Bde%2BBoer.jpg";
var ftmjJuv		= "https://2.bp.blogspot.com/-ESsdnh4Q5JQ/V3Qvc3ITNTI/AAAAAAAACnc/AiZkF8LX3OMORefXI3dzFwH50Cd9FXRUgCLcB/s1600/Juv-Massimiliano_Allegri.jpg";
var ftmjLaz		= "https://3.bp.blogspot.com/-apKoc0QXKxY/V3Qvc-GLlCI/AAAAAAAACnY/R9Hw-R9Yla4Ttkuv_HMShv8PeonWWjdewCLcB/s1600/Laz-Simone_Inzaghi.jpeg";
var ftmjMil		= "https://4.bp.blogspot.com/-kC8b1guLETs/V3QvdJCuVrI/AAAAAAAACns/mPUgqiZXXfsPTkeu3tUX83ILTbs__U55QCLcB/s1600/Mil-Vincenzo_Montella.jpeg";
var ftmjNap		= "https://3.bp.blogspot.com/-wdc7zaQniVY/V3QvdY6Cu4I/AAAAAAAACno/QuTPQqDTs3kSnygVo_4-goUo-4i0wAj3ACLcB/s1600/Nap-Maurizio_Sarri.jpg";
var ftmjPal		= "https://1.bp.blogspot.com/-BYE4aWpypgY/V3QvdQfYQ2I/AAAAAAAACnk/E0Veuh6zQ04vT3xOP4fzlPS6jQH6NjuuACLcB/s1600/Pal-Davide_Ballardini.jpg";
var ftmjPes		= "https://2.bp.blogspot.com/-QkEIu3DyvEU/V3QveGMwLkI/AAAAAAAACn4/e9rX5pPG-50Kd17d8FiUyvbC2No_rrUKACLcB/s1600/Pes-Massimo_Oddo.jpg";
var ftmjRom		= "https://1.bp.blogspot.com/-kB3gnUkhu-o/V3QveOnzDxI/AAAAAAAACn0/Onf58HWoZ10HtPjeX6Yn3XBBYMpKdDbsgCLcB/s1600/Rom-Luciano_Spalletti.jpg";
var ftmjSam		= "https://4.bp.blogspot.com/-kZH1zuI-GVo/V4Tu3JO5-ZI/AAAAAAAACws/RsrTI8M6mN4wFuo63GvC14szFaheTFowACLcB/s1600/Sam-Marco_Giampaolo.jpg";
var ftmjSas		= "https://4.bp.blogspot.com/-DxLT8_EtXiU/V3QveRvDm8I/AAAAAAAACnw/n8d3iAPeHRgXWCOZWLQZOLH4tXRC1t1JwCLcB/s1600/Sas-Eusebio_Di_Francesco.jpg";
var ftmjTor		= "https://2.bp.blogspot.com/-RKa5xvBXoeA/V3Qve2_iIgI/AAAAAAAACoA/DLfwWy0FUA0WJOtxVZHYpE01JVECchYAACLcB/s1600/Tor-Sinisa_Mihajlovic.jpg";
var ftmjUdi		= "https://3.bp.blogspot.com/-HzPTHzjw10M/V3Qve4aba_I/AAAAAAAACoE/CWCeWq9GLqAHdUXwlzWbaxqNOcCc3I8NgCLcB/s1600/Udi-Giuseppe_Iachini.jpg";




var lpmjAta		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaAta+"\" src=\""+ftmjAta+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjBol		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaBol+"\" src=\""+ftmjBol+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjCag		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaCag+"\" src=\""+ftmjCag+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjChi		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaChi+"\" src=\""+ftmjChi+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjCro		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaCro+"\" src=\""+ftmjCro+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjEmp		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaEmp+"\" src=\""+ftmjEmp+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjFio		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaFio+"\" src=\""+ftmjFio+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjGen		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaGen+"\" src=\""+ftmjGen+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjInt		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaInt+"\" src=\""+ftmjInt+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjJuv		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaJuv+"\" src=\""+ftmjJuv+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjLaz		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaLaz+"\" src=\""+ftmjLaz+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjMil		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaMil+"\" src=\""+ftmjMil+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjNap		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaNap+"\" src=\""+ftmjNap+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjPal		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaPal+"\" src=\""+ftmjPal+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjPes		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaPes+"\" src=\""+ftmjPes+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjRom		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaRom+"\" src=\""+ftmjRom+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjSam		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaSam+"\" src=\""+ftmjSam+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjSas		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaSas+"\" src=\""+ftmjSas+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjTor		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaTor+"\" src=\""+ftmjTor+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";
var lpmjUdi		= "<img alt=\"2016-2017 Nama Pelatih Manajer "+namaUdi+"\" src=\""+ftmjUdi+"\" style=\"border-style: none;vertical-align:middle;\" width=\"50\" \/>";











/* 
var namaAta		= Ata - Ata /
var namaBol		= Bol - Bol /
var namaCag		= Cag - Cag /
var namaChi		= Chi - Chi /
var namaCro		= Cro - Cro /
var namaEmp		= Emp - Emp /
var namaFio		= Fio - Fio /
var namaGen		= Gen - Gen /
var namaInt		= Int - Int /
var namaJuv		= Juv - Juv /
var namaLaz		= Laz - Laz /
var namaMil		= Mil - Mil /
var namaNap		= Nap - Nap /
var namaPal		= Pal - Pal /
var namaPes		= Pes - Pes /
var namaRom		= Rom - Rom /
var namaSam		= Sam - Sam /
var namaSas		= Sas - Sas /
var namaTor		= Tor - Tor /
var namaUdi		= Udi - Udi /


var namaAta		= Ata
var namaBol		= Bol
var namaCag		= Cag
var namaChi		= Chi
var namaCro		= Cro
var namaEmp		= Emp
var namaFio		= Fio
var namaGen		= Gen
var namaInt		= Int
var namaJuv		= Juv
var namaLaz		= Laz
var namaMil		= Mil
var namaNap		= Nap
var namaPal		= Pal
var namaPes		= Pes
var namaRom		= Rom
var namaSam		= Sam
var namaSas		= Sas
var namaTor		= Tor
var namaUdi		= Udi


var namaAta		= 
var namaBol		= 
var namaCag		= 
var namaChi		= 
var namaCro		= 
var namaEmp		= 
var namaFio		= 
var namaGen		= 
var namaInt		= 
var namaJuv		= 
var namaLaz		= 
var namaMil		= 
var namaNap		= 
var namaPal		= 
var namaPes		= 
var namaRom		= 
var namaSam		= 
var namaSas		= 
var namaTor		= 
var namaUdi		= 

*/



/* tdmj */
var tdmjAta		= ""+sbg1+""+imgeAta+" "+clubAta+""+sbg2+""+lpmjAta+" "+mnjrAta+""+sbg2+""+ntmjAta+""+sbg3+""+frmjAta+""+sbg3+""+bdmjAta+" ("+agmjAta+")"+sbg4+"";
var tdmjBol		= ""+sbg1+""+imgeBol+" "+clubBol+""+sbg2+""+lpmjBol+" "+mnjrBol+""+sbg2+""+ntmjBol+""+sbg3+""+frmjBol+""+sbg3+""+bdmjBol+" ("+agmjBol+")"+sbg4+"";
var tdmjCag		= ""+sbg1+""+imgeCag+" "+clubCag+""+sbg2+""+lpmjCag+" "+mnjrCag+""+sbg2+""+ntmjCag+""+sbg3+""+frmjCag+""+sbg3+""+bdmjCag+" ("+agmjCag+")"+sbg4+"";
var tdmjChi		= ""+sbg1+""+imgeChi+" "+clubChi+""+sbg2+""+lpmjChi+" "+mnjrChi+""+sbg2+""+ntmjChi+""+sbg3+""+frmjChi+""+sbg3+""+bdmjChi+" ("+agmjChi+")"+sbg4+"";
var tdmjCro		= ""+sbg1+""+imgeCro+" "+clubCro+""+sbg2+""+lpmjCro+" "+mnjrCro+""+sbg2+""+ntmjCro+""+sbg3+""+frmjCro+""+sbg3+""+bdmjCro+" ("+agmjCro+")"+sbg4+"";
var tdmjEmp		= ""+sbg1+""+imgeEmp+" "+clubEmp+""+sbg2+""+lpmjEmp+" "+mnjrEmp+""+sbg2+""+ntmjEmp+""+sbg3+""+frmjEmp+""+sbg3+""+bdmjEmp+" ("+agmjEmp+")"+sbg4+"";
var tdmjFio		= ""+sbg1+""+imgeFio+" "+clubFio+""+sbg2+""+lpmjFio+" "+mnjrFio+""+sbg2+""+ntmjFio+""+sbg3+""+frmjFio+""+sbg3+""+bdmjFio+" ("+agmjFio+")"+sbg4+"";
var tdmjGen		= ""+sbg1+""+imgeGen+" "+clubGen+""+sbg2+""+lpmjGen+" "+mnjrGen+""+sbg2+""+ntmjGen+""+sbg3+""+frmjGen+""+sbg3+""+bdmjGen+" ("+agmjGen+")"+sbg4+"";
var tdmjInt		= ""+sbg1+""+imgeInt+" "+clubInt+""+sbg2+""+lpmjInt+" "+mnjrInt+""+sbg2+""+ntmjInt+""+sbg3+""+frmjInt+""+sbg3+""+bdmjInt+" ("+agmjInt+")"+sbg4+"";
var tdmjJuv		= ""+sbg1+""+imgeJuv+" "+clubJuv+""+sbg2+""+lpmjJuv+" "+mnjrJuv+""+sbg2+""+ntmjJuv+""+sbg3+""+frmjJuv+""+sbg3+""+bdmjJuv+" ("+agmjJuv+")"+sbg4+"";
var tdmjLaz		= ""+sbg1+""+imgeLaz+" "+clubLaz+""+sbg2+""+lpmjLaz+" "+mnjrLaz+""+sbg2+""+ntmjLaz+""+sbg3+""+frmjLaz+""+sbg3+""+bdmjLaz+" ("+agmjLaz+")"+sbg4+"";
var tdmjMil		= ""+sbg1+""+imgeMil+" "+clubMil+""+sbg2+""+lpmjMil+" "+mnjrMil+""+sbg2+""+ntmjMil+""+sbg3+""+frmjMil+""+sbg3+""+bdmjMil+" ("+agmjMil+")"+sbg4+"";
var tdmjNap		= ""+sbg1+""+imgeNap+" "+clubNap+""+sbg2+""+lpmjNap+" "+mnjrNap+""+sbg2+""+ntmjNap+""+sbg3+""+frmjNap+""+sbg3+""+bdmjNap+" ("+agmjNap+")"+sbg4+"";
var tdmjPal		= ""+sbg1+""+imgePal+" "+clubPal+""+sbg2+""+lpmjPal+" "+mnjrPal+""+sbg2+""+ntmjPal+""+sbg3+""+frmjPal+""+sbg3+""+bdmjPal+" ("+agmjPal+")"+sbg4+"";
var tdmjPes		= ""+sbg1+""+imgePes+" "+clubPes+""+sbg2+""+lpmjPes+" "+mnjrPes+""+sbg2+""+ntmjPes+""+sbg3+""+frmjPes+""+sbg3+""+bdmjPes+" ("+agmjPes+")"+sbg4+"";
var tdmjRom		= ""+sbg1+""+imgeRom+" "+clubRom+""+sbg2+""+lpmjRom+" "+mnjrRom+""+sbg2+""+ntmjRom+""+sbg3+""+frmjRom+""+sbg3+""+bdmjRom+" ("+agmjRom+")"+sbg4+"";
var tdmjSam		= ""+sbg1+""+imgeSam+" "+clubSam+""+sbg2+""+lpmjSam+" "+mnjrSam+""+sbg2+""+ntmjSam+""+sbg3+""+frmjSam+""+sbg3+""+bdmjSam+" ("+agmjSam+")"+sbg4+"";
var tdmjSas		= ""+sbg1+""+imgeSas+" "+clubSas+""+sbg2+""+lpmjSas+" "+mnjrSas+""+sbg2+""+ntmjSas+""+sbg3+""+frmjSas+""+sbg3+""+bdmjSas+" ("+agmjSas+")"+sbg4+"";
var tdmjTor		= ""+sbg1+""+imgeTor+" "+clubTor+""+sbg2+""+lpmjTor+" "+mnjrTor+""+sbg2+""+ntmjTor+""+sbg3+""+frmjTor+""+sbg3+""+bdmjTor+" ("+agmjTor+")"+sbg4+"";
var tdmjUdi		= ""+sbg1+""+imgeUdi+" "+clubUdi+""+sbg2+""+lpmjUdi+" "+mnjrUdi+""+sbg2+""+ntmjUdi+""+sbg3+""+frmjUdi+""+sbg3+""+bdmjUdi+" ("+agmjUdi+")"+sbg4+"";


var mnjrlist		= ""+tdmjAta+""+tdmjBol+""+tdmjCag+""+tdmjChi+""+tdmjCro+""+tdmjEmp+""+tdmjFio+""+tdmjGen+""+tdmjInt+""+tdmjJuv+""+tdmjLaz+""+tdmjMil+""+tdmjNap+""+tdmjPal+""+tdmjPes+""+tdmjRom+""+tdmjSam+""+tdmjSas+""+tdmjTor+""+tdmjUdi+"";