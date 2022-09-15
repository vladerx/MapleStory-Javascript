/*
	-2000024-ammonia
	-2000025-HCL
	-2000026-NaOH
	-2000027-DW
	-2000028-NaCL
	-2000029-chlorine
	-2000030-sulfur
	-2000031-bromine
	-2000032-phosphate
	-4011009-Brass plate
	-4011010-cupricamine plate
	-4011011-glass fragment
	-4011012-metal oxide plate
	-4011013-patina plate
	4011014-quartz ore
	4011000-bronze plate
	4011001-steel plate	
	4011015-meteorite plate
	4011016-cobalt plate
*/

var status;
var selec = -1;

function start() {
    status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.deleteselect();
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("Hey !\r\nIm Robert i use chemistry to craft variety of substances and materials.");
		} else if (status == 1) {
			cm.sendSimple("you can choose one of the following materials:\r\n#b#L1##z4011009##l\r\n#L2##z4011010##l\r\n#L3##z4011011##l\r\n#L4##z4011012##l\r\n#L5##z4011013##l\r\n#L6##z2000028##l\r\n#L7##z2000027##l\r\n#L8##z4011015##l\r\n#L9##z4011016##l#k");
		} else if (status == 2) {
			cm.setselect(selection);
			if (selection == 1){
				cm.sendNext(" To craft #b#z4011009##k you need #g100,000 mesos#k and:\r\n\r\n#g#ex1#n #i4011000#\t\t#ex1 #i4011001#\r\n\r\n#ex1 #i2000025##n");
			} else if (selection == 2){
				cm.sendNext(" To craft #b#z4011010##k you need #g100,000 mesos#k and:\r\n\r\n#g#ex1#n #i4011000#\r\n\r\n#ex1 #i2000024##n");
			} else if (selection == 3){
				cm.sendNext(" To craft #b#z4011011##k you need #g200,000 mesos#k and:\r\n\r\n#g#ex2#n #i4011014#\t\t#ex1 #i2000025##n");
			} else if (selection == 4){
				cm.sendNext(" To craft #b#z4011012##k you need #g100,000 mesos#k and:\r\n\r\n#g#ex1#n #i4011000#\t\t#ex1 #i4011001##n\r\n\r\n#ex1 #i2000024##n");
			} else if (selection == 5){
				cm.sendNext(" To craft #b#z4011013##k you need #g200,000 mesos#k and:\r\n\r\n#g#ex1#n #i4011000#\t\t#ex1 #i2000027##n\r\n\r\n#ex1 #i2000026##n");
			} else if (selection == 6){
				cm.sendNext(" To craft #b#z2000028##k you need #g100,000 mesos#k and:\r\n\r\n#g#ex1#n #i2000025#\t\t#ex1 #i2000026##n");
			} else if (selection == 7){
				cm.sendNext(" To craft #b#z2000027##k you need #g1,000,000 mesos#k and:\r\n\r\n#g#ex1#n #i2000028##n");
			} else if (selection == 8){
				cm.sendNext(" To craft #b#z4011015##k you need #g10,000,000 mesos#k and:\r\n\r\n#g#ex1#n #i2000029##n\r\n\r\n#g#ex1#n #i2000030##n\r\n\r\n#g#ex1#n #i4011001##n");
			} else if (selection == 9){
				cm.sendNext(" To craft #b#z4011016##k you need #g20,000,000 mesos#k and:\r\n\r\n#g#ex1#n #i2000031##n\r\n\r\n#g#ex1#n #i2000032##n\r\n\r\n#g#ex1#n #i4011000##n");
			} 
		} else if (status == 3) {
			selec = cm.getselect();
			if (selec == 1){
				if ((cm.haveItem(4011000, 1)) && (cm.haveItem(4011001, 1)) && (cm.haveItem(2000025, 1)) && (cm.getMeso()> 100000)){
					if (cm.canHold(4011009)){
						cm.gainItem(4011000,-1);
						cm.gainItem(4011001,-1);
						cm.gainItem(2000025,-1);
						cm.gainMeso(-100000);
						cm.gainItem(4011009,1);
						cm.sendNext("its all ready!\r\ncome back if you need more.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 2){
				if ((cm.haveItem(4011000, 1)) && (cm.haveItem(2000024, 1)) && (cm.getMeso()> 100000)){
					if (cm.canHold(4011010)){
						cm.gainItem(4011000,-1);
						cm.gainItem(2000024,-1);
						cm.gainMeso(-100000);
						cm.gainItem(4011010,1);					
						cm.sendNext("its all ready!\r\ncome back if you need more.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 3){
				if ((cm.haveItem(4011014, 2)) && (cm.haveItem(2000025, 1)) && (cm.getMeso()> 200000)){
					if (cm.canHold(4011011)){
						cm.gainItem(4011014,-2);
						cm.gainItem(2000025,-1);
						cm.gainMeso(-200000);
						cm.gainItem(4011011,1);
						cm.sendNext("its all ready!\r\ncome back if you need more.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 4){
				if ((cm.haveItem(4011000, 1)) && (cm.haveItem(4011001, 1)) && (cm.haveItem(2000024, 1)) && (cm.getMeso()> 100000)){
					if (cm.canHold(4011012)){
						cm.gainItem(4011000,-1);
						cm.gainItem(4011001,-1);
						cm.gainItem(2000024,-1);
						cm.gainMeso(-100000);
						cm.gainItem(4011012,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 5){
				if ((cm.haveItem(4011000, 1)) && (cm.haveItem(2000027, 1)) && (cm.haveItem(2000026, 1)) && (cm.getMeso()> 200000)){
					if (cm.canHold(4011013)){
						cm.gainItem(4011000,-1);
						cm.gainItem(2000027,-1);
						cm.gainItem(2000026,-1);
						cm.gainMeso(-200000);
						cm.gainItem(4011013,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 6){
				if ((cm.haveItem(2000025, 1)) && (cm.haveItem(2000026, 1)) && (cm.getMeso()> 100000)){
					if (cm.canHold(2000028)){
						cm.gainItem(2000025,-1);
						cm.gainItem(2000026,-1);
						cm.gainMeso(-100000);
						cm.gainItem(2000028,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 7){
				if ((cm.haveItem(2000028, 1)) && (cm.getMeso()> 1000000)){
					if (cm.canHold(2000027)){
						cm.gainItem(2000028,-1);
						cm.gainMeso(-1000000);
						cm.gainItem(2000027,1);
						cm.gainItem(2022286,1);
						cm.sendNext("There you go!\r\nNotice you got as a by product:\r\n\r\n#i2022286#\r\n\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 8){
				if ((cm.haveItem(2000029, 1)) && (cm.haveItem(2000030, 1)) && (cm.haveItem(4011001, 1)) && (cm.getMeso()> 10000000)){
					if (cm.canHold(4011015)){
						cm.gainItem(2000029,-1);
						cm.gainItem(2000030,-1);
						cm.gainItem(4011001,-1);
						cm.gainMeso(-10000000);
						cm.gainItem(4011015,1);
						cm.sendNext("There you go! come back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 9){
				if ((cm.haveItem(2000031, 1)) && (cm.haveItem(2000032, 1)) && (cm.haveItem(4011000, 1)) && (cm.getMeso()> 20000000)){
					if (cm.canHold(4011016)){
						cm.gainItem(2000031,-1);
						cm.gainItem(2000032,-1);
						cm.gainItem(4011000,-1);
						cm.gainMeso(-20000000);
						cm.gainItem(4011016,1);
						cm.sendNext("There you go! come back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			}
		cm.deleteselect();
		cm.dispose();
		}
	}
}