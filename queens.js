function solveQueens(n){
	findEligiblePosition([], n);
}

function findEligiblePosition(existingArrangement, nQueens) {
	// queens on a chessboard must occupy their own rank. we can loop through 8 times.	
	if (existingArrangement.length===0) { // if first file all are possible
		for (var rank=0; rank<nQueens; rank++){
			findEligiblePosition([[0,rank]], nQueens);
		}
	} else {
		for (var rank=0; rank<nQueens; rank++){ // loop through every rank to check if it is a valid location for the new Queen
			var newQueenCoord = [existingArrangement.length, rank];
			var acceptablePosition = true; // set true by default
			for (var i=0; i<existingArrangement.length; i++) { // loop through each of the existing quyeens positions and check if new position is valid
				var xDistance = Math.abs(newQueenCoord[0] - existingArrangement[i][0]);
				var yDistance = Math.abs(newQueenCoord[1] - existingArrangement[i][1]);			
				// the coordinate is acceptable only if Dx!==Dy & Dx>0 & Dy>0
				if(!(xDistance!==yDistance && xDistance>0&&yDistance>0)) {
					acceptablePosition = false;					
					break;
				}
			}
			if (acceptablePosition) { // if position is acceptable add coordinate else continue to next rank
				var currentArrangement = existingArrangement.concat([newQueenCoord]);
				if (currentArrangement.length==nQueens){ // if this coordinate is the last one, print the solution, else recurse
					console.log(currentArrangement);
				} else {
					findEligiblePosition(currentArrangement, nQueens);
				}
			}
		}
	}
}

solveQueens(8);