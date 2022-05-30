function TaxiQueue() {
 var countPerson = 0;
 var countTaxis = 0;


	function joinQueue() {
		return countPerson++;

	}

	function leaveQueue() {
		return countPerson--;

	}

	function joinTaxiQueue() {
		return countTaxis++;

	}

	function queueLength() {
		if (countPerson <= 0){
			return 0;
		}else{
			return countPerson;
		}

	}

	function taxiQueueLength() {		
		return countTaxis;
	}

	function taxiDepart(){
		if(countTaxis > 0){
			if(countPerson >= 12){
				countPerson = countPerson - 12;
			}
			countTaxis--
		}
		return taxiQueueLength();

	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}