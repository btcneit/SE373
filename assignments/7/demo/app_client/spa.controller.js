class Controller {

    constructor(model) {
        this.Model = model
    }

    home() {
        return this.Model.getEmplList()
    }
    
    add() { 
        this.Model.clearDataBindModel()
        return window.Promise.resolve()
    }
    
    update() {        
        return this.Model.updatePageLoad()
    }

}