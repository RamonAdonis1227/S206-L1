package aula_inatel.south_park;

import com.intuit.karate.junit5.Karate;

public class SouthPark_Runner {
    
    @Karate.Test
    Karate testSouthPark() {
        return Karate.run("south_park").relativeTo(getClass());
    }    




}
