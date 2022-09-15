var status;
var lottime = "";
var lotStime = "";
var lotEtime = "";
var lotprize = "";
var count = 1;
var copycount = 0;
var accid = -1;
var selec = -1;
var prize = -1;
function start() {
        status = -1;
        action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.deleteselect();
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
			cm.sendNext("Welcome!\r\nIm #rAgent E#k the Lottery npc .\r\nIf there is a lottery i can get you in!\r\n#ejust make sure if you win to claim the prize before another lottery starts#n");
		else if (status == 1){
			lottime = cm.checkLotStatus();
			if (lottime.charAt(0) == "#"){
				for (i=1;i<lottime.length;i++){
					if (lottime.charAt(i) == "$")
						break;
					 else 
						 count += 1;
				}
				lotStime = lottime.substring(1, count)
				count += 1;
				copycount = count;
				for (i=count;i<lottime.length;i++){
					if (lottime.charAt(i) == "$")
						break;
					 else 
						 count += 1;
				}
				lotEtime = lottime.substring(copycount, count)
				count += 1;
				lotprize = lottime.substring(count, lottime.length);
				cm.sendNext("Oh!\r\nThere is a lottery going on :\r\nIt started at : #r"+lotStime+"#k\r\nIt ends at : #r"+lotEtime+"#k\r\nThe prize this time is :\r\n\r\n #i"+lotprize+"#");
				cm.setselect(1)
			} else {
				if (lottime.charAt(0) != ""){ 
					cm.sendNext("OW!...OW!...\r\nYou are the winner of the lottery that just ended");
					cm.setselect(2)
				} else {
					cm.sendNext("Im sorry but there is no active event!");
					cm.dispose();
				}
			}
		}
		else if (status == 2) {
			selec = cm.getselect();
			if (selec == 1)
			cm.sendYesNo("Would you like me to register you for the current lottery?")
			else if (selec == 2)
				cm.sendYesNo("Would you like to claim the prize?")
		} else if (status == 3) {
			selec = cm.getselect();
			if (selec == 1)
			cm.sendOk(cm.lottEntryUpdate());
			if (selec == 2){
				prize = cm.resprize()
				if (cm.canHold(prize)){
					cm.gainItem(prize, 1);
					cm.announceClaimer();
				} else {
					cm.sendOk("Please clear some space for the items");
				}
			}
		cm.deleteselect();
		cm.dispose();
		}
	}
}
