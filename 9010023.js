var status;
var lvl0 = [4000003, 4000000, 4000019, 4000016, 4000011];
var lvl10 = [4000004, 4000001, 4000002, 4000006, 4000037, 4000012, 4000018, 4000195, 4000009];
var lvl20 = [4000015, 4000020, 4000215, 4000196, 4000008, 4000197, 4000007];
var lvl30 = [4000024, 4000106, 4000032, 4000095, 4000096, 4000113, 4000013, 4000035, 4000108, 4000029, 4000114];
var lvl40 = [4000111, 4000112, 4000290, 4000204, 4000014, 4000169, 4000278, 4000279, 4000280, 4000205, 4000291, 4000292];
var lvl50 = [4000033, 4000171, 4000293, 4000294, 4000364, 4000022, 4000051, 4000052, 4000041, 4000172, 4000283, 4000069, 4000025];
var lvl60 = [4000129, 4000128, 4000282, 4000143, 4000207, 4000379, 4000295, 4000354, 4000472, 4000289, 4000144, 4000145];
var lvl70 = [4000236, 4000237, 4000260, 4000208, 4000361, 4000130, 4000229, 4000146, 4000261, 4000131, 4000231, 4032024];
var lvl80 = [4000476, 4000132, 4000240, 4000147, 4000241, 4000133, 4000477, 4000242, 4000232, 4000233, 4000234, 4000148];
var lvl90 = [4000444, 4000182, 4000134, 4000263, 4000183, 4000445, 4000478, 4000149, 4000264, 4000184, 4000265, 4000447, 4000135];
var lvl100 = [4000268, 4000269, 4000270, 4000448, 4000181, 4000267, 4000272, 4000449, 4000450, ];
var lvl110 = [4000271, 4000274, 4000273, 4000452, 4000453];/*check 2nd item is dropped by skelegon*/
var lvl120 = [4000454, 4000455, 4000457, 4000458, 4000452, 4000453, 4000264, 4000184, 4000265, 4000447, 4000135, 4000232, 4000233, 4000234, 4000148, 4000444, 4000271, 4000132, 4000240, 4000147];
var stat = "";
var reg = "";
var charlvl = -1;
var count = 1;
var qleftime = "";
var qcode = "";
var qloot = [];
var qdone = -1;
var choose = [];
var check = 0;
var i = 0;
var concstr = "";
var setqcode = "";
var counter = [];
var index = 0;
var expchart = 0;
var multi = 0;
function start() {
        status = -1;
        action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
        cm.dispose();
    } else {
        if(mode == 0 && type > 0) {
            cm.dispose();
            return;
        }
        
        if (mode == 1)
            status++;
        else
            status--;
		
		if (status == 0)
			cm.sendNext("Welcome!\r\nIm #rkassandra#k the Special Quest npc.\r\nIf a quest is avaliable you can start it here !");
		else if (status == 1){
			stat = cm.checkSPquest();
			charlvl = cm.getCharLvl();
			if (stat.charAt(0) == "#"){
				cm.sendYesNo("oh!\r\nA quest already started!\r\nHurry up there are only #b"+stat.substring(1, stat.length)+"#k minutes left\r\nWould you like to get your quest?");
			} else if (stat.charAt(0) == "$"){
				for (i=1;i<stat.length;i++){
					if (stat.charAt(i) == "$")
						break;
					 else 
						 count += 1;
				}
				qleftime = stat.substring(1, count)
				qcode = stat.substring(count+1, stat.length)
				for (i=0;i<qcode.length;i++){
					if (qcode.charAt(i) == "%"){
							index += 1;
						 if (index == 1)
							 counter.push(i);
						 else if (index == 2)
							 counter.push(i);
						 else if (index == 3)
							 counter.push(i);
						 else if (index == 4)
							 counter.push(i);
					}	
				}
				qloot.push(parseInt(qcode.substring(0, counter[0])));
				qloot.push(parseInt(qcode.substring(counter[0]+1, counter[1])));
				qloot.push(parseInt(qcode.substring(counter[1]+1, counter[2])));
				qloot.push(parseInt(qcode.substring(counter[2]+1, counter[3])));
				cm.sendText(qloot);
				if (charlvl < 10){
					if ((cm.haveItem(lvl0[qloot[0]], 20)) && (cm.haveItem(lvl0[qloot[1]], 20)) && (cm.haveItem(lvl0[qloot[2]], 20)) && (cm.haveItem(lvl0[qloot[3]], 20))){
						cm.gainItem(lvl0[qloot[0]], -20);
					    cm.gainItem(lvl0[qloot[1]], -20);
					    cm.gainItem(lvl0[qloot[2]], -20);
					    cm.gainItem(lvl0[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl0[qloot[0]].toString()+"##v"+lvl0[qloot[1]].toString()+"##v"+lvl0[qloot[2]].toString()+"##v"+lvl0[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if ((charlvl >= 10) && ((charlvl < 20))) {
					if ((cm.haveItem(lvl10[qloot[0]], 20)) && (cm.haveItem(lvl10[qloot[1]], 20)) && (cm.haveItem(lvl10[qloot[2]], 20)) && (cm.haveItem(lvl10[qloot[3]], 20))){
						cm.gainItem(lvl10[qloot[0]], -20);
					    cm.gainItem(lvl10[qloot[1]], -20);
					    cm.gainItem(lvl10[qloot[2]], -20);
					    cm.gainItem(lvl10[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl10[qloot[0]].toString()+"##v"+lvl10[qloot[1]].toString()+"##v"+lvl10[qloot[2]].toString()+"##v"+lvl10[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if ((charlvl >= 20) && ((charlvl < 30))) {
					if ((cm.haveItem(lvl20[qloot[0]], 20)) && (cm.haveItem(lvl20[qloot[1]], 20)) && (cm.haveItem(lvl20[qloot[2]], 20)) && (cm.haveItem(lvl20[qloot[3]], 20))){
						cm.gainItem(lvl20[qloot[0]], -20);
					    cm.gainItem(lvl20[qloot[1]], -20);
					    cm.gainItem(lvl20[qloot[2]], -20);
					    cm.gainItem(lvl20[qloot[3]], -20);
						qdone = 1;
				}else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl20[qloot[0]].toString()+"##v"+lvl20[qloot[1]].toString()+"##v"+lvl20[qloot[2]].toString()+"##v"+lvl20[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if ((charlvl >= 30) && ((charlvl < 40))) {
					if ((cm.haveItem(lvl30[qloot[0]], 20)) && (cm.haveItem(lvl30[qloot[1]], 20)) && (cm.haveItem(lvl30[qloot[2]], 20)) && (cm.haveItem(lvl30[qloot[3]], 20))){
						cm.gainItem(lvl30[qloot[0]], -20);
					    cm.gainItem(lvl30[qloot[1]], -20);
					    cm.gainItem(lvl30[qloot[2]], -20);
					    cm.gainItem(lvl30[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl30[qloot[0]].toString()+"##v"+lvl30[qloot[1]].toString()+"##v"+lvl30[qloot[2]].toString()+"##v"+lvl30[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if ((charlvl >= 40) && ((charlvl < 50))) {
					if ((cm.haveItem(lvl40[qloot[0]], 20)) && (cm.haveItem(lvl40[qloot[1]], 20)) && (cm.haveItem(lvl40[qloot[2]], 20)) && (cm.haveItem(lvl40[qloot[3]], 20))){
						cm.gainItem(lvl40[qloot[0]], -20);
					    cm.gainItem(lvl40[qloot[1]], -20);
					    cm.gainItem(lvl40[qloot[2]], -20);
					    cm.gainItem(lvl40[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl40[qloot[0]].toString()+"##v"+lvl40[qloot[1]].toString()+"##v"+lvl40[qloot[2]].toString()+"##v"+lvl40[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if ((charlvl >= 50) && ((charlvl < 60))) {
					if ((cm.haveItem(lvl50[qloot[0]], 20)) && (cm.haveItem(lvl50[qloot[1]], 20)) && (cm.haveItem(lvl50[qloot[2]], 20)) && (cm.haveItem(lvl50[qloot[3]], 20))){
						cm.gainItem(lvl50[qloot[0]], -20);
					    cm.gainItem(lvl50[qloot[1]], -20);
					    cm.gainItem(lvl50[qloot[2]], -20);
					    cm.gainItem(lvl50[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl50[qloot[0]].toString()+"##v"+lvl50[qloot[1]].toString()+"##v"+lvl50[qloot[2]].toString()+"##v"+lvl50[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if ((charlvl >= 60) && ((charlvl < 70))) {
					if ((cm.haveItem(lvl60[qloot[0]], 20)) && (cm.haveItem(lvl60[qloot[1]], 20)) && (cm.haveItem(lvl60[qloot[2]], 20)) && (cm.haveItem(lvl60[qloot[3]], 20))){
						cm.gainItem(lvl60[qloot[0]], -20);
					    cm.gainItem(lvl60[qloot[1]], -20);
					    cm.gainItem(lvl60[qloot[2]], -20);
					    cm.gainItem(lvl60[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl60[qloot[0]].toString()+"##v"+lvl60[qloot[1]].toString()+"##v"+lvl60[qloot[2]].toString()+"##v"+lvl60[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if ((charlvl >= 70) && ((charlvl < 80))) {
					if ((cm.haveItem(lvl70[qloot[0]], 20)) && (cm.haveItem(lvl70[qloot[1]], 20)) && (cm.haveItem(lvl70[qloot[2]], 20)) && (cm.haveItem(lvl70[qloot[3]], 20))){
						cm.gainItem(lvl70[qloot[0]], -20);
					    cm.gainItem(lvl70[qloot[1]], -20);
					    cm.gainItem(lvl70[qloot[2]], -20);
					    cm.gainItem(lvl70[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl70[qloot[0]].toString()+"##v"+lvl70[qloot[1]].toString()+"##v"+lvl70[qloot[2]].toString()+"##v"+lvl70[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if ((charlvl >= 80) && ((charlvl < 90))) {
					if ((cm.haveItem(lvl80[qloot[0]], 20)) && (cm.haveItem(lvl80[qloot[1]], 20)) && (cm.haveItem(lvl80[qloot[2]], 20)) && (cm.haveItem(lvl80[qloot[3]], 20))){
						cm.gainItem(lvl80[qloot[0]], -20);
					    cm.gainItem(lvl80[qloot[1]], -20);
					    cm.gainItem(lvl80[qloot[2]], -20);
					    cm.gainItem(lvl80[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl80[qloot[0]].toString()+"##v"+lvl80[qloot[1]].toString()+"##v"+lvl80[qloot[2]].toString()+"##v"+lvl80[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if ((charlvl >= 90) && ((charlvl < 100))) {
					if ((cm.haveItem(lvl90[qloot[0]], 20)) && (cm.haveItem(lvl90[qloot[1]], 20)) && (cm.haveItem(lvl90[qloot[2]], 20)) && (cm.haveItem(lvl90[qloot[3]], 20))){
						cm.gainItem(lvl90[qloot[0]], -20);
					    cm.gainItem(lvl90[qloot[1]], -20);
					    cm.gainItem(lvl90[qloot[2]], -20);
					    cm.gainItem(lvl90[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl90[qloot[0]].toString()+"##v"+lvl90[qloot[1]].toString()+"##v"+lvl90[qloot[2]].toString()+"##v"+lvl90[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if ((charlvl >= 100) && ((charlvl < 110))) {
					if ((cm.haveItem(lvl100[qloot[0]], 20)) && (cm.haveItem(lvl100[qloot[1]], 20)) && (cm.haveItem(lvl100[qloot[2]], 20)) && (cm.haveItem(lvl100[qloot[3]], 20))){
						cm.gainItem(lvl100[qloot[0]], -20);
					    cm.gainItem(lvl100[qloot[1]], -20);
					    cm.gainItem(lvl100[qloot[2]], -20);
					    cm.gainItem(lvl100[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl100[qloot[0]].toString()+"##v"+lvl100[qloot[1]].toString()+"##v"+lvl100[qloot[2]].toString()+"##v"+lvl100[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if ((charlvl >= 110) && ((charlvl < 120))) {
					if ((cm.haveItem(lvl110[qloot[0]], 20)) && (cm.haveItem(lvl110[qloot[1]], 20)) && (cm.haveItem(lvl110[qloot[2]], 20)) && (cm.haveItem(lvl110[qloot[3]], 20))){
						cm.gainItem(lvl110[qloot[0]], -20);
					    cm.gainItem(lvl110[qloot[1]], -20);
					    cm.gainItem(lvl110[qloot[2]], -20);
					    cm.gainItem(lvl110[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl110[qloot[0]].toString()+"##v"+lvl110[qloot[1]].toString()+"##v"+lvl110[qloot[2]].toString()+"##v"+lvl110[qloot[3]].toString()+"#");
						cm.dispose();
					}
				} else if (charlvl > 120) {
					if ((cm.haveItem(lvl120[qloot[0]], 20)) && (cm.haveItem(lvl120[qloot[1]], 20)) && (cm.haveItem(lvl120[qloot[2]], 20)) && (cm.haveItem(lvl120[qloot[3]], 20))){
						cm.gainItem(lvl120[qloot[0]], -20);
					    cm.gainItem(lvl120[qloot[1]], -20);
					    cm.gainItem(lvl120[qloot[2]], -20);
					    cm.gainItem(lvl120[qloot[3]], -20);
						qdone = 1;
					} else {
						cm.sendOk("Hurry up there are only #b"+qleftime+"#k minutes left and you still need to bring #g20 of each:#k\r\n\r\n#v"+lvl120[qloot[0]].toString()+"##v"+lvl120[qloot[1]].toString()+"##v"+lvl120[qloot[2]].toString()+"##v"+lvl120[qloot[3]].toString()+"#");
						cm.dispose();
					}
				}
				
				if (qdone == 1){
					cm.sendOk("Oh ...\r\nVery nice you finished the quest!\r\n\r\nHere is your reward !");
					expchart = cm.doneSPquest();
					cm.gainExp(0.4*expchart);
					cm.dispose();
				}
			} else if (stat.charAt(0) == "@") {
				cm.sendOk("You already finished the quest for the current event !");
				cm.dispose();
			} else {
				cm.sendOk("Im sorry but there is no quest event !");
				cm.dispose();
			}
		} else if (status == 2){
			charlvl = cm.getCharLvl();
			if (charlvl < 10){
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl0.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl0.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}
					
			} else if ((charlvl >= 10) && ((charlvl < 20))) {
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl10.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl10.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()()+"%")
					concstr = setqcode;
				}

			} else if ((charlvl >= 20) && ((charlvl < 30))) {
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl20.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl20.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}
			} else if ((charlvl >= 30) && ((charlvl < 40))) {
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl30.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl30.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}
			} else if ((charlvl >= 40) && ((charlvl < 50))) {
				
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl40.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl40.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}
			} else if ((charlvl >= 50) && ((charlvl < 60))) {
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl50.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl50.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}

			} else if ((charlvl >= 60) && ((charlvl < 70))) {
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl60.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl60.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}

			} else if ((charlvl >= 70) && ((charlvl < 80))) {
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl70.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl70.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}

			} else if ((charlvl >= 80) && ((charlvl < 90))) {
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl80.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl80.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}

			} else if ((charlvl >= 90) && ((charlvl < 100))) {
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl90.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl90.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}

			} else if ((charlvl >= 100) && ((charlvl < 110))) {
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl100.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl100.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}

			} else if ((charlvl >= 110) && ((charlvl < 120))) {
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl110.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl110.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}

			} else if (charlvl > 120) {
				i=0;
				while (choose.length < 4){
					if (i == 0){
						choose.push(Math.floor(Math.random() * (lvl120.length-1)))
					} else {
						check = Math.floor(Math.random() * (lvl120.length-1))
						for (j=0;j<choose.length;j++){
							if (choose[j] == check)
								break;
							else if (j == choose.length-1)
								choose.push(check)
						}
					}
					i++;
				}
				for (k=0;k<choose.length;k++){
					setqcode = concstr.concat(choose[k].toString()+"%")
					concstr = setqcode;
				}

			}
			reg = cm.regSPquest(setqcode);
			/*for (i=0;i<setqcode.length;i++){
				if (setqcode.charAt(i) != "%")
					qloot.push(parseInt(setqcode.charAt(i)));
			}*/
			cm.sendText(setqcode);
			counter = [];
			for (i=0;i<setqcode.length;i++){
					if (setqcode.charAt(i) == "%"){
							index += 1;
						 if (index == 1)
							 counter.push(i);
						 else if (index == 2)
							 counter.push(i);
						 else if (index == 3)
							 counter.push(i);
						 else if (index == 4)
							 counter.push(i);
					}	
			}
			qloot.push(parseInt(setqcode.substring(0, counter[0])));
			qloot.push(parseInt(setqcode.substring(counter[0]+1, counter[1])));
			qloot.push(parseInt(setqcode.substring(counter[1]+1, counter[2])));
			qloot.push(parseInt(setqcode.substring(counter[2]+1, counter[3])));
			cm.sendText(qloot);
			if (charlvl < 10){
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl0[qloot[0]].toString()+"##v"+lvl0[qloot[1]].toString()+"##v"+lvl0[qloot[2]].toString()+"##v"+lvl0[qloot[3]].toString()+"#");
			} else if ((charlvl >= 10) && ((charlvl < 20))) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl10[qloot[0]].toString()+"##v"+lvl10[qloot[1]].toString()+"##v"+lvl10[qloot[2]].toString()+"##v"+lvl10[qloot[3]].toString()+"#");
			} else if ((charlvl >= 20) && ((charlvl < 30))) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl20[qloot[0]].toString()+"##v"+lvl20[qloot[1]].toString()+"##v"+lvl20[qloot[2]].toString()+"##v"+lvl20[qloot[3]].toString()+"#");
			} else if ((charlvl >= 30) && ((charlvl < 40))) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl30[qloot[0]].toString()+"##v"+lvl30[qloot[1]].toString()+"##v"+lvl30[qloot[2]].toString()+"##v"+lvl30[qloot[3]].toString()+"#");
			} else if ((charlvl >= 40) && ((charlvl < 50))) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl40[qloot[0]].toString()+"##v"+lvl40[qloot[1]].toString()+"##v"+lvl40[qloot[2]].toString()+"##v"+lvl40[qloot[3]].toString()+"#");
			} else if ((charlvl >= 50) && ((charlvl < 60))) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl50[qloot[0]].toString()+"##v"+lvl50[qloot[1]].toString()+"##v"+lvl50[qloot[2]].toString()+"##v"+lvl50[qloot[3]].toString()+"#");
			} else if ((charlvl >= 60) && ((charlvl < 70))) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl60[qloot[0]].toString()+"##v"+lvl60[qloot[1]].toString()+"##v"+lvl60[qloot[2]].toString()+"##v"+lvl60[qloot[3]].toString()+"#");
			} else if ((charlvl >= 70) && ((charlvl < 80))) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl70[qloot[0]].toString()+"##v"+lvl70[qloot[1]].toString()+"##v"+lvl70[qloot[2]].toString()+"##v"+lvl70[qloot[3]].toString()+"#");
			} else if ((charlvl >= 80) && ((charlvl < 90))) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl80[qloot[0]].toString()+"##v"+lvl80[qloot[1]].toString()+"##v"+lvl80[qloot[2]].toString()+"##v"+lvl80[qloot[3]].toString()+"#");
			} else if ((charlvl >= 90) && ((charlvl < 100))) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl90[qloot[0]].toString()+"##v"+lvl90[qloot[1]].toString()+"##v"+lvl90[qloot[2]].toString()+"##v"+lvl90[qloot[3]].toString()+"#");
			} else if ((charlvl >= 100) && ((charlvl < 110))) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl100[qloot[0]].toString()+"##v"+lvl100[qloot[1]].toString()+"##v"+lvl100[qloot[2]].toString()+"##v"+lvl100[qloot[3]].toString()+"#");
			} else if ((charlvl >= 110) && ((charlvl < 120))) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl110[qloot[0]].toString()+"##v"+lvl110[qloot[1]].toString()+"##v"+lvl110[qloot[2]].toString()+"##v"+lvl110[qloot[3]].toString()+"#");
			} else if (charlvl > 120) {
					cm.sendOk("Please bring #g20 of each:#k\r\n\r\n#v"+lvl120[qloot[0]].toString()+"##v"+lvl120[qloot[1]].toString()+"##v"+lvl120[qloot[2]].toString()+"##v"+lvl120[qloot[3]].toString()+"#");
			
			}
		cm.dispose();
		}
	}
}
