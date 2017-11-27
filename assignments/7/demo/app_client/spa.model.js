class Model extends BaseModel {

    constructor() {
        super()  
        this.APIS = {
            Empl : 'http://localhost:3001/api/v1/employees/'
        }
    }

    getEmplList() {
        return this.http.get(this.APIS.Empl)
            .then( data => {
               return Components.emplTable(data).then(html => { return this.dataBindModel.emplTable = html })
            });
    }

    
    deleteEmpl(evt) {
       const url = `${this.APIS.Empl}${evt.target.dataset.id}`
       return this.http.delete(url)
                .then( ()=>{
                   return this.dataBindModel.deleteResultMsg = 'Todo Deleted'                                
                }).catch( err => {
                    return this.dataBindModel.deleteResultMsg = 'Todo was NOT Deleted'                                 
                }).then( () => {
                   return this.getEmplList()
                });
    }


    saveEmpl(evt) {
        
        let form = evt.target.form        
        if (!form.checkValidity()) {
            this.dataBindModel.saveResultMsg = 'All fields are required'
            return Promise.resolve()
        }
        const data = {
           firstname : this.dataBindModel.fname,
           lastname : this.dataBindModel.lname,
           department: this.dataBindModel.department,
           jobtitle: this.dataBindModel.jobTitle,
           salary: this.dataBindModel.salary,
           startdate: this.dataBindModel.startDate
        }                    
        
        return this.http.post(this.APIS.Empl, data)
                .then( data => {
                   this.dataBindModel.saveResultMsg = 'Todo Saved'
                   return data
                }).catch( err => {
                   this.dataBindModel.saveResultMsg = 'Todo was NOT Saved'   
                   return err
                })
    }
    
    goToUpdatePage(evt) {
        this.redirect('update',{id: evt.target.dataset.id})
        return Promise.resolve()
    }
        
    updatePageLoad() {
        const url = `${this.APIS.Empl}${this.urlParams().get('id')}`
        return this.http.get(url).then( data => {
            this.dataBindModel = {
                fname : data.firstName, 
                lname : data.lastName, 
                jobTitle : data.jobTitle, 
                salary : data.salary, 
                startDate : data.startDate.substring(0, data.startDate.indexOf("T")), 
                department : data.department, 
                id: data._id 
            }
            return data
        })     
    }

    updateEmpl(evt) {
        let form = evt.target.form        
         if (!form.checkValidity()) {
             this.dataBindModel.updateResultMsg = 'All fields are required'
             return Promise.resolve()
         }
        const data = {
           firstname : this.dataBindModel.fname,
           lastname : this.dataBindModel.lname,
           department: this.dataBindModel.department,
           jobtitle: this.dataBindModel.jobTitle,
           salary: this.dataBindModel.salary,
           startdate: this.dataBindModel.startDate
        }
        console.log(this.dataBindModel.id);

         const url = `${this.APIS.Empl}${this.dataBindModel.id}`

         return this.http.put(url, data)
                 .then( data => {
                     this.dataBindModel.updateResultMsg = 'Todo updated'
                     return data
                 }).catch( err => {
                     this.dataBindModel.updateResultMsg = 'Todo was NOT updated'   
                     return err
                 })  
    }

    get isDeleted() {
        const msg = this.dataBindModel.deleteResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1
    }

    get isAdded() {
        const msg = this.dataBindModel.saveResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1 && msg.toLowerCase().indexOf('required') === -1
    }

    get isUpdated() {
        const msg = this.dataBindModel.updateResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1 && msg.toLowerCase().indexOf('required') === -1
    }

}