var status;
var arr = [];
var message = "";
var chance = -1;
var remain = -1;
var stats = ["STR","DEX","INT","LUK","HP","WA.ATT","MA.ATT"];
var saveselect = [-1,-1];
var rates = [1,2,4,8,12,16];
var choose = -1;
var win = -1;
var prev = [-1];
var allzero = -1;
function start() {
        status = -1;
        action(1, 0, 0);
}

function action(mode, type, selection) {
        if (mode == -1) {
                cm.dispose();
        } else {
                if (mode == 0 && type > 0) {
                        cm.dispose();
                        return;
                }
                if (mode == 1)
                        status++;
                else {
                        status--;
				}			
			    if(status == 0) {
					cm.updateEquipChange();
					cm.sendNext("Hey im #rChemist John#k\r\ni use the power of chemistry to upgrade equipments!\r\nBut i can only upgrade the items you are wearing on right now and only one stat at the time with a certain amount of success.\r\nThe amount of success can be improved by gathering more resources and only up to #g50%#k success. #eunsuccessful attempt degrade the item#n...");
			    }
				else if(status == 1) {
					cm.sendNext("Also i can only upgrade one stat that already exists on the item by one point or 10 HP only, new stats cannot be added!\r\nThe stats avaliable for upgrade are #gSTR, DEX, LUK, INT, WA.ATT, MA.ATT, HP#k.\r\n#eCash Shop items cannot be upgraded including pet equipment.#n");
			    }
                else if(status == 2) { 
					arr.push.apply(arr, cm.equipedItems(0, -1, -1, 1));
					if (arr.length != 0){
						for (i=0;i<arr.length;i++){
							message += "#b#L"+i.toString()+"##t"+arr[i].toString()+"##l#k\r\n"
						}
						cm.sendSimple("Please choose one of the following items to be upgraded:\r\n"+message);
					} else {
						cm.sendNext("No items equipped, Cashshop items cannot be upgraded!");
						cm.dispose();
					}
				}
				else if(status == 3) {
					allzero = 1;
					arr = [];
					message = "";
					saveselect[0] = selection;
					arr.push.apply(arr, cm.equipedItems(1, selection, selection, 1));
					for (i=0;i<arr.length;i++){
						if (arr[i] != 0){
							if (i == 4 && arr[i] < 10){
								continue;
							}
							allzero = 0;
							message += "#b#L"+i.toString()+"#"+stats[i]+"#l#k\r\n"
						}
					}
					if (allzero == 0){
						cm.sendSimple("Please choose one of the following stats to be upgraded:\r\n"+message);
					} else {
						cm.sendNext("The Item you chose has no upgradeable stats!");
						cm.dispose();
					}
				}
				else if(status == 4) {
					if (mode == 0 && type == 0){
						selection = saveselect[1];
						saveselect[1] = -1;
					} 
					saveselect[1] = selection;
					if (selection == 0){
						if (arr[0] != 0){
							cm.sendGetNumber("To upgrade #gSTR#k with #g10%#k success it requires:\r\n\r\n#g#ex1#n#k #b#t4005000##k, #g#ex1#n#k #b#t4011006##k, #g#ex1#n#k #b#t2000024##k and #b2 mil mesos#k.\r\nEach addional #g10%#k of success will raise the required items\r\nPlease choose the success rate #g10#k%, #g20#k%, #g30#k%, #g40#k%, #g50#k% \r\n .",1,1,100);
						} else {
							cm.sendNext("Only stats that already exists on the items allowed to be upgraded!");
							cm.dispose();
						}
					} else if (selection == 1){
						if (arr[1] != 0){
							cm.sendGetNumber("To upgrade #gDEX#k with #g10%#k success it requires:\r\n\r\n#g#ex1#n#k #b#t4005002##k, #g#ex1#n#k #b#t4011006##k, #g#ex1#n#k #b#t2000025##k and #b2 mil mesos#k.\r\nEach addional #g10%#k of success will raise the required items\r\nPlease choose the success rate #g10#k%, #g20#k%, #g30#k%, #g40#k%, #g50#k%. \r\n ",1,1,100);
						} else {
							cm.sendNext("Only stats that already exists on the items allowed to be upgraded!");
							cm.dispose();
						}
					} else if (selection == 2){
						if (arr[2] != 0){
							cm.sendGetNumber("To upgrade #gINT#k with #g10%#k success it requires:\r\n\r\n#g#ex1#n#k #b#t4005001##k, #g#ex1#n#k #b#t4011006##k, #g#ex1#n#k #b#t2000026##k and #b2 mil mesos#k.\r\nEach addional #g10%#k of success will raise the required items\r\nPlease choose the success rate #g10#k%, #g20#k%, #g30#k%, #g40#k%, #g50#k%. \r\n ",1,1,100);
						} else {
							cm.sendNext("Only stats that already exists on the items allowed to be upgraded!");
							cm.dispose();
						}
					} else if (selection == 3){
						if (arr[3] != 0){
							cm.sendGetNumber("To upgrade #gLUK#k with #g10%#k success it requires:\r\n\r\n#g#ex1#n#k #b#t4005003##k, #g#ex1#n#k #b#t4011006##k, #g#ex1#n#k #b#t2000025##k and #b2 mil mesos#k.\r\nEach addional #g10%#k of success will raise the required items\r\nPlease choose the success rate #g10#k%, #g20#k%, #g30#k%, #g40#k%, #g50#k%. \r\n ",1,1,100);
						} else {
							cm.sendNext("Only stats that already exists on the items allowed to be upgraded!");
							cm.dispose();
						}
					} else if (selection == 4){
						if (arr[4] != 0){
							cm.sendGetNumber("To upgrade #gHP#k with #g10%#k success it requires:\r\n\r\n#g#ex1#n#k #b#t4011008##k, #g#ex1#n#k #b#t4011006##k, #g#ex1#n#k #b#t2000024##k and #b2 mil mesos#k.\r\nEach addional #g10%#k of success will raise the required items\r\nPlease choose the success rate #g10#k%, #g20#k%, #g30#k%, #g40#k%, #g50#k%. \r\n ",1,1,100);
						} else {
							cm.sendNext("Only stats that already exists on the items allowed to be upgraded!");
							cm.dispose();
						}
					} else if (selection == 5){
						if (arr[5] != 0){
							cm.sendGetNumber("To upgrade #gWA.ATT#k with #g10%#k success it requires:\r\n\r\n#g#ex2#n#k #b#t4005004##k, #g#ex1#n#k #b#t4011006##k, #g#ex1#n#k #b#t2000026##k and #b4 mil mesos#k.\r\nEach addional #g10%#k of success will raise the required items\r\nPlease choose the success rate #g10#k%, #g20#k%, #g30#k%, #g40#k%, #g50#k%. \r\n ",1,1,100);
						} else {
							cm.sendNext("Only stats that already exists on the items allowed to be upgraded!");
							cm.dispose();
						}
					} else if (selection == 6){
						if (arr[6] != 0){
							cm.sendGetNumber("To upgrade #gMA.ATT#k with #g10%#k success it requires:\r\n\r\n#g#ex2#n#k #b#t4021008##k, #g#ex1#n#k #b#t4011006##k, #g#ex1#n#k #b#t2000025##k and #b4 mil mesos#k.\r\nEach addional #g10%#k of success will raise the required items\r\nPlease choose the success rate #g10#k%, #g20#k%, #g30#k%, #g40#k%, #g50#k%. \r\n ",1,1,100);
						} else {
							cm.sendNext("Only stats that already exists on the items allowed to be upgraded!");
							cm.dispose();
						}
					}
				}else if(status == 5) {
					prev[0] = -1;
					chance = (selection > 0) ? selection : (selection < 0 ? -selection : 1);
					choose = chance / 10
					remain = chance % 10
					if (remain != 0 || chance > 50){
						cm.sendPrev("Wrong value, please type one of the following values: #g10#k, #g20#k, #g30#k, #g40#k, #g50#k");
					} else {
						if (saveselect[1] == 0){
							if (cm.haveItem(4005000,rates[choose-1]) && cm.haveItem(4011006,rates[choose-1]) && cm.haveItem(2000024,rates[choose-1]) && cm.getMeso()>(2000000*rates[choose-1])){
								cm.gainItem(4005000, -rates[choose-1]);
								cm.gainItem(4011006, -rates[choose-1]);
								cm.gainItem(2000024, -rates[choose-1]);
								cm.gainMeso(-(2000000*rates[choose-1]));
								for(i=0;i<choose;i++){
									if (Math.floor(Math.random() * 10) == 0){
										arr[0] += 1;
										win = 1;
										break;
									}
								}
								if (win == 1){
									win = -1;
									cm.sendNext("OW! congratz its worked, enjoy your new upgraded item.");
								} else {
									cm.sendNext("Im sorry to inform you the upgrade failed, better luck next time.");
									prev[0] = 2;
								}
							} else {
								cm.sendPrev("You lack of the following items:\r\n\r\n#g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4005000##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4011006##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t2000024##k and #b"+(2*rates[choose-1]).toString()+" mil mesos#k");
								prev[0] = 1;
							}
						} else if (saveselect[1] == 1){
							if (cm.haveItem(4005002,rates[choose-1]) && cm.haveItem(4011006,rates[choose-1]) && cm.haveItem(2000025,rates[choose-1]) && cm.getMeso()>(2000000*rates[choose-1])){
								cm.gainItem(4005002, -rates[choose-1]);
								cm.gainItem(4011006, -rates[choose-1]);
								cm.gainItem(2000025, -rates[choose-1]);
								cm.gainMeso(-(2000000*rates[choose-1]));
								for(i=0;i<choose;i++){
									if (Math.floor(Math.random() * 10) == 0){
										arr[1] += 1;
										win = 1;
										break;
									}
								}
								if (win == 1){
									win = -1;
									cm.sendNext("OW! congratz its worked, enjoy your new upgraded item.");
								} else {
									cm.sendNext("Im sorry to inform you the upgrade failed, better luck next time.");
									prev[0] = 2;
								}
							} else {
								cm.sendPrev("You lack of the following items:\r\n\r\n#g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4005002##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4011006##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t2000025##k and #b"+(2*rates[choose-1]).toString()+" mil mesos#k");
								prev[0] = 1;
							}
						} else if (saveselect[1] == 2){
							if (cm.haveItem(4005001,rates[choose-1]) && cm.haveItem(4011006,rates[choose-1]) && cm.haveItem(2000026,rates[choose-1]) && cm.getMeso()>(2000000*rates[choose-1])){
								cm.gainItem(4005001, -rates[choose-1]);
								cm.gainItem(4011006, -rates[choose-1]);
								cm.gainItem(2000026, -rates[choose-1]);
								cm.gainMeso(-(2000000*rates[choose-1]));
								for(i=0;i<choose;i++){
									if (Math.floor(Math.random() * 10) == 0){
										arr[2] += 1;
										win = 1;
										break;
									}
								}
								if (win == 1){
									win = -1;
									cm.sendNext("OW! congratz its worked, enjoy your new upgraded item.");
								} else {
									cm.sendNext("Im sorry to inform you the upgrade failed, better luck next time.");
									prev[0] = 2;
								}
							} else {
								cm.sendPrev("You lack of the following items:\r\n\r\n#g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4005001##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4011006##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t2000026##k and #b"+(2*rates[choose-1]).toString()+" mil mesos#k");
								prev[0] = 1;
							}
						} else if (saveselect[1] == 3){
							if (cm.haveItem(4005003,rates[choose-1]) && cm.haveItem(4011006,rates[choose-1]) && cm.haveItem(2000025,rates[choose-1]) && cm.getMeso()>(2000000*rates[choose-1])){
								cm.gainItem(4005003, -rates[choose-1]);
								cm.gainItem(4011006, -rates[choose-1]);
								cm.gainItem(2000025, -rates[choose-1]);
								cm.gainMeso(-(2000000*rates[choose-1]));
								for(i=0;i<choose;i++){
									if (Math.floor(Math.random() * 10) == 0){
										arr[3] += 1;
										win = 1;
										break;
									}
								}
								if (win == 1){
									win = -1;
									cm.sendNext("OW! congratz its worked, enjoy your new upgraded item.");
								} else {
									cm.sendNext("Im sorry to inform you the upgrade failed, better luck next time.");
									prev[0] = 2;
								}
							} else {
								cm.sendPrev("You lack of the following items:\r\n\r\n#g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4005003##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4011006##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t2000025##k and #b"+(2*rates[choose-1]).toString()+" mil mesos#k");
								prev[0] = 1;
							}
						} else if (saveselect[1] == 4){
							if (cm.haveItem(4011008,rates[choose-1]) && cm.haveItem(4011006,rates[choose-1]) && cm.haveItem(2000024,rates[choose-1]) && cm.getMeso()>(2000000*rates[choose-1])){
								cm.gainItem(4011008, -rates[choose-1]);
								cm.gainItem(4011006, -rates[choose-1]);
								cm.gainItem(2000024, -rates[choose-1]);
								cm.gainMeso(-(2000000*rates[choose-1]));
								for(i=0;i<choose;i++){
									if (Math.floor(Math.random() * 10) == 0){
										arr[4] += 1;
										win = 1;
										break;
									}
								}
								if (win == 1){
									win = -1;
									cm.sendNext("OW! congratz its worked, enjoy your new upgraded item.");
								} else {
									cm.sendNext("Im sorry to inform you the upgrade failed, better luck next time.");
									prev[0] = 2;
								}
							} else {
								cm.sendPrev("You lack of the following items:\r\n\r\n#g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4011008##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4011006##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t2000024##k and #b"+(2*rates[choose-1]).toString()+" mil mesos#k");
								prev[0] = 1;
							}
						} else if (saveselect[1] == 5){
							if (cm.haveItem(4005004,rates[choose]) && cm.haveItem(4011006,rates[choose-1]) && cm.haveItem(2000026,rates[choose-1]) && cm.getMeso()>(2000000*rates[choose])){
								cm.gainItem(4005004, -rates[choose]);
								cm.gainItem(4011006, -rates[choose-1]);
								cm.gainItem(2000026, -rates[choose-1]);
								cm.gainMeso(-(2000000*rates[choose]));
								for(i=0;i<choose;i++){
									if (Math.floor(Math.random() * 10) == 0){
										arr[5] += 1;
										win = 1;
										break;
									}
								}
								if (win == 1){
									win = -1;
									cm.sendNext("OW! congratz its worked, enjoy your new upgraded item.");
								} else {
									cm.sendNext("Im sorry to inform you the upgrade failed, better luck next time.");
									prev[0] = 2;
								}
							} else {
								cm.sendPrev("You lack of the following items:\r\n\r\n#g#ex"+(rates[choose]).toString()+"#n#k #b#t4005004##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4011006##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t2000026##k and #b"+(2*rates[choose]).toString()+" mil mesos#k");
								prev[0] = 1;
							}
						} else if (saveselect[1] == 6){
							if (cm.haveItem(4021008,rates[choose]) && cm.haveItem(4011006,rates[choose-1]) && cm.haveItem(2000025,rates[choose-1]) && cm.getMeso()>(2000000*rates[choose])){
								cm.gainItem(4021008, -rates[choose]);
								cm.gainItem(4011006, -rates[choose-1]);
								cm.gainItem(2000025, -rates[choose-1]);
								cm.gainMeso(-(2000000*rates[choose]));
								for(i=0;i<choose;i++){
									if (Math.floor(Math.random() * 10) == 0){
										arr[6] += 1;
										win = 1;
										break;
									}
								}
								if (win == 1){
									win = -1;
									cm.sendNext("OW! congratz its worked, enjoy your new upgraded item.");
								} else {
									cm.sendNext("Im sorry to inform you the upgrade failed, better luck next time.");
									prev[0] = 2;
								}
							} else {
								cm.sendPrev("You lack of the following items:\r\n\r\n#g#ex"+(rates[choose]).toString()+"#n#k #b#t4021008##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t4011006##k, #g#ex"+(rates[choose-1]).toString()+"#n#k #b#t2000025##k and #b"+(2*rates[choose]).toString()+" mil mesos#k");
								prev[0] = 1;
							}
						}
					}
				} else if(status == 6) {
					if (prev[0] == 1){
						cm.dispose();
					} else if (prev[0] == 2) {
						cm.equipedItems(2, saveselect[1], saveselect[0], -1);
					} else {
						cm.equipedItems(2, saveselect[1], saveselect[0], 1);
					}
					cm.dispose();
				}
		}                 
}