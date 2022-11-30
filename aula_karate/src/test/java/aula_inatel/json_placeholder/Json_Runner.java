package aula_inatel.json_placeholder;

import com.intuit.karate.junit5.Karate;

public class Json_Runner {
    
    @Karate.Test
    Karate testPokemon() {
        return Karate.run("json_placeholder").relativeTo(getClass());
    }    




}
