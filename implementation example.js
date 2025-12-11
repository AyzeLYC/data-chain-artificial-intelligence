class data {
    
    /**
     * @param { string || int } data
    **/
    constructor ( data ) {
        
        this.data = data;
        
    };
    
};

class destination {
    
    /**
     * @param { string } destination_type
     * @param { int } destination_index
    **/
    constructor ( destination_type, destination_index ) {
        
        this.type = destination_type;
        this.index = destination_index;
        
    };
    
};

class link {
    
    /**
     * @param { int } ratified_link_version
     * @param { destination } link_coming_from
     * @param { destination } link_going_to
     * param { int } link_strength
    **/
    constructor ( link_coming_from, link_going_to, link_strength ) {
        
        this.version = ratified_link_version;
        this.from = link_coming_from;
        this.to = link_going_to;
        this.strength = link_strength;
        
    };
    
};

class knowledge {
    
    /**
     * @param { string } knowledge_data
     * @param { int } knowledge_links
    **/
    constructor ( knowledge_data, knowledge_links ) {
        
        this.data = knowledge_data;
        this.links = knowledge_links;
        
    };
    
};

var neural_network_links = [];
var neural_network_knowledge = {
    
    "3d": {
        
        
        
    },
    "coding": {
        
        
        
    },
    "language": {
        
        
        
    },
    "mathematical": {
        
        
        
    }
    
};

class train_neural_network {
    
    /**
     * @param { data[] } training_datas
    **/
    constructor ( training_datas ) {
        
        
        
    };
    
};