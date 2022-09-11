/*
    This file is part of the HeavenMS MapleStory Server
    Copyleft (L) 2016 - 2019 RonanLana

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* NPC Base
	Map Name freemarket
	Leaf - maple weapon trader
 */

var status;
var thiefMaple = [[1472030, 100], [1472032, 200], [1332025, 200]];
var magicianMaple = [[1382009, 100], [1382012, 200]];
var pirateMaple = [[1482020, 100], [1482021, 200], [1492020, 100], [1492021, 200]];
var bowmanMaple = [[1452016, 100], [1452022, 200], [1462014, 100], [1462019, 200]];
var warriorMaple = [[1302020, 100], [1302030, 200], [1412011, 200], [1422014, 200], [1432012, 200], [1442024, 200]];
var lvl77weap = [1492073, 1482073, 1382093, 1372071, 1472111, 1332114, 1462085, 1452100, 1442104, 1432075, 1422057, 1412055, 1402085, 1322084, 1312056, 1302142];

 
function start() {
        status = -1;
        action(1, 0, 0);
}

function action(mode, type, selection) {
	    var weapStr = "";
		var keepSelect = 0;
        if (mode == -1) {
                cm.dispose();
        } else {
                if (mode == 0 && type > 0) {
                        cm.dispose();
                        return;
                }
                if (mode == 1)
                        status++;
                else
                        status--;
    
                if(status == 0) {
                        cm.sendNext("Hey, im #rLeaf#k\r\nIm trading maple weapons for maple leaves\r\n\r\n#i4001126# , #i4001168#");
                }
				else if(status == 1) {
                        cm.sendSimple("Please choose one of the categories below:\r\n#b#e#L1#Thief Maple Weapon#l\r\n#L2#Magician Maple Weapon#l\r\n#L3#Pirate Maple Weapon#l\r\n#L4#Bowman Maple Weapon#l\r\n#L5#Warrior Maple Weapon#l\r\n#L100#Lvl 77 Maple Weapons#l#n");
                }
				else if(status == 2) {
					if (selection == 1){
						keepSelect = 10;
						for (var i = 0; i < thiefMaple.length; i++) {
							keepSelect += 1;
							weapStr += "\r\n#L" + keepSelect + "##t" + thiefMaple[i][0] + "# for " + thiefMaple[i][1] + " maple leaves#l\r\n";
						}
						cm.sendSimple("#b#e"+weapStr+"#b#n");
					}
					if (selection == 2){
						keepSelect = 20;
						for (var i = 0; i < magicianMaple.length; i++) {
							keepSelect += 1;
							weapStr += "\r\n#L" + keepSelect + "##t" + magicianMaple[i][0] + "# for " + magicianMaple[i][1] + " maple leaves#l\r\n";
						}
						cm.sendSimple("Please choose one of the weapons below:\r\n#b#e"+weapStr+"#b#n");
					}
					if (selection == 3){
						keepSelect = 30;
						for (var i = 0; i < pirateMaple.length; i++) {
							keepSelect += 1;
							weapStr += "\r\n#L" + keepSelect + "##t" + pirateMaple[i][0] + "# for " + pirateMaple[i][1] + " maple leaves#l\r\n";
						}
						cm.sendSimple("Please choose one of the weapons below:\r\n#b#e"+weapStr+"#b#n");
					}
					if (selection == 4){
						keepSelect = 40;
						for (var i = 0; i < bowmanMaple.length; i++) {
							keepSelect += 1;
							weapStr += "\r\n#L" + keepSelect + "##t" + bowmanMaple[i][0] + "# for " + bowmanMaple[i][1] + " maple leaves#l\r\n";
						}
						cm.sendSimple("Please choose one of the weapons below:\r\n#b#e"+weapStr+"#b#n");
					}
					if (selection == 5){
						keepSelect = 50;
						for (var i = 0; i < warriorMaple.length; i++) {
							keepSelect += 1;
							weapStr += "\r\n#L" + keepSelect + "##t" + warriorMaple[i][0] + "# for " + warriorMaple[i][1] + " maple leaves#l\r\n";
						}
						cm.sendSimple("Please choose one of the weapons below:\r\n#b#e"+weapStr+"#b#n");
					}
					if (selection == 100){
						keepSelect = 100;
						for (var i = 0; i < lvl77weap.length; i++) {
							keepSelect += 1;
							weapStr += "\r\n#L" + keepSelect + "##t" + lvl77weap[i] + "##l\r\n";
						}
						cm.sendSimple("Please choose one of the weapons below each costs #g1#k :\r\n\r\n #i4001168#\r\n\r\n#b#e"+weapStr+"#b#n");
					}
				}
				else if(status == 3 ) {
					if(selection > 10 && selection < 20){
						if(cm.haveItem(4001126,parseInt(thiefMaple[selection-11][1]))){
							if (cm.canHold(parseInt(thiefMaple[selection-11][0]))){
							    cm.gainItem(parseInt(thiefMaple[selection-11][0]), 1);
								cm.gainItem(4001126,-parseInt(thiefMaple[selection-11][1]));
							    cm.sendNext("It seems like you can purchase #t"+thiefMaple[selection-11][0]+"# for "+thiefMaple[selection-11][1]+" maple leaves");
							} else {
								cm.sendNext("Please clear some space in the inventory before purchase");
							}
						}  else {
							cm.sendNext("Im sorry but you lack of maple leaves");
					      }
					}
                   else if(selection > 20 && selection < 30){
						if(cm.haveItem(4001126,parseInt(magicianMaple[selection-21][1]))){
							if (cm.canHold(parseInt(magicianMaple[selection-21][0]))){
								cm.gainItem(parseInt(magicianMaple[selection-21][0]), 1);
								cm.gainItem(4001126,-parseInt(magicianMaple[selection-21][1]));
								cm.sendNext("It seems like you can purchase #t"+magicianMaple[selection-21][0]+"# for "+magicianMaple[selection-21][1]+" maple leaves");
							} else {
								cm.sendNext("Please clear some space in the inventory before purchase");
							}
						} else {
							cm.sendNext("Im sorry but you lack of maple leaves");
					      }
					}
                   else if(selection > 30 && selection < 40){
						if(cm.haveItem(4001126,parseInt(pirateMaple[selection-31][1]))){
							if (cm.canHold(parseInt(pirateMaple[selection-31][0]))){
								cm.gainItem(parseInt(pirateMaple[selection-31][0]), 1);
								cm.gainItem(4001126,-parseInt(pirateMaple[selection-31][1]));
								cm.sendNext("It seems like you can purchase #t"+pirateMaple[selection-31][0]+"# for "+pirateMaple[selection-31][1]+" maple leaves");
							} else {
								cm.sendNext("Please clear some space in the inventory before purchase");
							}
						} else {
							cm.sendNext("Im sorry but you lack of maple leaves");
					       }
					}
                   else if(selection > 40 && selection < 50){
						if(cm.haveItem(4001126,parseInt(bowmanMaple[selection-41][1]))){
							if (cm.canHold(parseInt(bowmanMaple[selection-41][0]))){
								cm.gainItem(parseInt(bowmanMaple[selection-41][0]), 1);
								cm.gainItem(4001126,-parseInt(bowmanMaple[selection-41][1]));
								cm.sendNext("It seems like you can purchase #t"+bowmanMaple[selection-41][0]+"# for "+bowmanMaple[selection-41][1]+" maple leaves");
							} else {
								cm.sendNext("Please clear some space in the inventory before purchase");
							   }
						} else {
							cm.sendNext("Im sorry but you lack of maple leaves");
					       }
					}
                   else if(selection > 50 && selection < 100){
						if(cm.haveItem(4001126,parseInt(warriorMaple[selection-51][1]))){
							if (cm.canHold(parseInt(warriorMaple[selection-51][0]))){
								cm.gainItem(parseInt(warriorMaple[selection-51][0]), 1);
								cm.gainItem(4001126,-parseInt(warriorMaple[selection-51][1]));
								cm.sendNext("It seems like you can purchase #t"+warriorMaple[selection-51][0]+"# for "+warriorMaple[selection-51][1]+" maple leaves");
							} else {
								cm.sendNext("Please clear some space in the inventory before purchase");
							    }
						} else {
							cm.sendNext("Im sorry but you lack of maple leaves");
					    }
					}
					 else if(selection > 100){
						if(cm.haveItem(4001168,1)){
							if (cm.canHold(parseInt(lvl77weap[selection-101]))){
								cm.gainItem(parseInt(lvl77weap[selection-101]), 1);
								cm.gainItem(4001168,-1);
								cm.sendNext("It seems like you can purchase #t"+lvl77weap[selection-101]+"# for #g1 #t4001168##k");
							} else {
								cm.sendNext("Please clear some space in the inventory before purchase");
							    }
						} else {
							cm.sendNext("Im sorry but you lack of #g1#k :\r\n\r\n#i4001168#");
					    }
					}
				cm.dispose();
				}
        }
}
