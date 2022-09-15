/*
	1112408 - Circle of Ancient Strength
	1112407 - Circle of Ancient Thought  
	1112405 - Lilin's Ring
	1112413 - Lilin's Ring
	1112414 - Lilin's Ring
	1112415 - Lilin's Ring
	1112416 - Lilin's Ring
	1012181 - Green Mardi Gras Mask - (no description)
	1012182 - Purple Mardi Gras Mask - (no description)
	1012183 - Red Mardi Gras Mask - (no description)
	1012184 - Royal Green Mardi Gras Mask - (no description)
	1012185 - Royal Purple Mardi Gras Mask - (no description)
	1012186 - Royal Red Mardi Gras Mask - (no description)
	1022103 - Archeologist Glasses
	1022088 - Archeologist Glasses
	1022089 - Archeologist Glasses 
	1122007 - Spiegelmann's Necklace
	1122058 - Spiegelmann's Necklace of Chaos
	1122019 - crafter star
	1122020 - master crafter star
	4021003 - emerald jewel
	4011006 - gold plate
	4021008 - Black Crystal
*/

var status;
var selec = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.deleteselect()
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("Hey !\r\nIm Antoine i use chemistry to make powerfull and beautiful accessories ...\r\nFor the right cost of course ...");
		} else if (status == 1) {
			cm.sendSimple("you can choose one of the following accessories:\r\n#b#L1##z1112408##l\r\n#L2##z1112407##l\r\n#L3##z1112413##l\r\n#L4##z1112414##l\r\n#L5##z1112405##l\r\n#L6##z1012181##l\r\n#L7##z1012182##l\r\n#L8##z1012183##l\r\n#L9##z1012184##l\r\n#L10##z1012185##l\r\n#L11##z1012186##l\r\n#L12##z1022088##l\r\n#L13##z1022103##l\r\n#L14##z1022089##l\r\n#L15##z1122007##l\r\n#L16##z1122058##l\r\n#L17##z1112415##l\r\n#L18##z1122019##l\r\n#L19##z1112416##l\r\n#L20##z1122020##l#k");
		} else if (status == 2) {
			cm.setselect(selection);
			if (selection == 1){
				cm.sendNext(" To craft #b#z1112408##k you need #g1,000,000 mesos#k and:\r\n\r\n#g#ex1#n #i4011006#\r\n\r\n#ex1 #i4021000##n");
			} else if (selection == 2){
				cm.sendNext(" To craft #b#z1112407##k you need #g1,000,000 mesos#k and:\r\n\r\n#g#ex1#n #i4011006#\r\n\r\n#ex1 #i4021002##n");
			} else if (selection == 3){
				cm.sendNext(" To craft #b#z1112413##k you need #g2,000,000 mesos#k and:\r\n\r\n#g#ex2#n #i4011006#\t\t#ex1 #i4011010##n\r\n\r\n#ex1 #i4011013##n");
			} else if (selection == 4){
				cm.sendNext(" To craft #b#z1112414##k you need #g4,000,000 mesos#k and:\r\n\r\n#g#ex4#n #i4011006#\t\t#ex1 #i4011009##n\r\n\r\n#ex2 #i4011010##n\t\t#ex2 #i4011013##n");
			} else if (selection == 5){
				cm.sendNext(" To craft #b#z1112405##k you need #g8,000,000 mesos#k and:\r\n\r\n#g#ex8#n #i4011006#\t\t#ex2 #i4011009##n\r\n\r\n#ex4 #i4011010##n\t\t#ex4 #i4011013##n");
			} else if (selection == 6){
				cm.sendNext(" To craft #b#z1012181##k you need #g1,000,000 mesos#k and:\r\n\r\n#g#ex1#n #i4011006#\t\t#ex1 #i4021003##n");
			} else if (selection == 7){
				cm.sendNext(" To craft #b#z1012182##k you need #g2,000,000 mesos#k and:\r\n\r\n#g#ex2#n #i4011006#\t\t#ex1 #i4011009##n\r\n\r\n#ex1 #i4011010##n");
			} else if (selection == 8){
				cm.sendNext(" To craft #b#z1012183##k you need #g4,000,000 mesos#k and:\r\n\r\n#g#ex4#n #i4011006#\t\t#ex2 #i4011009##n\r\n\r\n#ex2 #i4011010##n");
			} else if (selection == 9){
				cm.sendNext(" To craft #b#z1012184##k you need #g1,000,000 mesos#k and:\r\n\r\n#g#ex1#n #i4011006#\t\t#ex1 #i4021003##n");
			} else if (selection == 10){
				cm.sendNext(" To craft #b#z1012185##k you need #g2,000,000 mesos#k and:\r\n\r\n#g#ex2#n #i4011006#\t\t#ex1 #i4011009##n\r\n\r\n#ex1 #i4011010##n");
			} else if (selection == 11){
				cm.sendNext(" To craft #b#z1012186##k you need #g4,000,000 mesos#k and:\r\n\r\n#g#ex4#n #i4011006#\t\t#ex2 #i4011009##n\r\n\r\n#ex2 #i4011010##n");
			} else if (selection == 12){
				cm.sendNext(" To craft #b#z1022088##k you need #g2,000,000 mesos#k and:\r\n\r\n#g#ex1#n #i4011011#\r\n\r\n#ex1 #i4011012##n");
			} else if (selection == 13){
				cm.sendNext(" To craft #b#z1022103##k you need #g4,000,000 mesos#k and:\r\n\r\n#g#ex2#n #i4011011#\r\n\r\n#ex2 #i4011012##n");
			} else if (selection == 14){
				cm.sendNext(" To craft #b#z1022089##k you need #g8,000,000 mesos#k and:\r\n\r\n#g#ex4#n #i4011011#\r\n\r\n#ex4 #i4011012##n");
			} else if (selection == 15){
				cm.sendNext(" To craft #b#z1122007##k you need #g2,000,000 mesos#k and:\r\n\r\n#g#ex1#n #i4011006#\r\n\r\n#ex1 #i4021008##n");
			} else if (selection == 16){
				cm.sendNext(" To craft #b#z1122058##k you need\r\n #g8,000,000 mesos#k and:\r\n\r\n#g#ex2#n #i4011006#\t\t#ex2 #i4021008##n\r\n\r\n#ex1 #i4011009##n\t\t#ex1 #i4011013##n");
			} else if (selection == 17){
				cm.sendNext(" To craft #b#z1112415##k you need\r\n #g20,000,000 mesos#k and:\r\n\r\n#g#ex5#n #i4011006#\r\n\r\n#ex2 #i4011015##n");
			} else if (selection == 18){
				cm.sendNext(" To craft #b#z1122019##k you need\r\n #g25,000,000 mesos#k and:\r\n\r\n#g#ex7#n #i4011006#\r\n\r\n#ex2 #i4011015##n");
			} else if (selection == 19){
				cm.sendNext(" To craft #b#z1112416##k you need\r\n #g35,000,000 mesos#k and:\r\n\r\n#g#ex5#n #i4011006#\r\n\r\n#ex3 #i4011015#\r\n\r\n#ex3 #i4011016##n");
			} else if (selection == 20){
				cm.sendNext(" To craft #b#z1122019##k you need\r\n #g50,000,000 mesos#k and:\r\n\r\n#g#ex10#n #i4011006#\r\n\r\n#ex5 #i4011015#\r\n\r\n#ex5 #i4011016##n");
			}
		} else if (status == 3) {
			selec = cm.getselect();
			if (selec == 1){
				if ((cm.haveItem(4011006, 1)) && (cm.haveItem(4021000, 1)) && (cm.getMeso()> 1000000)){
					if (cm.canHold(1112408)){
						cm.gainItem(4011006,-1);
						cm.gainItem(4021000,-1);
						cm.gainMeso(-1000000);
						cm.gainItem(1112408,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 2){
				if ((cm.haveItem(4011006, 1)) && (cm.haveItem(4021002, 1)) && (cm.getMeso()> 1000000)){
					if (cm.canHold(1112407)){
						cm.gainItem(4011006,-1);
						cm.gainItem(4021002,-1);
						cm.gainMeso(-1000000);
						cm.gainItem(1112407,1);					
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 3){
				if ((cm.haveItem(4011006, 2)) && (cm.haveItem(4011010, 1)) && (cm.haveItem(4011013, 1)) && (cm.getMeso()> 2000000)){
					if (cm.canHold(1112413)){
						cm.gainItem(4011006,-2);
						cm.gainItem(4011010,-1);
						cm.gainItem(4011013,-1);
						cm.gainMeso(-2000000);
						cm.gainItem(1112413,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 4){
				if ((cm.haveItem(4011006, 4)) && (cm.haveItem(4011009, 1)) && (cm.haveItem(4011010, 2)) && (cm.haveItem(4011013, 2)) && (cm.getMeso()> 4000000)){
					if (cm.canHold(1112414)){
						cm.gainItem(4011006,-4);
						cm.gainItem(4011009,-1);
						cm.gainItem(4011010,-2);
						cm.gainItem(4011013,-2);
						cm.gainMeso(-4000000);
						cm.gainItem(1112414,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 5){
				if ((cm.haveItem(4011006, 8)) && (cm.haveItem(4011009, 2)) && (cm.haveItem(4011010, 4)) && (cm.haveItem(4011013, 4)) && (cm.getMeso()> 8000000)){
					if (cm.canHold(1112405)){
						cm.gainItem(4011006,-8);
						cm.gainItem(4011009,-2);
						cm.gainItem(4011010,-4);
						cm.gainItem(4011013,-4);
						cm.gainMeso(-8000000);
						cm.gainItem(1112405,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 6){
				if ((cm.haveItem(4011006, 1)) && (cm.haveItem(4021003, 1)) && (cm.getMeso()> 1000000)){
					if (cm.canHold(1012181)){
						cm.gainItem(4011006,-1);
						cm.gainItem(4021003,-1);
						cm.gainMeso(-1000000);
						cm.gainItem(1012181,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 7){
				if ((cm.haveItem(4011006, 2)) && (cm.haveItem(4011009, 1)) && (cm.haveItem(4011010, 1)) && (cm.getMeso()> 2000000)){
					if (cm.canHold(1012182)){
						cm.gainItem(4011006,-2);
						cm.gainItem(4011009,-1);
						cm.gainItem(4011010,-1);
						cm.gainMeso(-2000000);
						cm.gainItem(1012182,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 8){
				if ((cm.haveItem(4011006, 4)) && (cm.haveItem(4011009, 2)) && (cm.haveItem(4011010, 2)) && (cm.getMeso()> 4000000)){
					if (cm.canHold(1012183)){
						cm.gainItem(4011006,-4);
						cm.gainItem(4011009,-2);
						cm.gainItem(4011010,-2);
						cm.gainMeso(-4000000);
						cm.gainItem(1012183,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 9){
				if ((cm.haveItem(4011006, 1)) && (cm.haveItem(4021003, 1)) && (cm.getMeso()> 1000000)){
					if (cm.canHold(1012184)){
						cm.gainItem(4011006,-1);
						cm.gainItem(4021003,-1);
						cm.gainMeso(-1000000);
						cm.gainItem(1012184,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 10){
				if ((cm.haveItem(4011006, 2)) && (cm.haveItem(4011009, 1)) && (cm.haveItem(4011010, 1)) && (cm.getMeso()> 2000000)){
					if (cm.canHold(1012185)){
						cm.gainItem(4011006,-2);
						cm.gainItem(4011009,-1);
						cm.gainItem(4011010,-1);
						cm.gainMeso(-2000000);
						cm.gainItem(1012185,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 11){
				if ((cm.haveItem(4011006, 4)) && (cm.haveItem(4011009, 2)) && (cm.haveItem(4011010, 2)) && (cm.getMeso()> 4000000)){
					if (cm.canHold(1012186)){
						cm.gainItem(4011006,-4);
						cm.gainItem(4011009,-2);
						cm.gainItem(4011010,-2);
						cm.gainMeso(-4000000);
						cm.gainItem(1012186,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 12){
				if ((cm.haveItem(4011011, 1)) && (cm.haveItem(4011012, 1)) && (cm.getMeso()> 2000000)){
					if (cm.canHold(1022088)){
						cm.gainItem(4011011,-1);
						cm.gainItem(4011012,-1);
						cm.gainMeso(-2000000);
						cm.gainItem(1022088,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 13){
				if ((cm.haveItem(4011011, 2)) && (cm.haveItem(4011012, 2)) && (cm.getMeso()> 4000000)){
					if (cm.canHold(1022103)){
						cm.gainItem(4011011,-2);
						cm.gainItem(4011012,-2);
						cm.gainMeso(-4000000);
						cm.gainItem(1022103,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 14){
				if ((cm.haveItem(4011011, 4)) && (cm.haveItem(4011012, 4)) && (cm.getMeso()> 8000000)){
					if (cm.canHold(1022089)){
						cm.gainItem(4011011,-4);
						cm.gainItem(4011012,-4);
						cm.gainMeso(-8000000);
						cm.gainItem(1022089,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 15){
				if ((cm.haveItem(4011006, 1)) && (cm.haveItem(4021008, 1)) && (cm.getMeso()> 2000000)){
					if (cm.canHold(1122007)){
						cm.gainItem(4011006,-1);
						cm.gainItem(4021008,-1);
						cm.gainMeso(-2000000);
						cm.gainItem(1122007,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 16){
				if ((cm.haveItem(4011006, 2)) && (cm.haveItem(4021008, 2)) && (cm.haveItem(4011009, 1)) && (cm.haveItem(4011013, 1)) && (cm.getMeso()> 8000000)){
					if (cm.canHold(1122058)){
						cm.gainItem(4011006,-2);
						cm.gainItem(4021008,-2);
						cm.gainItem(4011009,-1);
						cm.gainItem(4011013,-1);
						cm.gainMeso(-8000000);
						cm.gainItem(1122058,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 17){
				if ((cm.haveItem(4011006, 5)) && (cm.haveItem(4011015, 2)) && (cm.getMeso()> 20000000)){
					if (cm.canHold(1112415)){
						cm.gainItem(4011006,-5);
						cm.gainItem(4011015,-2);
						cm.gainMeso(-20000000);
						cm.gainItem(1112415,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 18){
				if ((cm.haveItem(4011006, 7)) && (cm.haveItem(4011015, 2)) && (cm.getMeso()> 25000000)){
					if (cm.canHold(1122019)){
						cm.gainItem(4011006,-7);
						cm.gainItem(4011015,-2);
						cm.gainMeso(-25000000);
						cm.gainItem(1122019,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 19){
				if ((cm.haveItem(4011006, 5)) && (cm.haveItem(4011015, 3)) && (cm.haveItem(4011016, 3)) && (cm.getMeso()> 35000000)){
					if (cm.canHold(1112416)){
						cm.gainItem(4011006,-5);
						cm.gainItem(4011015,-3);
						cm.gainItem(4011016,-3);
						cm.gainMeso(-35000000);
						cm.gainItem(1112416,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
					} else {
						cm.sendNext("Please clear some space in the inventory before crafting");
					}
				} else {
					cm.sendNext("Im sorry but you lack of the required items.");
				}
			} else if (selec == 20){
				if ((cm.haveItem(4011006, 10)) && (cm.haveItem(4011015, 5)) && (cm.haveItem(4011016, 5)) && (cm.getMeso()> 50000000)){
					if (cm.canHold(1122020)){
						cm.gainItem(4011006,-10);
						cm.gainItem(4011015,-5);
						cm.gainItem(4011016,-5);
						cm.gainMeso(-50000000);
						cm.gainItem(1122020,1);
						cm.sendNext("There you go!\r\ncome back for more business.");
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