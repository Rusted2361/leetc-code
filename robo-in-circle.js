/**
 * @param {string} instructions
 * @return {boolean}
 */

 var isRobotBounded = function(instructions) {
    let origin = [0,0]
    let direction = 1;
    // for (let i = 0; i < instructions.length; i++){
    //     console.log(direction) 
    //     if (instructions[i] == "G"){  
    //         console.log("G")
    //         if (direction == 1){
    //             origin[1]+=1;
    //         }
    //         if (direction == 2){
    //              origin[0]+=1;
    //         }
    //         if (direction == 3){
    //              origin[1]-=1;
    //         }
    //         if (direction == 4){
    //             origin[0]-=1;
    //         }
    //     }
    //     if (instructions[i] == "R"){
    //         console.log("I am in R case")
    //         switch(direction){
    //             case 1:
    //                 direction = 4
    //                 break
    //             case 2:
    //                 direction = 1
    //                 break
    //             case 3:
    //                 direction = 2
    //                 break
    //             case 4:
    //                 direction = 3
    //                 break
    //         }
    //     }
    //     if (instructions[i] == "L"){
    //         console.log("I am in L case")
    //         switch(direction){
    //             case 1:
    //                 direction = direction + 1
    //                 break
    //             case 2:
    //                 direction = direction + 1
    //                 break
    //             case 3:
    //                 direction = direction + 1
    //                 break
    //             case 4:
    //                 direction = direction - 3
    //                 break
    //         }
    //     }
    // }
    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] == "G") {
            if (direction === 1) origin[1] += 1; // North
            else if (direction === 2) origin[0] += 1; // East
            else if (direction === 3) origin[1] -= 1; // South
            else if (direction === 4) origin[0] -= 1; // West
        } else if (instructions[i] == "R") {
            direction = (direction % 4) + 1; // Change direction clockwise
        } else if (instructions[i] == "L") {
            direction = (direction - 2 + 4) % 4 + 1; // Change direction counterclockwise
        }
    }
    // Check if the robot returns to the original position or is facing a different direction
    // If it's facing a different direction, it will eventually return to the original position after 4 iterations
    return (origin[0] == 0 && origin[1] == 0) || direction != 1;
        
};