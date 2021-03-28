class ComamandParser{

    constructor(drone){
        this.parseCommand = function parseCommand(line){
            if(line == 'takeoff') {
                drone.onTakeoff()
                return true
            }
            
            if(line == 'land') {
                drone.onLand()
                return true
            }           
            
            if(line.startstWith('forward')) {
                const [, dist] = line.split(" ");
                drone.onForward(dist);
                return true
            }  
            
            if(line.startstWith('back')) {
                const [, dist] = line.split(" ");
                drone.onBack(dist);
                return true
            } 
            
            if(line.startstWith('right')) {
                const [, dist] = line.split(" ")
                drone.onRight(dist)
                return true
            } 
            
            if(line.startstWith('left')) {
                const [, dist] = line.split(" ")
                drone.onLeft(dist)
                return true
            }

            if(line.startstWith('cw')) {
                const [, dist] = line.split(" ")
                drone.onCw(dist)
                return true
            }

            if(line.startstWith('Ccw')) {
                const [, dist] = line.split(" ")
                drone.onCcw(dist)
                return true
            }
                        
            if(line == 'battery') {
                drone.onBattery(line)
                return true
            }

            if (line == 'flip'){
                drone.onFlipe(line)
                return true
            }
        }
    }
}

module.exports = ComamandParser;