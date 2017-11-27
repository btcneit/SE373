class Components {
    
   static emplTable(data){
        if ( !Array.isArray(data) ) return Promise.resolve('')
        return Promise.resolve(`${data.map(row=>                                         
                    `<tr>
                        <td>${row._id}</td>
                        <td>${row.firstName + " " + row.lastName}</td>
                        <td>${row.department}</td>
                        <td>${row.jobTitle}</td>
                        <td>${row.salary}</td>
                        <td>${row.startDate.substring(0, row.startDate.indexOf("T"))}</td>
                        <td><button data-id="${row._id}" data-bind-event="click:goToUpdatePage" class="update">Update</button></td>
                        <td><button data-id="${row._id}" data-bind-event="click:deleteEmpl" class="delete">Delete</button></td>
                    </tr>`
                ).join('')}`)
    }
    
}