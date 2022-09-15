var status;
var ptsize;
var minlevel = 20;
var maxlevel = 200;

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
		if (status == 0) {
			cm.sendSimple("Welcome to #rPerion PQ#k, this PQ has time limit of #e30 Minutes#n.\r\n\r\n#b#L1#Participate in Perion PQ ~ 2-6 members#l#k");									
		} else if (status == 1) {
			if (selection == 1){
				ptsize = cm.getPartySize()
				if (ptsize <= 2){
					cm.sendOk("You need a party of at least 2 memebers in the same map to start #rPerion PQ#k!");
					cm.dispose();
				} else { 
					if (!cm.isPrtyLeader()){
						cm.sendOk("Please ask the party leader to speak with me before entering #rPerion PQ#k!");
						cm.dispose();
					} else {
						if (!cm.checkPartyLevels(minlevel, maxlevel)){
							cm.sendOk("only party members above level "+minlevel.toString()+" can enter #rPerion PQ#k!");
							cm.dispose();
						} else {
							if (!cm.checkPeriPQmapEmpty()){
								cm.sendNext("There is already a party doing the #rPerion PQ#k!")
								cm.dispose();
							} else {
								cm.warparty(111);
								cm.removePQItems(4000305);
								cm.setPeriPQClock();
								cm.dispose();
							}
						}
					}
				}
			} else if (selection == 2){
				var cangetback =  cm.getPQClockOnReturn();
				if (!cangetback){
					cm.sendOk("You cant enter without party or active pq!");
					cm.dispose();
				}
			} else if (selection == 3){
				cm.sendSimple("Please Choose one of the following items for trade:\r\n\r\n#b#L1##t1012091# for 25 #t4001139#s#l\r\n#L2##t1012092# for 25 #t4001139#s#l#k");
			}
		} else if (status == 2){
			if (selection == 1){
				if (cm.canHold(1012091)){
					if(cm.haveItem(4001139,25)){
						cm.gainItem(4001139, -25);
						cm.gainItem(1012091, 1);
						cm.sendNext("There you go come back if you need more!");
					} else {
						cm.sendOk("You need #e25#n of:\r\n\r\n#v4001139#");
						cm.dispose();
					}
				} else {
					cm.sendOk("Please clear space for the item!");
					cm.dispose();
				}
			} else if (selection == 2){
				if (cm.canHold(1012092)){
					if(cm.haveItem(4001139,25)){
						cm.gainItem(4001139, -25);
						cm.gainItem(1012092, 1);
						cm.sendNext("There you go come back if you need more!");
					} else {
						cm.sendOk("You need #e25#n of:\r\n\r\n#v4001139#");
						cm.dispose();
					}
				} else {
					cm.sendOk("Please clear space for the item!");
					cm.dispose();
				}
			}
			cm.dispose();
		}
	}
}